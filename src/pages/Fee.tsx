import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Check } from "lucide-react";

const Fee = () => {
  const feeStructure = [
    { course: "Noorani Qaida", fee: "$40", duration: "Per Month" },
    { course: "Tajweed Course", fee: "$45", duration: "Per Month" },
    { course: "Hifz Program", fee: "$60", duration: "Per Month" },
    { course: "Quran Translation", fee: "$50", duration: "Per Month" },
    { course: "Tafseer Course", fee: "$55", duration: "Per Month" },
    { course: "Nahjul Balagha", fee: "$50", duration: "Per Month" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="gradient-primary py-20">
          <div className="container-custom text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary-foreground mb-4">
              Fee Structure
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Affordable and transparent pricing for quality Quranic education
            </p>
          </div>
        </section>

        {/* Free Trial Banner */}
        <section className="bg-accent/10 py-8">
          <div className="container-custom text-center">
            <div className="inline-flex items-center px-6 py-3 bg-accent rounded-full">
              <Check className="h-6 w-6 mr-2 text-accent-foreground" />
              <span className="font-bold text-lg text-accent-foreground">
                Free Trial Class Available for All Courses!
              </span>
            </div>
          </div>
        </section>

        {/* Fee Table Section */}
        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-medium overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="gradient-primary text-primary-foreground">
                      <th className="px-6 py-4 text-left font-heading font-bold text-lg">Course Name</th>
                      <th className="px-6 py-4 text-left font-heading font-bold text-lg">Monthly Fee</th>
                      <th className="px-6 py-4 text-left font-heading font-bold text-lg">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {feeStructure.map((item, index) => (
                      <tr key={index} className="hover:bg-secondary/20 transition-smooth">
                        <td className="px-6 py-4 font-semibold text-foreground">{item.course}</td>
                        <td className="px-6 py-4 text-primary font-bold text-lg">{item.fee}</td>
                        <td className="px-6 py-4 text-muted-foreground">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary/20 p-6 rounded-xl">
                <h3 className="font-heading font-bold text-xl mb-4 text-primary">What's Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">One-on-one personalized classes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Qualified and experienced tutors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Progress reports and assessments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Study materials and resources</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/20 p-6 rounded-xl">
                <h3 className="font-heading font-bold text-xl mb-4 text-primary">Payment Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Monthly payment plans</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Discounts for multiple students</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Secure online payment methods</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">No hidden charges</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Flexible cancellation policy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Have questions about our pricing? Contact us for more information.
              </p>
              <a
                href="https://wa.me/923700882006"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Fee;
