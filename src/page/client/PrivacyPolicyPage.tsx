import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Breadcrumb from "../../component/Breadcrumb";
import Layout from "../../component/Layout";
import {
  Shield,
  User,
  CreditCard,
  Mail,
  Database,
  Globe,
  Info,
} from "lucide-react";

const SectionCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="h-full bg-[#FAF8F3] border border-[#E7D7A7] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-[#E8D3A3] p-2 rounded-lg">
        <Icon className="w-5 h-5 text-gray-800" />
      </div>
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </div>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Breadcrumb />

      <Layout>
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#A67C00] to-[#D4AF37] text-transparent bg-clip-text">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Learn how Solar Strings collects, uses, and protects your personal information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-3 items-stretch">
          {[
            {
              icon: Shield,
              title: "1. Our Commitment to Privacy",
              content: (
                <p>
                  At Solar Strings, we take your privacy seriously. This policy explains
                  how we handle your data when you visit our website or make a purchase.
                  We ensure transparency and compliance with data protection laws.
                </p>
              ),
            },
            {
              icon: User,
              title: "2. Information We Collect",
              content: (
                <ul className="list-disc list-inside space-y-1">
                  <li>Personal details (name, phone number, email)</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (handled securely via third-party gateways)</li>
                  <li>Website usage data such as cookies or analytics</li>
                </ul>
              ),
            },
            {
              icon: CreditCard,
              title: "3. How We Use Your Information",
              content: (
                <ul className="list-disc list-inside space-y-1">
                  <li>To process and deliver your orders</li>
                  <li>To send order confirmations or updates</li>
                  <li>To improve our products, services, and website experience</li>
                  <li>To comply with laws and regulations</li>
                </ul>
              ),
            },
            {
              icon: Mail,
              title: "4. Communication & Marketing",
              content: (
                <p>
                  We may send you occasional emails about promotions or updates.
                  You can opt out anytime by clicking “unsubscribe” in our emails.
                  We respect your preferences.
                </p>
              ),
            },
            {
              icon: Database,
              title: "5. Data Storage & Security",
              content: (
                <p>
                  Your information is stored securely on encrypted systems.
                  We implement strict security measures to prevent unauthorized access,
                  loss, or misuse of your personal data.
                </p>
              ),
            },
            {
              icon: Globe,
              title: "6. Cookies & Analytics",
              content: (
                <p>
                  We use cookies to improve browsing experience and analyze website performance.
                  You can disable cookies in your browser settings, but some features may not work properly.
                </p>
              ),
            },
            {
              icon: Info,
              title: "7. Policy Updates",
              content: (
                <p>
                  This Privacy Policy may be updated periodically. Any changes will be
                  posted on this page with the updated revision date.
                  Continued use of our site means you accept these terms.
                </p>
              ),
            },
          ].map((section, index, arr) => (
            <div
              key={section.title}
              className={index === arr.length - 1 ? "md:col-span-2" : ""}
            >
              <SectionCard icon={section.icon} title={section.title}>
                {section.content}
              </SectionCard>
            </div>
          ))}
        </div>
      </Layout>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
