import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import BrandSlider from "@/components/BrandSlider";
import InsuranceCards from "@/components/InsuranceCards";
import Testimonials from "@/components/Testimonials";
import VideoTestimonial from "@/components/VideoTestimonial";
import WhyChooseMe from "@/components/WhyChooseMe";
import Footer from "@/components/Footer";
import About from "@/components/About";
import PhotoCarousel from "@/components/PhotoCarousel";
import { useLang } from "@/utils/LanguageContext";

export default function Home() {
  const router = useRouter();
  const { lang, t } = useLang();
  const baseUrl = "https://your-domain.com"; // Update with your actual domain
  const currentUrl = `${baseUrl}${router.asPath}`;
  const siteName = "Sushil Mishra - Insurance Advisor";
  const title = `${t.hero_name} | ${t.hero_role} | ${t.hero_title}`;
  const description = `${t.about_p1} ${t.hero_subtitle}. ${t.about_p2}`;
  const keywords =
    "health insurance, life insurance, insurance advisor, LIC, TATA AIG, HDFC ERGO, United India Insurance, family insurance, term insurance, health insurance plans, insurance consultant, insurance agent, Sushil Mishra";

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t.hero_name,
    jobTitle: t.hero_role,
    description: description,
    telephone: "+917906850213",
    url: baseUrl,
    sameAs: ["https://wa.me/917906850213"],
    knowsAbout: [
      "Health Insurance",
      "Life Insurance",
      "Term Insurance",
      "Family Insurance Plans",
      "Senior Citizen Health Plans",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Insurance Advisory Services",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Insurance Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Health Insurance",
            description: t.ins_1_desc,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Term Life Insurance",
            description: t.ins_2_desc,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Family Floater Plans",
            description: t.ins_4_desc,
          },
        },
      ],
    },
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={t.hero_name} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={lang === "hi" ? "Hindi" : "English"} />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${baseUrl}/logo.png`} />
        <meta property="og:site_name" content={siteName} />
        <meta
          property="og:locale"
          content={lang === "hi" ? "hi_IN" : "en_US"}
        />
        <meta
          property="og:locale:alternate"
          content={lang === "hi" ? "en_US" : "hi_IN"}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${baseUrl}/logo.png`} />

        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />

        {/* Language Alternates */}
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/`} />
        <link rel="alternate" hrefLang="hi" href={`${baseUrl}/?lang=hi`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/`} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" type="image/png" href="/logo.png" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <BrandSlider />
      <InsuranceCards />
      <PhotoCarousel />
      <Testimonials />
      <VideoTestimonial />
      <WhyChooseMe />
      <Footer />
    </>
  );
}
