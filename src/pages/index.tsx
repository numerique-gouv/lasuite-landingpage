import { Section as DigitalCommons } from "@/components/sections/DigitalCommons";
import { Section as Hero } from "@/components/sections/Hero";
import { Layout } from "@/components/Layout";
import { Section as ANCT } from "@/components/sections/ANCT";
import { Section as Testimony } from "@/components/sections/Testimony";
import { Section as CallForProjects } from "@/components/sections/CallForProjects";
import { Section as ProConnect } from "@/components/sections/ProConnect";
import { Section as Newsletter } from "@/components/sections/Newsletter";
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
