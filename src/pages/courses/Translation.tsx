import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import courseTranslation from "@/assets/course-translation.jpg";
import { CheckCircle } from "lucide-react";

const Translation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <img src={courseTranslation} alt="Quran Translation Course" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white">Quran Translation</h1>
          </div>
        </section>

        {/* Content */}
        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-4xl mb-6 text-primary">
              Understand the Divine Message
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Quran Translation course enables you to understand the meaning and context of every verse of the Holy Quran. Learning the translation is essential for connecting with Allah's message and implementing divine guidance in your daily life. Our course provides word-by-word translation alongside contextual understanding to enrich your spiritual journey.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Course Details</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This comprehensive course covers the translation of the entire Quran with focus on understanding the meanings, contexts, and applications of verses. We use authentic translations following the Shia school of thought, ensuring proper understanding of verses related to Ahlul Bayt and Islamic jurisprudence. The course includes vocabulary building, sentence structure analysis, and thematic studies.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">What You'll Learn</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Word-by-word translation of Quranic verses</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Understanding the context and background of revelations (Asbab al-Nuzul)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Common Arabic words and phrases used in the Quran</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Themes and subjects covered in each Surah</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Stories of Prophets and historical events</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Practical implementation of Quranic guidance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Verses about Ahlul Bayt and their significance</span>
              </li>
            </ul>

            {/* Course Benefits */}
            <div className="bg-secondary/20 p-8 rounded-xl mb-8">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Course Benefits</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Deeper connection with the Quran</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Understand your daily prayers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Make informed religious decisions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Strengthen your faith and belief</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Share knowledge with family</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Build Arabic vocabulary</span>
                </li>
              </ul>
            </div>

            {/* SEO Rich Extra Sections */}
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Why Learn Quran Translation Online?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Understanding the Quran in your own language is the first step towards living its message. Online Quran Translation courses make this possible for students across the USA, UK, and worldwide. At <strong>Al-Hadi Quran Center</strong>, we ensure Shia students gain access to authentic translation lessons without geographical barriers.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Shia Perspective in Quran Translation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unlike general courses, our <strong>Shia Online Quran Translation Course</strong> highlights the teachings of <strong>Ahlul Bayt (ع)</strong>, ensuring that learners understand verses in their rightful context. This includes translations that emphasize the importance of Wilayah, justice, and the spiritual guidance of Imams.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Who Can Join the Translation Course?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our Quran Translation program is designed for <strong>kids, adults, and reverts</strong> who wish to connect with the Quran beyond mere recitation. Whether you’re a student or a professional, flexible timings allow you to study without interrupting your daily routine.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Quran Translation Course for Kids and Beginners</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Young learners benefit from simple explanations, vocabulary building, and stories of Prophets explained in an easy-to-understand way. Parents can rest assured that their children are receiving <strong>authentic Shia Quran education</strong> online.
            </p>

            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Enroll in Al-Hadi Quran Center Today</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Learning the Quran is not just an academic pursuit—it’s a spiritual transformation. Start with our <strong>Shia Online Quran Translation Course</strong> and enrich your life with divine wisdom. Enroll today and take the first step toward a deeper connection with the Quran.
            </p>

            {/* CTA */}
            <div className="text-center">
              <Link to="/admission" className="btn-hero inline-block mb-4">
                Start Free Trial
              </Link>
              <p className="text-sm text-muted-foreground">
                Discover the beautiful meanings of Allah's words
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Translation;
