import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import courseTajweed from "@/assets/course-tajweed.jpg";
import { CheckCircle } from "lucide-react";

const Tajweed = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[380px] overflow-hidden">
          <img src={courseTajweed} alt="Shia Online Quran Academy Tajweed Course" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white">
              Tajweed Course Online
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Intro */}
            <h2 className="font-heading font-bold text-4xl mb-6 text-primary">
              Learn Tajweed with Al-Hadi Quran Center
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At <strong>Al-Hadi Quran Center</strong>, a trusted <strong>Shia Online Quran Academy</strong>, 
              we offer a structured Tajweed course designed for both kids and adults. 
              Our expert tutors ensure that every student learns the proper articulation, pronunciation, and rhythm, 
              making us one of the most reliable <strong>Online Quran Academies in the USA</strong>.
            </p>

            {/* Course Overview */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Course Overview</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This Tajweed program is carefully crafted for learners of all ages. Whether you’re 
              seeking <strong>Quran Learning for Kids Online</strong> or <strong>Online Quran Teaching for Adults</strong>, 
              our curriculum covers Makharij (articulation points), Sifat (letter characteristics), and advanced rules 
              with hands-on practice under certified teachers.
            </p>

            {/* What You'll Learn */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">What You’ll Learn in Tajweed</h3>
            <ul className="space-y-3 mb-8">
              {[
                "Makharij al-Huruf (articulation points of letters)",
                "Sifat al-Huruf (characteristics of letters)",
                "Rules of Noon Sakinah & Tanween (Izhar, Idgham, Iqlab, Ikhfa)",
                "Rules of Meem Sakinah",
                "Qalqalah (echoing sound) rules",
                "Madd (elongation) types and rules",
                "Rules of Ra and Lam",
                "Waqf and Ibtida (stopping and starting)"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Benefits */}
            <div className="bg-secondary/20 p-8 rounded-xl mb-8">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Why Choose Our Shia Quran Center?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Recite like the Prophet (PBUH)",
                  "Avoid common pronunciation mistakes",
                  "Beautify your Quranic recitation",
                  "Gain confidence in leading prayers",
                  "Expert correction and personalized feedback",
                  "Structured online learning methodology"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/admission" className="btn-hero inline-block mb-4">
                Start Free Trial
              </Link>
              <p className="text-sm text-muted-foreground">
                Experience quality learning with a free demo class before enrollment
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tajweed;
