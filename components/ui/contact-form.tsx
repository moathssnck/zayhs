"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    notes: "",
  })

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3 text-gray-900">تواصل معنا</h1>
        <p className="text-gray-600 text-sm">للإجابة على أسئلتك أو اقتراحاتك الرجاء تعبئة الخانات أدناه</p>
        <div className="w-full h-1 bg-gradient-to-r from-pink-500 to-pink-600 mt-4" />
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-right block text-gray-700">
            الاسم
          </Label>
          <Input
            id="name"
            type="text"
            className="w-full bg-gray-50 border-gray-200 text-right"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-right block text-gray-700">
            البريد الإلكتروني
          </Label>
          <Input
            id="email"
            type="email"
            className="w-full bg-gray-50 border-gray-200 text-right"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category" className="text-right block text-gray-700">
            اختر التصنيف
          </Label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
            <SelectTrigger className="w-full bg-gray-50 border-gray-200 text-right">
              <SelectValue placeholder="اختر التصنيف" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">استفسار عام</SelectItem>
              <SelectItem value="technical">دعم فني</SelectItem>
              <SelectItem value="billing">الفواتير</SelectItem>
              <SelectItem value="complaint">شكوى</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes" className="text-right block text-gray-700">
            الملاحظات
          </Label>
          <Textarea
            id="notes"
            className="w-full bg-gray-50 border-gray-200 text-right min-h-[150px] resize-none"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          />
        </div>
      </form>
    </div>
  )
}
