import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import courseTafseer from "@/assets/course-tafseer.jpg";
import { CheckCircle } from "lucide-react";

const Tafseer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-[400px] overflow-hidden">
          <img src={courseTafseer} alt="Shia Online Tafseer Course" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white">
              Shia Tafseer Quran Course Online
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">

            <h2 className="font-heading font-bold text-4xl mb-6 text-primary">
              Learn Tafseer with the Leading Shia Online Quran Academy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At <strong>Al-Hadi Quran Center</strong>, our <strong>Tafseer Quran Course Online</strong> is designed 
              for students worldwide who wish to understand the <strong>deeper meanings of the Quran</strong> 
              beyond basic translation. As a trusted <strong>Shia Quran Center</strong> and recognized 
              <strong> Online Quran Academy</strong>, we provide structured lessons guided by 
              qualified Shia scholars with deep knowledge of Islamic traditions from the Ahlul Bayt (A.S).
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Why Learn Tafseer Online?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tafseer (Quranic exegesis) reveals the context, wisdom, and 
              divine guidance behind every verse. Unlike simple translation, Tafseer connects 
              the <strong>historical context, linguistic depth, and spiritual insights</strong> 
              to modern life. This makes it essential for both <strong>adults</strong> 
              seeking advanced knowledge and <strong>kids</strong> beginning their 
              journey in <strong>Quran Learning Online</strong>.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Course Overview</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our <strong>Shia Tafseer Course</strong> is based on authentic sources such as 
              <em> Tafsir al-Mizan, Noor al-Thaqalayn</em>, and other renowned Shia commentaries. 
              Students learn the principles of Tafseer, occasions of revelation, and interpretations 
              passed down from the <strong>Ahlul Bayt (A.S)</strong>. This course is perfect for 
              anyone searching for <strong>Online Quran Teaching for Adults</strong> or 
              <strong> Quran Learning for Kids Online</strong> with Shia guidance.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">What You'll Learn</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Principles and methodology of authentic Shia Tafseer</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Historical background & reasons for revelation (Asbab al-Nuzul)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Linguistic analysis and eloquence of Quranic Arabic</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Theological concepts and Aqeedah explained through verses</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Fiqh rulings and ethics derived from Quran</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Interpretations from Ahlul Bayt traditions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Contemporary applications of Quranic teachings</span>
              </li>
            </ul>

            <div className="bg-secondary/20 p-8 rounded-xl mb-8">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
                Key Benefits of Our Tafseer Course
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Deeper spiritual connection with the Quran</span>
                </li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Structured learning with expert Shia teachers</span>
                </li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Answer complex theological & practical questions</span>
                </li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Improve understanding for daily application</span>
                </li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Support for both adults & kids Quran learning online</span>
                </li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Strong foundation in Shia Islamic knowledge</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link to="/admission" className="btn-hero inline-block mb-4">
                Start Your Tafseer Journey Today
              </Link>
              <p className="text-sm text-muted-foreground">
                Enroll now with our <strong>Shia Online Quran Academy</strong> and gain 
                a lifelong connection with the divine words of Allah.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tafseer;
