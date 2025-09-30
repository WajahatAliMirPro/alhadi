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
            alt="About Al-Hadi Quran Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white">About Us</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-6 text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Al-Hadi Quran Center was established with a noble mission: to provide accessible, high-quality Quranic education to Muslims around the world. We believe that every Muslim should have the opportunity to learn the Holy Quran with proper Tajweed, understand its meanings, and implement its teachings in their daily lives.
            </p>

            <h2 className="font-heading font-bold text-3xl mb-6 text-primary">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We envision a world where Quranic knowledge is accessible to everyone, transcending geographical boundaries and time constraints. Through our online platform, we aim to connect students with qualified Shia scholars who can guide them on their spiritual journey with authentic Islamic teachings rooted in the tradition of Ahlul Bayt.
            </p>

            <h2 className="font-heading font-bold text-3xl mb-6 text-primary">Our Teaching Methodology</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Al-Hadi Quran Center, we employ a comprehensive and student-centered approach to Quranic education:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">One-on-One Classes:</strong>
                  <span className="text-muted-foreground"> Personalized attention ensures optimal learning outcomes tailored to each student's pace and needs.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">Qualified Instructors:</strong>
                  <span className="text-muted-foreground"> All our tutors are certified in Quranic sciences, Tajweed, and Islamic studies with years of teaching experience.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">Flexible Scheduling:</strong>
                  <span className="text-muted-foreground"> Choose class times that fit your schedule, making Quranic education convenient for students worldwide.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">Interactive Learning:</strong>
                  <span className="text-muted-foreground"> Using modern technology, we create engaging and interactive lessons that make learning enjoyable and effective.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-foreground">Progress Tracking:</strong>
                  <span className="text-muted-foreground"> Regular assessments and feedback help monitor student progress and ensure continuous improvement.</span>
                </div>
              </li>
            </ul>

            <h2 className="font-heading font-bold text-3xl mb-6 text-primary">Why Choose Al-Hadi?</h2>
            <div className="bg-secondary/20 p-8 rounded-xl mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Specialized in Shia Islamic teachings following the school of Ahlul Bayt</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Native Arabic speakers ensuring authentic pronunciation and Tajweed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Free trial classes to experience our teaching quality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Affordable fees with flexible payment options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Safe and secure online learning environment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">24/7 customer support for all your queries</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Join thousands of students worldwide who have chosen Al-Hadi Quran Center for their Islamic education. Whether you're a beginner taking your first steps in reading the Quran or an advanced student seeking deeper understanding through Tafseer and Fiqh, we have the right program for you. Start your journey today and experience the blessing of Quranic knowledge with Al-Hadi.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
