import Link from "next/link";
import { Br, Strong } from "@/components/Core";

/**
 * NavBar Component
 * This component represents the navigation bar for the application.
 *
 * Initial draft for the navigation bar; alignment with DSFR guidelines is WIP.
 */
export const NavBar = () => (
  <header className="bg-dinum-white-0 overflow-hidden navbar-shadow">
    <div className="max-w-[78rem] px-[24px] mx-auto flex items-center justify-between p-2  lg:px-8">
      <Link
        className="flex items-center gap-10 hover:bg-dinum-white-1 ml-[-0.5rem]  p-2 md:p-4 rounded transition ease-in-out delay-50 duration-300"
        href="/"
        title="Retour à l'accueil"
      >
        <p className="logo text-[0.7875rem] font-bold leading-[1.0317460317em] tracking-[-.01em] uppercase align-middle inline-block">
          république
          <Br className="inline" />
          française
        </p>
        {/* On small screen this section collapse is placed under the navbar */}
        <div className="hidden sm:flex gap-1 flex-col">
          <p className="text-xl">
            <Strong>lasuite.numerique.gouv.</Strong>
            <i>fr</i>
          </p>
          <p className="font-light text-sm text-dinum-black-1">
            Un État efficace, simple, souverain grâce au numérique
          </p>
        </div>
      </Link>
    </div>
    <div className="flex sm:hidden gap-1 flex-col p-6 navbar-mobile-shadow">
      <p className="text-xl">
        <Strong>lasuite.numerique.gouv.</Strong>
        <i>fr</i>
      </p>
      <p className="font-light text-xs text-dinum-black-1">
        Un État efficace, simple, souverain grâce au numérique
      </p>
    </div>
  </header>
);
