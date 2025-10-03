import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ⭐ Modified handleSubmit with Web3Forms
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "8f556dbd-c4fa-450c-b064-f2f4899252c3"); // your key
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("✅ Message sent successfully! We will get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Something went wrong. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              We're here to help. Reach out to us anytime!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-medium">
              <h2 className="font-heading font-bold text-3xl mb-6 text-primary">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    placeholder="Enter your name"
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

                {/* ⭐ New Phone Number Field */}
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
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button type="submit" className="w-full btn-primary text-center">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              {/* ... your existing info section untouched ... */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
