import { useState } from "react";
import { toast } from "sonner";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    country: "",
    course: "",
    captcha: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.captcha !== "40") {
      toast.error("Incorrect captcha answer. Please try again.");
      return;
    }

    toast.success("Application submitted successfully! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      country: "",
      course: "",
      captcha: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
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
          className="w-full px-4 py-3 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
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
          className="w-full px-4 py-3 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-sm font-semibold mb-2">
          WhatsApp Number *
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          required
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
          placeholder="+92 300 1234567"
        />
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-semibold mb-2">
          Country *
        </label>
        <input
          type="text"
          id="country"
          name="country"
          required
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
          placeholder="Enter your country"
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
          className="w-full px-4 py-3 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
        >
          <option value="">Choose a course...</option>
          <option value="qaida">Noorani Qaida</option>
          <option value="tajweed">Tajweed Course</option>
          <option value="hifz">Hifz Program</option>
          <option value="translation">Quran Translation</option>
          <option value="tafseer">Tafseer Course</option>
          <option value="nahjul">Nahjul Balagha</option>
        </select>
      </div>

      <div>
        <label htmlFor="captcha" className="block text-sm font-semibold mb-2">
          Security Check: What is 10 + 30? *
        </label>
        <input
          type="text"
          id="captcha"
          name="captcha"
          required
          value={formData.captcha}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
          placeholder="Enter your answer"
        />
      </div>

      <button type="submit" className="w-full btn-primary text-center">
        Submit Application
      </button>
    </form>
  );
};

export default AdmissionForm;
