import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ExternalLink, LinkProps, Br } from "@/components/Core";

const hover =
  "hover:underline hover:decoration-2 hover:underline-offset-4 transition ease-in-out delay-50 duration-300 hover:cursor-pointer";

const externalLinks: LinkProps[] = [
  { href: "https://legifrance.gouv.fr/fr/", children: "legifrance.gouv.fr" },
  { href: "https://gouvernement.fr/fr/", children: "gouvernement.fr" },
  { href: "https://www.service-public.fr/", children: "service-public.fr" },
  { href: "https://www.data.gouv.fr/fr/", children: "data.gouv.fr" },
];

const pages: LinkProps[] = [
  { href: "/apropos", children: "Mentions Légales" },
  { href: "/suivi", children: "Données personnelles et cookies" },
  { href: "/accessibilite", children: "Accessibilité: audit en cours" },
];

export const Footer = () => (
  <footer className="pt-8 border-t-2 border-dinum-blue-1 pb-40">
    <div className="fr-container">
      <div className="flex flex-wrap justify-between mb-6">
        <Link
          className="w-fit md:flex items-center gap-10 hover:bg-dinum-white-1 p-4 pl-0 transition ease-in-out delay-50 duration-300 min-w-[114px] ml-[-0.5rem] "
          href="/"
          aria-label="Retour à l'accueil"
        >
          <p className="logo text-[0.7875rem] font-bold leading-[1.0317460317em] tracking-[-.01em] pl-2 uppercase align-middle inline-block">
            république
            <Br className="inline" />
            française
          </p>
        </Link>
        <div className="basis-full md:basis-2/3 max-w-2xl">
          <p className="text-sm leading-6 text-dinum-grey-5">
            Ce site est géré par La Suite Numérique à la Direction
            Interministérielle du Numérique (DINUM).
          </p>
          <ul className="flex flex-wrap align-middle mt-2">
            {externalLinks.map((link) => (
              <li
                key={link.href}
                className={twMerge("mr-6 my-2 decoration-dinum-grey-5", hover)}
              >
                <ExternalLink
                  className="font-bold text-sm text-dinum-grey-5 external-link-grey"
                  {...link}
                >
                  {link.children}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 border-t border-dinum-grey-0 flex flex-row flex-wrap">
        <div className="mt-2 mb-4 sm:mb-0 w-[75%] m-w-[75%]">
          <ul className="block justify-start flex-wrap">
            {pages.map((link) => (
              <li
                key={link.href}
                className="inline internal-link-footer text-xs text-dinum-grey-3"
              >
                <Link
                  {...link}
                  className={twMerge("border-dinum-grey-1", hover)}
                >
                  {link.children}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <p className="inline text-xs text-dinum-grey-3 leading-5">
            Sauf mention contraire, tous les contenus de ce site sont sous{" "}
            <ExternalLink
              href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
              className={twMerge(
                "relative underline underline-offset-4 external-link-grey",
                hover,
              )}
            >
              licence etalab-2.0
            </ExternalLink>
          </p>
        </div>
      </div>
    </div>
  </footer>
);
