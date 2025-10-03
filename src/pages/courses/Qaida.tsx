import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import courseQaida from "@/assets/course-qaida.jpg";
import { CheckCircle } from "lucide-react";

const Qaida: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-[380px] overflow-hidden">
          <img
            src={courseQaida}
            alt="Shia Qaida Online Course"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white text-center">
              Shia Yassarnal Qaida Online
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="container-custom py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-6 text-primary">
              Learn Yassarnal Qaida Online | Shia Quran Academy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Al-Hadi <strong>Shia Quran Center</strong> offers the{" "}
              <strong>Yassarnal Qaida Course</strong> to build a strong Quran
              foundation for kids and adults worldwide. With certified{" "}
              <Link to="/about" className="text-primary hover:underline">
                Shia Quran teachers
              </Link>
              , students learn Arabic alphabets, Tajweed, and correct recitation
              step by step. Join from USA, UK, Canada, Australia & beyond with
              flexible schedules and free trial access.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Why Choose Qaida Course?
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                "Master Arabic pronunciation with Shia Tajweed",
                "Learn vowels, Sukoon, and Makharij",
                "Step-by-step guidance to avoid recitation errors",
                "Foundation for Hifz & Tafsir programs",
                "Strengthen spiritual connection with Quran",
              ].map((point, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Kids Qaida Classes
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fun, interactive lessons for{" "}
              <Link to="/courses" className="text-primary hover:underline">
                kids learning Quran online
              </Link>
              . Teachers use age-appropriate methods to make Qaida easy,
              engaging, and spiritually enriching.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Adults Qaida Lessons
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tailored Qaida sessions for{" "}
              <Link to="/courses" className="text-primary hover:underline">
                adults learning Quran
              </Link>
              . Cover Tajweed rules like Idgham, Ikhfa & Madd for confident
              recitation, even as a beginner.
            </p>

            <div className="bg-secondary/20 p-8 rounded-xl mb-8">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
                Why Al-Hadi Shia Quran Center?
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Certified Shia Quran teachers",
                  "One-on-one live classes",
                  "Affordable with free trial",
                  "Progress tracking system",
                  "Global access (USA, UK, Canada, Australia)",
                  "Trusted by Shia families worldwide",
                ].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <Link to="/admission" className="btn-hero inline-block mb-4">
                Start Free Trial
              </Link>
              <p className="text-sm text-muted-foreground">
                Join today – no credit card required.
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
