import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

interface FeeCardProps {
  title: string;
  duration: string;
  fees: { currency: string; value: string }[];
}

const FeeCard: React.FC<FeeCardProps> = ({ title, duration, fees }) => (
  <div className="bg-card shadow-md rounded-xl p-6 flex flex-col justify-between text-center hover:shadow-lg transition-smooth">
    <h4 className="font-heading font-bold text-xl text-primary mb-2">{title}</h4>
    <p className="text-muted-foreground mb-4">{duration}</p>
    <ul className="space-y-1 mb-4">
      {fees.map((fee, idx) => (
        <li key={idx} className="text-foreground">
          {fee.currency}: <strong>{fee.value}</strong>
        </li>
      ))}
    </ul>
    <Link to="/admission" className="btn-primary inline-block">
      Admission
    </Link>
  </div>
);

const Fee = () => {
  const studentPackages = [
    {
      title: "1 Day/Week",
      duration: "30 Min/Day",
      fees: [
        { currency: "USD", value: "$15" },
        { currency: "AUD", value: "$25" },
        { currency: "UK", value: "£15" },
        { currency: "EURO", value: "€15" },
      ],
    },
    {
      title: "2 Days/Week",
      duration: "30 Min/Day",
      fees: [
        { currency: "USD", value: "$30" },
        { currency: "AUD", value: "$40" },
        { currency: "UK", value: "£25" },
        { currency: "EURO", value: "€20" },
      ],
    },
    {
      title: "3 Days/Week",
      duration: "30 Min/Day",
      fees: [
        { currency: "USD", value: "$35" },
        { currency: "AUD", value: "$55" },
        { currency: "UK", value: "£20" },
        { currency: "EURO", value: "€20" },
      ],
    },
    {
      title: "5 Days/Week",
      duration: "30 Min/Day",
      fees: [
        { currency: "USD", value: "$40" },
        { currency: "AUD", value: "$70" },
        { currency: "UK", value: "£25" },
        { currency: "EURO", value: "€35" },
      ],
    },
  ];

  const familyPackages = [
    {
      title: "1 Day/Week",
      duration: "30 Min/Day",
      fees: [
        { currency: "USD", value: "$30" },
        { currency: "AUD", value: "$35" },
        { currency: "UK", value: "£25" },
        { currency: "EURO", value: "€25" },
      ],
    },
    {
      title: "2 Days/Week",
      duration: "30 Min/Day",
      fees: [
        { currency: "USD", value: "$35" },
        { currency: "AUD", value: "$40" },
        { currency: "UK", value: "£41" },
        { currency: "EURO", value: "€30" },
      ],
    },
    {
      title: "3 Days/Week",
      duration: "30 Min/Day",
      fees: [
        { currency: "USD", value: "$40" },
        { currency: "AUD", value: "$55" },
        { currency: "UK", value: "£63" },
        { currency: "EURO", value: "€35" },
      ],
    },
    {
      title: "5 Days/Week",
      duration: "30 Min/Day",
      fees: [
        { currency: "USD", value: "$50" },
        { currency: "AUD", value: "$70" },
        { currency: "UK", value: "£55" },
        { currency: "EURO", value: "€45" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppFloat />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="gradient-primary py-20 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary-foreground mb-4">
            Fee / Hadiya Structure
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Affordable and transparent packages for quality Quranic education.
          </p>
        </section>

        {/* Student Package */}
        <section className="container-custom py-16">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center text-primary">
            🎓 Student Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentPackages.map((pkg, idx) => (
              <FeeCard key={idx} {...pkg} />
            ))}
          </div>
        </section>

        {/* Family Package */}
        <section className="container-custom py-16 bg-accent/10 rounded-xl">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center text-primary">
            👨‍👩‍👧 Family Package (Special Offer)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyPackages.map((pkg, idx) => (
              <FeeCard key={idx} {...pkg} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Fee;
