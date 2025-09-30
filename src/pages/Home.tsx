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
        <section className="container-custom py-8">
          <HeroCarousel />
        </section>

        {/* Welcome Section */}
        <section className="container-custom py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-primary">
              Welcome to Al-Hadi Quran Center
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Al-Hadi Quran Center is a leading online platform dedicated to providing comprehensive Quranic education to students worldwide. Our mission is to make authentic Islamic knowledge accessible to everyone, regardless of their location. With qualified Shia tutors, flexible scheduling, and personalized learning plans, we help students of all ages connect with the Holy Quran and deepen their understanding of Islam.
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
