"use client"

import { ChevronUp } from "lucide-react"
import { useState } from "react"

export function ContactInfo() {
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">تواصل معنا:</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">لأية استفسارات أو مساعدة، لا تتردد في التواصل معنا عبر:</p>

          <div className="space-y-2 text-gray-700 mb-8">
            <p>• خدمة عملاء zsrgnt: 107</p>
            <p>• عروض zsrgnt: 109</p>
            <p>• zsrgnt آي تي في: 144</p>
            <p>• خدمة التجوال: 97107107 (965+)</p>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            فريق خدمة العملاء متاح على مدار الساعة لرد على جميع استفساراتكم.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">ملاحظاتكم قيمة لنا وتساعدنا جاهدين لتوفير أفضل تجربة لكم</p>

          <p className="text-gray-700 font-semibold">شكراً لاختياركم zsrgnt</p>
        </div>

        <div className="space-y-4 mt-12">
          <AccordionItem
            title="الباقات الصوتية"
            isOpen={openSections.includes("voice")}
            onToggle={() => toggleSection("voice")}
          />
          <AccordionItem
            title="باقات الإنترنت"
            isOpen={openSections.includes("internet")}
            onToggle={() => toggleSection("internet")}
          />
          <AccordionItem
            title="الأجهزة"
            isOpen={openSections.includes("devices")}
            onToggle={() => toggleSection("devices")}
          />
          <AccordionItem
            title="الدعم"
            isOpen={openSections.includes("support")}
            onToggle={() => toggleSection("support")}
          />
        </div>
      </div>
    </div>
  )
}

function AccordionItem({
  title,
  isOpen,
  onToggle,
}: {
  title: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-t border-gray-300">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-right hover:bg-gray-100 transition-colors"
      >
        <ChevronUp className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        <span className="text-gray-900 font-medium">{title}</span>
      </button>
    </div>
  )
}
