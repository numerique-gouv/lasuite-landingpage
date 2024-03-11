import Image from "next/image";
import { CommonProps } from "@/types";
import { ButtonStyle } from "@/components/Button";
import { twMerge } from "tailwind-merge";

import LinkWhiteSvg from "@/assets/link-white.svg"

export type LinkProps = Omit<CommonProps, "children"> & {
  href: string;
  children: string;
  /**
   * The text vocalized by screen readers.
   * Use this only to add context to the link if the default text is not enough to understand the link on its own.
   *
   * note: a string telling the user that the link opens in a new window is always added at the end of the aria-label,
   * whether you pass one or not.
   */
  "aria-label"?: string;
};

/**
 * our ButtonExternalLink passes html to ExternalLink.
 * In that case, aria-label is mandatory as it can't be guessed from a children string anymore.
 */
type ComplexChildrenLinkProps = Omit<LinkProps, "children" | "aria-label"> & {
  children: React.ReactNode;
  "aria-label": string;
};

/**
 * ExternalLink Component
 *
 * A React functional component for rendering an external link that opens in a new window.
 * By default, its aria-label is formatted to let screen reader users know we open a new window.
 */
export const ExternalLink: React.FC<LinkProps | ComplexChildrenLinkProps> = ({
  children,
  "aria-label": ariaLabel,
  ...subProps
}) => (
  <a
    target="_blank"
    aria-label={`${ariaLabel || children} - nouvelle fenêtre`}
    {...subProps}
  >
    {children}
  </a>
);

export const ButtonExternalLink: React.FC<LinkProps> = ({
  className,
  children,
  "aria-label": ariaLabel,
  ...subprops
}) => (
  <ExternalLink
    className={twMerge(ButtonStyle, className)}
    {...subprops}
    aria-label={ariaLabel || children}
  >
    <span>{children}</span>
    <span className="mr-[-0.125rem] ml-[0.5rem]">
      <Image
        src={LinkWhiteSvg}
        height={16}
        width={16}
        alt=""
      />
    </span>
  </ExternalLink>
);
