import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { toast } from "sonner";

const Admission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  // ⭐ Web3Forms Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "8f556dbd-c4fa-450c-b064-f2f4899252c3"); // your key
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("course", formData.course);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("✅ Admission form submitted successfully! Our team will contact you soon.");
        setFormData({ name: "", email: "", phone: "", course: "", message: "" });
      } else {
        toast.error("❌ Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Something went wrong. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="gradient-primary py-20">
          <div className="container-custom text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary-foreground mb-4">
              Quick Admission
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Begin your journey with the Holy Quran today. Fill out the form below to get started.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="container-custom py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-10 rounded-2xl shadow-medium">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-3xl mb-4 text-primary">
                  Enroll Now
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Complete this quick form and our admissions team will contact you within 24 hours to discuss your course selection, schedule your free trial class, and answer any questions you may have.
                </p>
              </div>

              {/* 🔥 Admission Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    placeholder="+1 00 0000000"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-semibold mb-2">
                    Select Course *
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                  >
                    <option value="">-- Choose a Course --</option>
                    <option value="Noorani Qaida">Noorani Qaida</option>
                    <option value="Quran Reading">Quran Reading</option>
                    <option value="Tajweed Course">Tajweed Course</option>
                    <option value="Memorization (Hifz)">Memorization (Hifz)</option>
                    
                    <option value="Nahjul balagha">Nahjul Balagha</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                    placeholder="Any specific questions or requirements?"
                  />
                </div>

                <button type="submit" className="w-full btn-primary text-center">
                  Submit Admission
                </button>
              </form>

              {/* Next Steps */}
              <div className="mt-8 p-6 bg-secondary/20 rounded-xl">
                <h3 className="font-semibold text-lg mb-3 text-primary">What happens next?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Our team will review your application</li>
                  <li>• We'll contact you to schedule a free trial class</li>
                  <li>• Meet your qualified tutor and start learning</li>
                  <li>• Begin your journey with the Holy Quran!</li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Have questions? Contact us on{" "}
                  <a
                    href="https://wa.me/923700882006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admission;
