import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import maleTutor from "@/assets/male-tutor.jpg";
import { CheckCircle, Award, BookOpen, Users, Globe2, Clock } from "lucide-react";

const MaleTutor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="gradient-primary py-20">
          <div className="container-custom text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary-foreground mb-4">
              Shia Online Male Quran Teachers
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Learn Quran with Tajweed, Tafseer, and Hifz from expert Shia male tutors worldwide
            </p>
          </div>
        </section>

        {/* Tutor Profile */}
        <section className="container-custom py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Image Column */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <img
                    src={maleTutor}
                    alt="Male Quran Tutor"
                    className="w-full rounded-2xl shadow-medium"
                  />
                  <div className="mt-6 text-center">
                    <Link to="/admission" className="btn-primary w-full block">
                      Hire This Tutor
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-2">
                <h2 className="font-heading font-bold text-4xl mb-6 text-primary">
                  Qari Muhammad Hassan – Certified Shia Quran Teacher
                </h2>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-secondary/20 p-4 rounded-xl text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">15+ Years</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-xl text-center">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">Certified Hafiz</p>
                    <p className="text-sm text-muted-foreground">Ijazah in Tajweed</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-xl text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">500+ Students</p>
                    <p className="text-sm text-muted-foreground">Worldwide</p>
                  </div>
                </div>

                {/* About */}
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">About the Tutor</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Qari Muhammad Hassan is an experienced Shia Quran teacher specializing in Tajweed, Tafseer, Hifz, and Quran translation. With more than 15 years of online and offline teaching, he has trained hundreds of students across different countries including the USA, UK, Canada, and Japan. His deep knowledge of Shia Fiqh and love for Ahlul Bayt (ع) reflect in his teaching style, ensuring students not only learn to recite but also connect spiritually with the Quran.
                </p>

                {/* Qualifications */}
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Tutor Qualifications</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                    <span className="text-muted-foreground">Hafiz-e-Quran with Ijazah in Tajweed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                    <span className="text-muted-foreground">Master's degree in Islamic Studies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                    <span className="text-muted-foreground">Specialization in Shia Tafseer & Fiqh</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                    <span className="text-muted-foreground">Fluent in Arabic, Urdu, and English</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                    <span className="text-muted-foreground">15+ years of teaching globally</span>
                  </li>
                </ul>

                {/* Teaching Style */}
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Teaching Style</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  His teaching is highly interactive, focusing on Tajweed accuracy, spiritual connection, and contextual understanding. Every class is personalized to match student pace. He blends traditional methods with modern online tools, making sessions engaging for kids, adults, and beginners alike.
                </p>

                {/* Specializations */}
                <div className="bg-secondary/20 p-6 rounded-xl mb-8">
                  <h3 className="font-heading font-bold text-xl mb-4 text-primary">Specializations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" /> Noorani Qaida & basics</div>
                    <div className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" /> Advanced Tajweed rules</div>
                    <div className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" /> Hifz-ul-Quran for all ages</div>
                    <div className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" /> Quran Translation & Tafseer</div>
                    <div className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" /> Shia Fiqh and Aqeedah</div>
                    <div className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" /> Nahjul Balagha & Islamic Ethics</div>
                  </div>
                </div>

                {/* Additional SEO-rich Headings */}
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Why Choose Our Male Quran Tutors?</h3>
                <p className="text-muted-foreground mb-6">
                  Unlike generic online teachers, our Shia male Quran tutors combine authenticity with accessibility. Classes are one-on-one, ensuring focus on your child or yourself. Tutors emphasize love for the Ahlul Bayt, Quran memorization with meaning, and practical application of Quran in daily life.
                </p>

                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Global Availability</h3>
                <p className="text-muted-foreground mb-6 flex items-center">
                  <Globe2 className="h-5 w-5 text-primary mr-2" /> Tutors are available in USA, UK, Canada, Australia, and worldwide with flexible timings that suit your timezone.
                </p>

                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Flexible Schedule & Free Trial</h3>
                <p className="text-muted-foreground mb-6 flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" /> Choose class timings that fit your routine. Book a free trial class to experience the quality before enrolling.
                </p>

                <div className="text-center lg:text-left">
                  <Link to="/admission" className="btn-hero inline-block">
                    Book Your Free Trial Class
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MaleTutor;
