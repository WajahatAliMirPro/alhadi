import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import femaleTutor from "@/assets/female-tutor.jpg";
import { CheckCircle, Award, BookOpen, Users, Heart, Star, Globe, Clock } from "lucide-react";

const FemaleTutor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="gradient-primary py-20">
          <div className="container-custom text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary-foreground mb-4">
              Shia Female Quran Teacher
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Learn Quran online with expert Shia female tutors – offering
              Tajweed, Hifz, Qaida, Tafseer, and Islamic studies in a safe,
              comfortable environment for sisters and children worldwide.
            </p>
          </div>
        </section>

        {/* Tutor Profile */}
        <section className="container-custom py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Image Column */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <img
                    src={femaleTutor}
                    alt="Shia Female Quran Tutor"
                    className="w-full rounded-2xl shadow-medium"
                  />
                  <div className="mt-6 text-center">
                    <Link to="/admission" className="btn-primary w-full block">
                      Hire This Tutor
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-2">
                {/* Tutor Intro */}
                <h2 className="font-heading font-bold text-4xl mb-6 text-primary">
                  Hafiza Fatima Zahra
                </h2>

                {/* Quick Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-secondary/20 p-4 rounded-xl text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">12+ Years</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-xl text-center">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">Ijazah Holder</p>
                    <p className="text-sm text-muted-foreground">Tajweed & Hifz</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-xl text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">400+ Students</p>
                    <p className="text-sm text-muted-foreground">Worldwide</p>
                  </div>
                </div>

                {/* About */}
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
                  About the Tutor
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sister Fatima Zahra is a dedicated Shia female Quran teacher who has 
                  taught hundreds of sisters and children across the globe. With her 
                  Ijazah in Tajweed and more than a decade of teaching experience, 
                  she ensures Quranic learning is accurate, spiritual, and engaging. 
                  Her warm, motherly teaching style helps young learners and sisters 
                  feel comfortable while building confidence in recitation and memorization.
                </p>

                {/* Why Choose a Female Tutor */}
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
                  Why Choose a Female Quran Tutor?
                </h3>
                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li>✔ A safe, respectful, and modest environment for sisters.</li>
                  <li>✔ Better comfort and confidence for young girls & women learners.</li>
                  <li>✔ Dedicated attention with personalized 1-on-1 classes.</li>
                  <li>✔ Islamic guidance combined with practical teaching techniques.</li>
                </ul>

                {/* Who Can Benefit */}
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
                  Who Can Benefit?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our Shia female tutors are ideal for:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 text-muted-foreground">
                  <li>✔ Sisters who prefer female-only classes</li>
                  <li>✔ Young girls starting Quran learning</li>
                  <li>✔ Women resuming Tajweed or Hifz after a break</li>
                  <li>✔ Busy mothers needing flexible schedules</li>
                </ul>

                {/* Course Offerings */}
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
                  Courses Offered
                </h3>
                <div className="bg-secondary/20 p-6 rounded-xl mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      Noorani Qaida (kids & adults)
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      Tajweed & Makharij training
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      Hifz & revision programs
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      Tafseer & Quran translation
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      Islamic studies & Fiqh for sisters
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      Duas, Akhlaq & Islamic etiquette
                    </div>
                  </div>
                </div>

                {/* How it Works */}
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
                  How It Works
                </h3>
                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li><Clock className="h-5 w-5 inline text-primary mr-2" /> Flexible class timings (24/7 availability)</li>
                  <li><Globe className="h-5 w-5 inline text-primary mr-2" /> Worldwide access through Zoom/Skype</li>
                  <li><Heart className="h-5 w-5 inline text-primary mr-2" /> One-on-one dedicated female tutor</li>
                  <li><Star className="h-5 w-5 inline text-primary mr-2" /> Free trial class before enrollment</li>
                </ul>

                {/* Benefits */}
                <div className="bg-accent/10 p-6 rounded-xl mb-6">
                  <h3 className="font-heading font-bold text-xl mb-4 text-primary">
                    Why Learn With Us?
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-center"><Heart className="h-5 w-5 text-primary mr-2" /> Female-only environment</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-primary mr-2" /> Free trial session</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-primary mr-2" /> Affordable monthly fee</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-primary mr-2" /> Expert Shia tutors</li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="text-center lg:text-left">
                  <Link to="/admission" className="btn-hero inline-block">
                    Book Your Free Trial Class
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="gradient-primary/10 py-16">
          <div className="container-custom text-center">
            <h2 className="font-heading font-bold text-3xl mb-8 text-primary">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-muted-foreground mb-4">
                  “My daughter feels so comfortable learning from Sister Fatima.
                  Her Tajweed improved within weeks!”
                </p>
                <p className="font-semibold text-primary">– Zainab (UK)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-muted-foreground mb-4">
                  “I always wanted a female tutor. Alhamdulillah, this was the
                  best decision for my Quran journey.”
                </p>
                <p className="font-semibold text-primary">– Maryam (Canada)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-muted-foreground mb-4">
                  “Her classes are flexible and full of barakah. I completed my
                  Qaida and started Hifz smoothly.”
                </p>
                <p className="font-semibold text-primary">– Ayesha (USA)</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FemaleTutor;
