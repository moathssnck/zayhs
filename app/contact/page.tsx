import { ContactForm } from "@/components/ui/contact-form";
import { ContactInfo } from "@/components/ui/contact-info";
import { Footer } from "@/components/ui/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <main className="flex-1 bg-white">
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
