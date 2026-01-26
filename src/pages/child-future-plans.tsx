import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLang } from "@/utils/LanguageContext";
import { motion } from "framer-motion";

export default function ChildFuturePlans() {
  const router = useRouter();
  const { lang, t } = useLang();
  const baseUrl = "https://www.mishrainsurance.in";
  const currentUrl = `${baseUrl}/child-future-plans`;
  const title = t.child_page_title;
  const description = t.child_page_desc;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.child_hero_title,
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
    serviceType: "Child Insurance Consultation",
  };

  const benefits = [
    t.child_benefit_1,
    t.child_benefit_2,
    t.child_benefit_3,
    t.child_benefit_4,
    t.child_benefit_5,
    t.child_benefit_6,
  ];

  const features = [
    {
      title: t.child_feature_1_title,
      desc: t.child_feature_1_desc,
    },
    {
      title: t.child_feature_2_title,
      desc: t.child_feature_2_desc,
    },
    {
      title: t.child_feature_3_title,
      desc: t.child_feature_3_desc,
    },
    {
      title: t.child_feature_4_title,
      desc: t.child_feature_4_desc,
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
          content="child insurance, education plan, child future plan, child education insurance, investment for children, child savings plan"
        />
        <meta name="author" content="Sushil Mishra" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
        <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-pink-50 to-pink-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-pink-900 mb-4">
                {t.child_hero_title}
              </h1>
              <p className="text-lg text-gray-800 mb-6">
                {t.child_hero_subtitle}
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
              {t.child_why_title}
            </h2>
            <p className="text-gray-800 mb-6 leading-relaxed">
              {t.child_why_desc}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">
              {t.child_benefits_title}
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
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-pink-500 text-white">
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
              {t.child_features_title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-pink-50 rounded-lg border border-pink-200"
                >
                  <h3 className="text-xl font-bold text-pink-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-800">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {t.child_how_works_title}
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <p className="font-bold text-gray-800">
                    {t.child_step_1_title}
                  </p>
                  <p className="text-gray-800">{t.child_step_1_desc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <p className="font-bold text-gray-800">
                    {t.child_step_2_title}
                  </p>
                  <p className="text-gray-800">{t.child_step_2_desc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <p className="font-bold text-gray-800">
                    {t.child_step_3_title}
                  </p>
                  <p className="text-gray-800">{t.child_step_3_desc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <p className="font-bold text-gray-800">
                    {t.child_step_4_title}
                  </p>
                  <p className="text-gray-800">{t.child_step_4_desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Plans */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {t.child_types_title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-lg font-bold text-pink-900 mb-2">
                  {t.child_type_1_title}
                </h3>
                <p className="text-gray-800">{t.child_type_1_desc}</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-lg font-bold text-pink-900 mb-2">
                  {t.child_type_2_title}
                </h3>
                <p className="text-gray-800">{t.child_type_2_desc}</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-lg font-bold text-pink-900 mb-2">
                  {t.child_type_3_title}
                </h3>
                <p className="text-gray-800">{t.child_type_3_desc}</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-lg font-bold text-pink-900 mb-2">
                  {t.child_type_4_title}
                </h3>
                <p className="text-gray-800">{t.child_type_4_desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Companies */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {t.health_insurers}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "LIC", logo: "/logos/lic.png" },
                { name: "TATA AIG", logo: "/logos/tata-aig.png" },
                { name: "HDFC ERGO", logo: "/logos/hdfc-ergo.png" },
                { name: "Niva Bupa", logo: "/logos/niva.png" },
              ].map((company) => (
                <div
                  key={company.name}
                  className="p-4 bg-pink-50 border border-pink-200 rounded-lg text-center flex items-center justify-center h-24"
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
        <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              {t.child_cta_title}
            </h2>
            <p className="text-lg mb-8">{t.child_cta_subtitle}</p>
            <a
              href="https://wa.me/917906850213"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
            >
              {t.child_cta_consult}
            </a>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="text-pink-600 hover:text-pink-800 font-semibold"
            >
              {t.back_to_home}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
