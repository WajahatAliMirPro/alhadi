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
        <section className="relative h-[400px] overflow-hidden">
          <img src={courseTafseer} alt="Tafseer Course" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white">Tafseer Course</h1>
          </div>
        </section>

        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-4xl mb-6 text-primary">
              In-Depth Quranic Commentary
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Tafseer is the science of interpreting and explaining the verses of the Holy Quran. This advanced course takes you beyond basic translation to explore the deeper meanings, wisdom, and guidance contained in Allah's words. Study authentic Shia commentaries, understand historical contexts, and learn how classical and contemporary scholars have interpreted the divine message.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Course Overview</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our Tafseer course provides comprehensive study of Quranic exegesis using authentic sources including Tafsir al-Mizan, Tafsir Noor al-Thaqalayn, and other renowned Shia commentaries. Students will learn the principles of interpretation, study the reasons for revelation, explore linguistic subtleties, and understand how verses relate to jurisprudence, theology, and ethics. The course emphasizes the role of Ahlul Bayt in explaining Quranic meanings.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">What You'll Learn</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Principles and methodology of Tafseer</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Historical context and occasions of revelation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Linguistic analysis and Arabic eloquence</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Legal rulings derived from verses (Ahkam)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Theological concepts and beliefs (Aqeedah)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Stories and narratives with deeper meanings</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Interpretations from Ahlul Bayt traditions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Modern applications of Quranic guidance</span>
              </li>
            </ul>

            <div className="bg-secondary/20 p-8 rounded-xl mb-8">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Course Benefits</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Profound understanding of Quran</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Scholarly approach to interpretation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Answer complex religious questions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Become knowledgeable in Islam</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Guide others with authentic knowledge</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Strengthen intellectual faith</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link to="/admission" className="btn-hero inline-block mb-4">
                Enroll Now
              </Link>
              <p className="text-sm text-muted-foreground">
                Delve deep into the wisdom of the Holy Quran
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
