import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import courseQaida from "@/assets/course-qaida.jpg";
import { CheckCircle } from "lucide-react";

const Qaida = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={courseQaida}
            alt="Noorani Qaida Course"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white">Noorani Qaida</h1>
          </div>
        </section>

        {/* Content */}
        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-4xl mb-6 text-primary">
              Foundation of Quranic Reading
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Noorani Qaida is the fundamental course for learning how to read the Quran with proper pronunciation. This course is perfect for beginners of all ages who want to start their Quranic journey from scratch. Our experienced tutors will guide you through the Arabic alphabet, vowel sounds, and basic reading rules in a systematic and easy-to-understand manner.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Course Details</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Noorani Qaida course is designed to build a strong foundation in Arabic letter recognition and pronunciation. Students will learn how to join letters, understand different vowel marks (Harakat), and practice reading with fluency. Our one-on-one teaching approach ensures personalized attention and progress at your own pace.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">What You'll Learn</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Recognition and pronunciation of all Arabic letters</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Understanding vowel marks (Fatha, Kasra, Damma)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Joining letters to form words and sentences</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Rules of Sukoon, Tanween, and Shaddah</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Introduction to Madd (elongation) rules</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Practice reading from the Quran with proper pronunciation</span>
              </li>
            </ul>

            <div className="bg-secondary/20 p-8 rounded-xl mb-8">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Course Benefits</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Build confidence in Quranic reading</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Learn at your own comfortable pace</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">One-on-one attention from qualified tutors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Perfect for children and adults</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Prepare for advanced Tajweed studies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Interactive and engaging lessons</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link to="/admission" className="btn-hero inline-block mb-4">
                Start Free Trial
              </Link>
              <p className="text-sm text-muted-foreground">
                No credit card required. Begin your journey today!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Qaida;
