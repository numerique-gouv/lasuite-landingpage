import { Layout } from "@/components/Layout";
import { Header } from "@/components/LegalTerms";

export const ContentPage: React.FC<{
  /**
   * Text to use as page title and visible heading in the page header.
   */
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <Layout title={title}>
      <Header>{title}</Header>
      <div className="fr-container page-content py-12">
        <div className="max-w-[50rem]">{children}</div>
      </div>
    </Layout>
  );
};
