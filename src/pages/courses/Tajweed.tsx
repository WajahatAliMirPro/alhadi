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
        <section className="relative h-[400px] overflow-hidden">
          <img src={courseTajweed} alt="Tajweed Course" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white">Tajweed Course</h1>
          </div>
        </section>

        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-4xl mb-6 text-primary">
              Master the Art of Quranic Recitation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Tajweed is the science of reciting the Quran correctly with proper pronunciation, articulation, and rhythm. This comprehensive course will teach you the essential rules that the Prophet Muhammad (PBUH) used to recite the Quran. Learn to beautify your recitation and perfect the pronunciation of every letter and word.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Course Overview</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our Tajweed course covers all fundamental and advanced rules of Quranic pronunciation. From understanding Makharij (articulation points) to mastering complex rules of Noon Sakinah and Tanween, we ensure comprehensive learning through practical exercises and regular recitation practice with expert feedback.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">What You'll Learn</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Makharij al-Huruf (articulation points of letters)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Sifat al-Huruf (characteristics of letters)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Rules of Noon Sakinah and Tanween (Izhar, Idgham, Iqlab, Ikhfa)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Rules of Meem Sakinah</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Qalqalah (echoing sound) rules</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Madd (elongation) types and rules</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Rules of Ra and Lam</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Waqf and Ibtida (stopping and starting)</span>
              </li>
            </ul>

            <div className="bg-secondary/20 p-8 rounded-xl mb-8">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Course Benefits</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Recite like the Prophet (PBUH)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Avoid common pronunciation mistakes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Beautify your Quranic recitation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Gain confidence in leading prayers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Expert correction and feedback</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Structured learning methodology</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link to="/admission" className="btn-hero inline-block mb-4">
                Start Free Trial
              </Link>
              <p className="text-sm text-muted-foreground">
                Experience our teaching quality with a complimentary trial class
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
