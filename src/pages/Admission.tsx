import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AdmissionForm from "@/components/AdmissionForm";

const Admission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="gradient-primary py-20">
          <div className="container-custom text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary-foreground mb-4">
              Quick Admission
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Begin your journey with the Holy Quran today. Fill out the form below to get started.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="container-custom py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-10 rounded-2xl shadow-medium">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-3xl mb-4 text-primary">
                  Enroll Now
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Complete this quick form and our admissions team will contact you within 24 hours to discuss your course selection, schedule your free trial class, and answer any questions you may have.
                </p>
              </div>

              <AdmissionForm />

              <div className="mt-8 p-6 bg-secondary/20 rounded-xl">
                <h3 className="font-semibold text-lg mb-3 text-primary">What happens next?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Our team will review your application</li>
                  <li>• We'll contact you to schedule a free trial class</li>
                  <li>• Meet your qualified tutor and start learning</li>
                  <li>• Begin your journey with the Holy Quran!</li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Have questions? Contact us on{" "}
                  <a
                    href="https://wa.me/923700882006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admission;
