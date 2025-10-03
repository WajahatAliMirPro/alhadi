import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import courseNahjul from "@/assets/course-nahjul.jpg";
import { CheckCircle } from "lucide-react";

const NahjulBalagha = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={courseNahjul}
            alt="Nahjul Balagha Course"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white">
              Nahjul Balagha 
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <h2 className="font-heading font-bold text-4xl mb-6 text-primary">
              Why Study Nahjul Balagha?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nahjul Balagha (The Peak of Eloquence) is a collection of sermons, letters, and sayings of Imam Ali ibn Abi Talib (AS), the first Imam of the Shia Muslims. This profound text addresses topics ranging from theology and philosophy to ethics, governance, and social justice. Studying Nahjul Balagha opens doors to spiritual wisdom and practical guidance for leading a righteous life.
            </p>

            {/* Course Overview */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Comprehensive Nahjul Balagha Course Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This comprehensive course explores the sermons, letters, and maxims compiled in Nahjul Balagha. Students will study selected passages with detailed commentary, learning about Islamic governance, ethics, spirituality, and the qualities of a true believer. The course emphasizes understanding the context, linguistic beauty, and practical applications of Imam Ali's (AS) teachings in contemporary life.
            </p>

            {/* Key Topics */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Key Topics Covered in This Nahjul Balagha Program
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Famous sermons including Khutbatul Shaqshaqiyyah</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Imam Ali's (AS) letters on governance and administration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Profound sayings and maxims on various topics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Islamic teachings on justice, knowledge, and piety</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Ethical guidance for personal development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Social responsibilities and community building</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Spiritual purification and self-refinement</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Leadership principles from Islamic perspective</span>
              </li>
            </ul>

            {/* Benefits */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Spiritual & Practical Benefits of Studying Nahjul Balagha
            </h3>
            <div className="bg-secondary/20 p-8 rounded-xl mb-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Spiritual enlightenment and growth</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Ethical framework for daily life</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Leadership and management insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Connect with Ahlul Bayt teachings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Develop critical thinking skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Appreciate Arabic eloquence</span>
                </li>
              </ul>
            </div>

            {/* Highlights */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Course Highlights: Nahjul Balagha Wisdom for Modern Life
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Through this program, students gain both spiritual guidance and practical knowledge that can be applied in daily life, leadership, and personal development. Nahjul Balagha is not just a historical text—it’s a living source of wisdom for Muslims today.
            </p>

            {/* CTA */}
            <div className="text-center mb-12">
              <Link to="/admission" className="btn-hero inline-block mb-4">
                Enroll in the Best Shia Nahjul Balagha Course Online
              </Link>
              <p className="text-sm text-muted-foreground">
                Learn from the timeless wisdom of Imam Ali (AS)
              </p>
            </div>

            {/* SEO Extra Recap */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Course Description
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This Nahjul Balagha course provides a deep dive into the sermons, letters, and sayings of Imam Ali (AS), offering students both spiritual wisdom and practical guidance for personal and social life.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              Course Benefits
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              By enrolling, you’ll gain spiritual enrichment, ethical clarity, leadership insights, critical thinking skills, and a stronger connection to the teachings of Ahlul Bayt (AS).
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NahjulBalagha;
