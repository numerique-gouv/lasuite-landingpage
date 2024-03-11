import { Section as DigitalCommons } from "@/sections/DigitalCommons";
import { Section as Hero } from "@/sections/Hero";
import { Layout } from "@/components/Layout";
import { Section as ANCT } from "@/sections/ANCT";
import { Section as Testimony } from "@/sections/Testimony";
import { Section as CallForProjects } from "@/sections/CallForProjects";
import { Section as ProConnect } from "@/sections/ProConnect";
import { Section as Newsletter } from "@/sections/Newsletter";
import { TITLE_SITE } from "@/constant";

export default function Landing() {
  return (
    <Layout className="text-center" title={TITLE_SITE}>
      <Hero />
      {/*<ProConnect />*/}
      <DigitalCommons />
      <CallForProjects />
      <Testimony />
      <ANCT />
      <Newsletter />
    </Layout>
  );
}
