import { Footer } from "@/components/ui/footer";
import { LegalContent } from "@/components/ui/legal-content";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <main className="flex-1 bg-white">
        <LegalContent type="terms" />
      </main>
      <Footer />
    </div>
  );
}
