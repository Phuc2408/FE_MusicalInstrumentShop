import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Breadcrumb from "../../component/Breadcrumb";
import Layout from "../../component/Layout";
import {
  FileText,
  ShoppingBag,
  CreditCard,
  RefreshCw,
  Truck,
  ShieldCheck,
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

const TermsConditions: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Breadcrumb />

      <Layout>
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#A67C00] to-[#D4AF37] text-transparent bg-clip-text">
            Terms & Conditions
          </h1>
          <p className="text-gray-600">
            Please read the terms carefully before using Solar Strings’ website or services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-3 items-stretch">
          {[
            {
              icon: FileText,
              title: "1. General Terms",
              content: (
                <p>
                  By accessing and using this website, you agree to comply with
                  the terms and conditions outlined below. Solar Strings reserves
                  the right to modify these terms at any time without prior notice.
                </p>
              ),
            },
            {
              icon: ShoppingBag,
              title: "2. Product Information",
              content: (
                <p>
                  We strive to provide accurate product descriptions and prices.
                  However, errors may occur. Solar Strings reserves the right to correct
                  any inaccuracies or cancel orders based on incorrect information.
                </p>
              ),
            },
            {
              icon: CreditCard,
              title: "3. Payment Policy",
              content: (
                <ul className="list-disc list-inside space-y-1">
                  <li>Payments must be completed before shipping.</li>
                  <li>Accepted payment methods include bank transfer and major credit cards.</li>
                  <li>All transactions are processed securely through verified gateways.</li>
                </ul>
              ),
            },
            {
              icon: RefreshCw,
              title: "4. Return & Refund Policy",
              content: (
                <p>
                  Returns are accepted within 7 days for items in unused condition and original packaging.
                  Refunds will be issued after product inspection. Shipping fees are non-refundable.
                </p>
              ),
            },
            {
              icon: Truck,
              title: "5. Shipping Policy",
              content: (
                <p>
                  Delivery times vary by location. Solar Strings will not be held responsible
                  for delays caused by third-party couriers or unforeseen events.
                </p>
              ),
            },
            {
              icon: ShieldCheck,
              title: "6. Warranty & Liability",
              content: (
                <p>
                  All instruments come with a standard 12-month warranty covering manufacturing defects.
                  Solar Strings is not liable for damage caused by misuse or improper maintenance.
                </p>
              ),
            },
            {
              icon: Info,
              title: "7. Legal Information",
              content: (
                <p>
                  These terms are governed by the laws of Vietnam. Any disputes arising from
                  the use of this website shall be resolved under Vietnamese jurisdiction.
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

export default TermsConditions;
