import Head from "next/head";
import { NavBar } from "@/components/Layout/NavBar";
import { Footer } from "@/components/Layout/Footer";
import { CommonProps } from "@/types";

const websiteTitle = "La Suite numérique";

export const Layout: React.FC<
  CommonProps & {
    /**
     * Text to use as page <title>. It should be represent what the current page is about.
     * The website name is appended to the title automatically.
     */
    title: string;
  }
> = ({ title, ...props }) => {
  const isHomepage = title === websiteTitle;
  const pageTitle = isHomepage ? title : `${title} - ${websiteTitle}`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          key="ogtitle"
          property="og:title"
          content={
            isHomepage ? "Travailler avec La Suite numérique" : pageTitle
          }
        />
      </Head>
      <NavBar />
      <main {...props}>{props.children}</main>
      <Footer />
    </>
  );
};
