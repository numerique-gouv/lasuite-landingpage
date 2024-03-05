import { ButtonExternalLink } from "@/components/Core";
import { NEWSLETTER_FORM } from "@/constant";

export const Section = () => (
  <div className="bg-dsfr-blue-1 py-8 text-left">
    <div className="max-w-[78rem] px-[24px] mx-auto py-8">
      <div className="flex flex-col items-start justify-between">
        <h2 className="text-[1.375rem] leading-7 font-bold mb-3">
          Recevoir la newsletter de La Suite
        </h2>
        <p className="text-[.875rem] leading-6 mb-6">
          Restez informés des prochaines avancées de La Suite en recevant la
          newsletter !
        </p>
        <p>
          <ButtonExternalLink
            href={NEWSLETTER_FORM}
            aria-label="S'inscrire à la newsletter"
          >
            S&apos;inscrire
          </ButtonExternalLink>
        </p>
      </div>
    </div>
  </div>
);
