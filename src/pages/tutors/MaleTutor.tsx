import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import maleTutor from "@/assets/male-tutor.jpg";
import { CheckCircle, Award, BookOpen, Users } from "lucide-react";

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
              Male Tutors
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Learn from experienced male scholars dedicated to Quranic education
            </p>
          </div>
        </section>

        {/* Tutor Profile */}
        <section className="container-custom py-16">
          <div className="max-w-5xl mx-auto">
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
                  Qari Muhammad Hassan
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-secondary/20 p-4 rounded-xl text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">15+ Years</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-xl text-center">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">Certified Hafiz</p>
                    <p className="text-sm text-muted-foreground">Quran Memorizer</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-xl text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">500+ Students</p>
                    <p className="text-sm text-muted-foreground">Taught</p>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">About the Tutor</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Qari Muhammad Hassan is a highly qualified Quran teacher with over 15 years of experience in teaching students of all ages and backgrounds. He is a certified Hafiz-e-Quran and holds an Ijazah (certificate) in Quranic recitation with proper Tajweed from renowned Islamic scholars. His passion for teaching and deep understanding of Islamic sciences make him an excellent choice for students seeking authentic Quranic education.
                </p>

                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Qualifications</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Hafiz-e-Quran with Ijazah in Tajweed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Master's degree in Islamic Studies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Specialized in Shia Fiqh and Tafseer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Fluent in Arabic, English, and Urdu</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">15+ years of online teaching experience</span>
                  </li>
                </ul>

                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Teaching Style</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Qari Hassan employs a patient and encouraging teaching methodology that adapts to each student's learning pace and style. He believes in creating a comfortable learning environment where students feel confident to ask questions and make mistakes. His lessons are interactive and engaging, incorporating modern teaching tools with traditional Islamic pedagogy. He emphasizes understanding over rote memorization and ensures students grasp the spiritual significance of what they're learning.
                </p>

                <div className="bg-secondary/20 p-6 rounded-xl mb-6">
                  <h3 className="font-heading font-bold text-xl mb-4 text-primary">Specializations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Noorani Qaida for beginners</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Advanced Tajweed rules</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Hifz program (all ages)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Quran Translation & Tafseer</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Islamic Fiqh and Aqeedah</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Nahjul Balagha studies</span>
                    </div>
                  </div>
                </div>

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
