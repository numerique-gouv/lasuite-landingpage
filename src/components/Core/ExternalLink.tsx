import Image from "next/image";
import { CommonProps } from "@/types";
import { ButtonStyle } from "@/components/Core/Button";
import { twMerge } from "tailwind-merge";

export interface LinkProps extends CommonProps {
  href: string;
  /**
   * The text vocalized by screen readers. If none is passed, '{content} - nouvelle fenêtre}' is set,
   * to let screen reader users know it opens a new window.
   *
   * Use this only to add context to the link if the default text is not enough to understand the link on its own.
   */
  title?: string;
}

/**
 * ExternalLink Component
 *
 * A React functional component for rendering an external link that opens in a new window.
 * By default, its aria-label is formatted to match accessibility standards.
 *
 */
export const ExternalLink: React.FC<LinkProps> = ({
  children,
  title,
  ...subProps
}) => (
  <a
    target="_blank"
    aria-label={`${title || children} - nouvelle fenêtre`}
    {...subProps}
  >
    {children}
  </a>
);

export const ButtonExternalLink: React.FC<LinkProps> = ({
  className,
  children,
  ...subprops
}) => (
  <ExternalLink className={twMerge(ButtonStyle, className)} {...subprops}>
    <span>{children}</span>
    <span className="mr-[-0.125rem] ml-[0.5rem]">
      <Image
        src="./assets/icons/external-link-white.svg"
        height={16}
        width={16}
        alt=""
      />
    </span>
  </ExternalLink>
);
