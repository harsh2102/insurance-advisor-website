import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLang } from "@/utils/LanguageContext";
import { motion } from "framer-motion";

export default function FamilyFloaterPlans() {
  const router = useRouter();
  const { lang, t } = useLang();
  const baseUrl = "https://www.mishrainsurance.in";
  const currentUrl = `${baseUrl}/family-floater-plans`;
  const title = t.family_page_title;
  const description = t.family_page_desc;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.family_hero_title,
    description: description,
    provider: {
      "@type": "Person",
      name: "Sushil Mishra",
      jobTitle: "Senior Insurance Advisor",
      telephone: "+917906850213",
      url: baseUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "Family Health Insurance Consultation",
  };

  const benefits = [
    t.family_benefit_1,
    t.family_benefit_2,
    t.family_benefit_3,
    t.family_benefit_4,
    t.family_benefit_5,
    t.family_benefit_6,
  ];

  const features = [
    {
      title: t.family_feature_1_title,
      desc: t.family_feature_1_desc,
    },
    {
      title: t.family_feature_2_title,
      desc: t.family_feature_2_desc,
    },
    {
      title: t.family_feature_3_title,
      desc: t.family_feature_3_desc,
    },
    {
      title: t.family_feature_4_title,
      desc: t.family_feature_4_desc,
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="family floater health insurance, family health plan, family insurance, health insurance family, group health insurance"
        />
        <meta name="author" content="Sushil Mishra" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Event snippet for Contact conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "gtag('event', 'conversion', {'send_to': 'AW-17813996303/M0AgCOzSvuwbEI-GsK5C'});",
          }}
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${baseUrl}/logo.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Canonical */}
        <link rel="canonical" href={currentUrl} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-orange-50 to-orange-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
                {t.family_hero_title}
              </h1>
              <p className="text-lg text-gray-800 mb-6">
                {t.family_hero_subtitle}
              </p>
              <a
                href="https://wa.me/917906850213"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Get a Free Quote
              </a>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              {t.family_why_title}
            </h2>
            <p className="text-gray-800 mb-6 leading-relaxed">
              {t.family_why_desc}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">
              {t.family_benefits_title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-500 text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 font-medium">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">
              {t.family_features_title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-orange-50 rounded-lg border border-orange-200"
                >
                  <h3 className="text-xl font-bold text-orange-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-800">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {t.family_comparison_title}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-900">
                      {t.family_comparison_aspect}
                    </th>
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-900">
                      {t.family_comparison_floater}
                    </th>
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-900">
                      {t.family_comparison_individual}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 text-gray-800">
                      {t.family_comparison_cost}
                    </td>
                    <td className="border border-gray-300 p-4 text-green-600 font-semibold">
                      {t.family_comparison_cost_floater}
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-800">
                      {t.family_comparison_cost_individual}
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border border-gray-300 p-4 text-gray-800">
                      {t.family_comparison_management}
                    </td>
                    <td className="border border-gray-300 p-4 text-green-600 font-semibold">
                      {t.family_comparison_management_floater}
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-800">
                      {t.family_comparison_management_individual}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 text-gray-800">
                      {t.family_comparison_flexibility}
                    </td>
                    <td className="border border-gray-300 p-4 text-green-600 font-semibold">
                      {t.family_comparison_flexibility_floater}
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-800">
                      {t.family_comparison_flexibility_individual}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Example Scenario */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {t.family_example_title}
            </h2>
            <div className="bg-blue-50 border-l-4 border-orange-500 p-6 rounded">
              <p className="text-gray-800 mb-4">
                <strong>Family:</strong> {t.family_example_family}
              </p>
              <p className="text-gray-800 mb-4">
                <strong>Family Floater Plan:</strong> {t.family_example_plan}
              </p>
              <p className="text-gray-800 mb-4">
                <strong>Individual Plans:</strong> {t.family_example_individual}
              </p>
              <p className="text-green-600 font-bold">
                {t.family_example_savings}
              </p>
            </div>
          </div>
        </section>

        {/* Insurance Companies */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Available with Top Insurers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "HDFC ERGO", logo: "/logos/hdfc-ergo.png" },
                { name: "TATA AIG", logo: "/logos/tata-aig.png" },
                { name: "LIC", logo: "/logos/lic.png" },
                { name: "Niva Bupa", logo: "/logos/niva.png" },
              ].map((company) => (
                <div
                  key={company.name}
                  className="p-4 bg-white border border-gray-200 rounded-lg text-center flex items-center justify-center h-24"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Protect Your Entire Family Affordably
            </h2>
            <p className="text-lg mb-8">
              Get the perfect family floater plan tailored to your needs
            </p>
            <a
              href="https://wa.me/917906850213"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
            >
              Get Your Plan Now
            </a>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="text-orange-600 hover:text-orange-800 font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
