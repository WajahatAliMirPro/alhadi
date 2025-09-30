import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import courseHifz from "@/assets/course-hifz.jpg";
import { CheckCircle } from "lucide-react";

const Hifz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        <section className="relative h-[400px] overflow-hidden">
          <img src={courseHifz} alt="Hifz Program" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white">Hifz Program</h1>
          </div>
        </section>

        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-4xl mb-6 text-primary">
              Memorize the Holy Quran
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Hifz program is a structured course designed to help students memorize the entire Quran with proper Tajweed and understanding. Our experienced Huffaz (Quran memorizers) use proven memorization techniques to make the journey smooth and spiritually rewarding. Whether you're starting fresh or continuing your memorization, we provide personalized guidance every step of the way.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Program Structure</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our Hifz program follows a systematic approach with daily lessons, regular revision schedules, and progress tracking. Students are guided through small, manageable portions with focus on retention and understanding. We emphasize quality over speed, ensuring every verse is memorized with perfect pronunciation and never forgotten through our comprehensive revision system.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Program Features</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Customized memorization plan based on age and capability</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Daily new lesson (Sabaq) with proper Tajweed</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Regular revision (Sabaq Para) of recent memorization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Long-term revision (Dor) of all memorized portions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Proven memorization techniques and tips</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Understanding of meanings alongside memorization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Monthly progress reports and assessments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Final completion test and certification</span>
              </li>
            </ul>

            <div className="bg-secondary/20 p-8 rounded-xl mb-8">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Program Benefits</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Fulfill a lifelong spiritual goal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Expert guidance from qualified Huffaz</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Flexible schedule fits your routine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Strong revision system prevents forgetting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Suitable for children and adults</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Motivation and accountability</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link to="/admission" className="btn-hero inline-block mb-4">
                Enroll Now
              </Link>
              <p className="text-sm text-muted-foreground">
                Begin your sacred journey of Quran memorization today
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Hifz;
