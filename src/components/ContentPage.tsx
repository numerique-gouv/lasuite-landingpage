import { Layout } from "@/components/Layout";

export const ContentPage: React.FC<{
  /**
   * Text to use as page title and visible heading in the page header.
   */
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <Layout title={title}>
      <div className="py-9 bg-dsfr-blue-3">
        <h1 className="fr-container font-bold text-[2rem] md:text-[2.5rem]">
          {title}
        </h1>
      </div>
      <div className="fr-container page-content py-12">
        <div className="max-w-[50rem]">{children}</div>
      </div>
    </Layout>
  );
};
