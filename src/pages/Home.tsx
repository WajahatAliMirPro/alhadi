import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import HeroCarousel from "@/components/HeroCarousel";
import CourseCard from "@/components/CourseCard";
import TutorCard from "@/components/TutorCard";
import AdmissionForm from "@/components/AdmissionForm";
import courseQaida from "@/assets/course-qaida.jpg";
import courseTajweed from "@/assets/course-tajweed.jpg";
import courseHifz from "@/assets/course-hifz.jpg";
import courseTranslation from "@/assets/course-translation.jpg";
import courseTafseer from "@/assets/course-tafseer.jpg";
import courseNahjul from "@/assets/course-nahjul.jpg";
import maleTutor from "@/assets/male-tutor.jpg";
import femaleTutor from "@/assets/female-tutor.jpg";

const Home = () => {
  const courses = [
    {
      image: courseQaida,
      title: "Noorani Qaida",
      description: "Learn the basics of Quranic reading with proper pronunciation and recognition of Arabic letters.",
      link: "/courses/qaida",
    },
    {
      image: courseTajweed,
      title: "Tajweed Course",
      description: "Master the rules of Tajweed to recite the Quran with perfect pronunciation and melody.",
      link: "/courses/tajweed",
    },
    {
      image: courseHifz,
      title: "Hifz Program",
      description: "Systematic Quran memorization program with experienced teachers guiding you step by step.",
      link: "/courses/hifz",
    },
    {
      image: courseTranslation,
      title: "Quran Translation",
      description: "Understand the meaning and context of Quranic verses with comprehensive translation studies.",
      link: "/courses/translation",
    },
    {
      image: courseTafseer,
      title: "Tafseer Course",
      description: "Deep dive into Quranic commentary and interpretation to understand the divine message.",
      link: "/courses/tafseer",
    },
    {
      image: courseNahjul,
      title: "Nahjul Balagha",
      description: "Study the sermons, letters, and sayings of Imam Ali (AS) with expert guidance.",
      link: "/courses/nahjul-balagha",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container-custom py-5">
          <HeroCarousel />
        </section>

        {/* Welcome Section */}
        <section className="container-custom py-16">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-primary">
              Unlock the Divine with Al-Hadi Quran Center
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Al-Hadi Quran Center is the leading Shia Online Quran Academy , offering expert Quran classes for kids and adults worldwide.
              With flexible scheduling and dedicated Shia teachers, we make learning the Quran accessible and meaningful — from the comfort of your home.
            </p>
          </div>

          {/* Section 1 */}
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
            <h3 className="font-heading font-semibold text-2xl text-primary">
              What is the Holy Quran?
            </h3>
            <p>
              The Holy Quran is the central religious text of Islam, revealed to the Prophet Muhammad (PBUH) over 23 years.
              It guides Muslims in faith, morality, and daily life. Beyond recitation, it requires deep reflection to uncover
              its wisdom and apply its principles. Institutions like Al-Hadi Quran Center help learners understand its true
              meaning with expert guidance.
            </p>

            {/* Section 2 */}
            <h3 className="font-heading font-semibold text-2xl text-primary">
              The Importance of Quran Education in the Shia Community
            </h3>
            <p>
              Quranic education holds a central place in Shia Islam. The Shia tradition emphasizes learning the Quran through
              the teachings of the Prophet Muhammad (PBUH) and the Imams from his family, especially Imam Ali (AS).
              This holistic education nurtures both spirituality and moral integrity while helping believers face modern
              challenges with Islamic principles. Al-Hadi Quran Center supports this mission by offering structured,
              accessible, and high-quality online classes.
            </p>

            {/* Section 3 */}
            <h3 className="font-heading font-semibold text-2xl text-primary">
              Learn Quran Online from anywhere with Al-Hadi Quran Center
            </h3>
            <p>
              Our Shia Online Quran Academy provides flexible courses for kids, adults, and beginners alike.
              With qualified tutors skilled in Tajweed, Tafseer, Translation, and more, students enjoy personalized learning
              plans, interactive sessions, and round-the-clock access. Whether you’re memorizing, reciting, or seeking
              deeper insight, Al-Hadi makes Quran learning easy and impactful.
            </p>

            {/* Section 4 */}
            <h3 className="font-heading font-semibold text-2xl text-primary">
              How to Enroll in Al-Hadi Quran Center
            </h3>
            <p>
              Joining is simple: visit our website, choose your course, and complete the online form. With flexible
              payment options, progress tracking, and 24/7 support, starting your Quran journey has never been easier.
              <span className="font-semibold text-primary"> Enroll now and embrace the path of Quranic knowledge!</span>
            </p>
          </div>
        </section>


        {/* Courses Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl mb-4 text-primary">Our Courses</h2>
              <p className="text-muted-foreground text-lg">
                Choose from our comprehensive range of Quranic studies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Tutors Section */}
        <section className="container-custom py-16">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl mb-4 text-primary">Our Expert Tutors</h2>
            <p className="text-muted-foreground text-lg">
              Learn from qualified and experienced Islamic scholars
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TutorCard
              image={maleTutor}
              title="Male Tutors"
              description="Experienced male scholars specialized in Quranic studies, Tajweed, and Islamic sciences."
              link="/tutors/male"
            />
            <TutorCard
              image={femaleTutor}
              title="Female Tutors"
              description="Qualified female teachers dedicated to empowering sisters with Quranic knowledge."
              link="/tutors/female"
            />
          </div>
        </section>

        {/* Quick Admission Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container-custom max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl mb-4 text-primary">Quick Admission</h2>
              <p className="text-muted-foreground text-lg">
                Start your Quranic journey today. Fill out the form below.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-medium">
              <AdmissionForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
