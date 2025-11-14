import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Youtube, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2d1b3d] text-white">
      {/* Main Footer Navigation */}
      <div className="border-b border-purple-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Menu className="w-6 h-6" />

          <div className="flex items-center gap-6">
            <button className="hover:opacity-80 transition-opacity">
              <User className="w-6 h-6" />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <Search className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"></div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <a
              href="/quality-report"
              className="hover:text-white transition-colors"
            >
              تقرير جودة الخدمة
            </a>
            <a
              href="/terms-conditions"
              className="hover:text-white transition-colors"
            >
              الشروط والأحكام
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
