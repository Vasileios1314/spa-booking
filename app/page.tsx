import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Video from "@/components/Video";
import Script from "next/script";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TXKSHGJVSB"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-TXKSHGJVSB');
      `}
      </Script>

      <Breadcrumb pageName="" description="" />
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      <Contact />
    </>
  );
}
