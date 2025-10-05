import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import aboutBanner from "@/assets/about-banner.jpg";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={aboutBanner}
            alt="About Al-Hadi Shia Online Quran Academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white">
              About Al-Hadi Quran Center
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-6 text-primary">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              <strong>Al-Hadi Quran Center</strong> is a leading{" "}
              <strong>Shia Online Quran Academy</strong> dedicated to providing
              authentic Quran learning for kids and adults worldwide. With
              expert Shia scholars and certified Quran teachers, we aim to make
              Quranic education accessible in the{" "}
              <strong>USA, UK, Canada, Australia, and worldwide</strong>. Our
              mission is to guide Muslims to recite the Holy Quran with proper
              Tajweed, understand its meanings, and apply the teachings of
              Ahlul-Bayt in their daily lives.
            </p>

            <h2 className="font-heading font-bold text-3xl mb-6 text-primary">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe every Shia Muslim deserves quality{" "}
              <strong>online Quran learning</strong>. Our vision is to connect
              students globally with trusted Shia Quran teachers who preserve
              authentic recitation and interpretation. Through flexible online
              classes, Al-Hadi ensures the Quran becomes a source of guidance
              for children, youth, and adults across generations.
            </p>

            <h2 className="font-heading font-bold text-3xl mb-6 text-primary">
              Teaching Methodology
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">
                  <strong>One-on-One Quran Classes:</strong> Personalized
                  sessions tailored to kids and adults.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">
                  <strong>Expert Shia Teachers:</strong> Certified in Tajweed,
                  Tafseer, and Islamic studies.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">
                  <strong>Flexible Scheduling:</strong> Learn anytime,
                  anywhere—ideal for USA and global students.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">
                  <strong>Interactive Quran Lessons:</strong> Engaging teaching
                  methods with modern tools.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">
                  <strong>Progress Tracking:</strong> Regular reports to monitor
                  improvement in Quran recitation and understanding.
                </span>
              </li>
            </ul>

            <h2 className="font-heading font-bold text-3xl mb-6 text-primary">
              Why Choose Al-Hadi Quran Center?
            </h2>
            <div className="bg-secondary/20 p-8 rounded-xl mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                  <span className="text-muted-foreground">
                    Specialized in{" "}
                    <strong>Shia Quran teaching and Ahlul-Bayt traditions</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                  <span className="text-muted-foreground">
                    Courses for kids and adults: Qaida, Tajweed, Hifz, Tafseer
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                  <span className="text-muted-foreground">
                    Affordable pricing with a free trial option
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                  <span className="text-muted-foreground">
                    Qualified native Arabic-speaking Quran tutors
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                  <span className="text-muted-foreground">
                    Trusted by Shia families in the USA, UK, and worldwide
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Thousands of students have already joined{" "}
              <strong>Al-Hadi Shia Quran Academy</strong> to build their Quran
              foundation. Whether you are a parent looking for{" "}
              <strong>online Quran classes for kids</strong> or an adult eager
              to strengthen recitation and Tafseer, Al-Hadi Quran Center is your
              trusted partner in Islamic education. Begin your journey today
              with a <strong>free trial Quran class</strong> and embrace the
              guidance of the Holy Quran.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
