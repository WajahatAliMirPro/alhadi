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
        {/* Hero */}
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={courseHifz}
            alt="Shia Quran Memorization Online"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white">
              Shia Quran Memorization (Hifz) 
            </h1>
          </div>
        </section>

        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <h2 className="font-heading font-bold text-4xl mb-6 text-primary">
              Memorize the Holy Quran with Expert Huffaz
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our Hifz program is a structured and personalized Quran memorization journey, designed to help students of all ages achieve the sacred goal of becoming a Hafiz-ul-Quran. With expert Shia Huffaz, Tajweed focus, and proven memorization techniques, this online course ensures spiritual growth and academic excellence while staying rooted in Ahlul Bayt (AS) teachings.
            </p>

            {/* Structure */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Program Structure
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Hifz course follows a systematic methodology of daily lessons, short portions (Sabaq), revision (Sabaq Para), and long-term review (Dor). Students receive continuous supervision, progress tracking, and personalized guidance. We prioritize accuracy, retention, and fluency to ensure every verse stays preserved in memory for life.
            </p>

            {/* Features */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Key Features of Our Online Hifz Program
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Tailored memorization plan according to age & pace</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Daily lessons with Tajweed correction</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Structured revision cycles (short & long-term)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Spiritual mentorship alongside memorization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Monthly progress reports for parents & students</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">Final certification upon completion</span>
              </li>
            </ul>

            {/* Benefits */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Spiritual & Practical Benefits of Quran Memorization
            </h3>
            <div className="bg-secondary/20 p-8 rounded-xl mb-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Lifelong connection with the Holy Quran</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Spiritual fulfillment and divine reward</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Guidance under expert Shia Huffaz</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Strong retention with revision techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Flexible schedules for kids & adults</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-muted-foreground">Motivation, discipline, and accountability</span>
                </li>
              </ul>
            </div>

            {/* Extra SEO Headings */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Why Choose Our Shia Online Hifz Program?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unlike generic memorization programs, our course is rooted in Ahlul Bayt (AS) teachings and spiritual mentorship. Students not only memorize but also understand the meanings, enhancing both spiritual and intellectual growth.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Who Can Join the Hifz Program?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This course is open for kids, teens, and adults of all levels—whether you’re starting from the basics, continuing memorization, or revising what you have already learned.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Program Highlights for Online Quran Hifz Students
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From personalized mentorship to flexible timings, our Hifz program blends traditional memorization methods with modern learning techniques for effective results.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              FAQs About Our Online Hifz Course
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Common questions about duration, daily workload, age requirements, and certification are addressed in our admission guidance. Contact us anytime for details.
            </p>

            {/* CTA */}
            <div className="text-center mb-12">
              <Link to="/admission" className="btn-hero inline-block mb-4">
                Enroll in the Shia Hifz-ul-Quran Online Course
              </Link>
              <p className="text-sm text-muted-foreground">
                Begin your sacred journey of Quran memorization today
              </p>
            </div>

            {/* Recap */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Course Description
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This Shia Hifz-ul-Quran program is a complete online memorization journey with Tajweed, spiritual mentorship, and a strong revision system. Students develop lifelong fluency, discipline, and deep spiritual connection.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Course Benefits
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              By enrolling, you’ll gain a divine blessing, personal discipline, Quranic fluency, and a strong connection with the Ahlul Bayt (AS) teachings—while achieving the honor of being a Hafiz-ul-Quran.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Hifz;
