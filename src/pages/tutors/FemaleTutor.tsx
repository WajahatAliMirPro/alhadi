import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import femaleTutor from "@/assets/female-tutor.jpg";
import { CheckCircle, Award, BookOpen, Users } from "lucide-react";

const FemaleTutor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="gradient-primary py-20">
          <div className="container-custom text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary-foreground mb-4">
              Female Tutors
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Empowering sisters with authentic Quranic knowledge
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
                    src={femaleTutor}
                    alt="Female Quran Tutor"
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
                  Hafiza Fatima Zahra
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-secondary/20 p-4 rounded-xl text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">12+ Years</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-xl text-center">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">Certified Hafiza</p>
                    <p className="text-sm text-muted-foreground">Quran Memorizer</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-xl text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">400+ Students</p>
                    <p className="text-sm text-muted-foreground">Taught</p>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">About the Tutor</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Hafiza Fatima Zahra is a dedicated female Quran teacher who specializes in teaching sisters and children. With over 12 years of experience, she has successfully guided hundreds of students in their Quranic journey. She is a certified Hafiza and holds advanced degrees in Islamic studies from prestigious Islamic institutions. Her gentle and compassionate approach makes learning comfortable and enjoyable, especially for female students who prefer learning from a female instructor.
                </p>

                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Qualifications</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Hafiza-e-Quran with Ijazah in Tajweed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Bachelor's degree in Islamic Theology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Specialized training in children's education</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Fluent in English, Urdu, and Arabic</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">12+ years of teaching experience (online & in-person)</span>
                  </li>
                </ul>

                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Teaching Style</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sister Fatima believes in creating a nurturing and supportive learning environment where students feel comfortable and motivated. Her teaching methodology combines traditional Islamic pedagogical approaches with modern educational techniques. She is particularly skilled at teaching young children and women who are just beginning their Quranic journey. Her lessons are structured yet flexible, incorporating games, stories, and interactive activities to keep students engaged while ensuring solid understanding of concepts.
                </p>

                <div className="bg-secondary/20 p-6 rounded-xl mb-6">
                  <h3 className="font-heading font-bold text-xl mb-4 text-primary">Specializations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Noorani Qaida (kids & adults)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Tajweed for sisters</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Hifz program for girls</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Quran Translation studies</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Islamic etiquette for women</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Basic Fiqh for sisters</span>
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

export default FemaleTutor;
