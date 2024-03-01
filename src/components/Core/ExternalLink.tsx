import Image from "next/image";
import { CommonProps } from "@/types";
import { ButtonStyle } from "@/components/Core/Button";
import { twMerge } from "tailwind-merge";

export interface LinkProps extends CommonProps {
  href: string;
  /**
   * The text vocalized by screen readers.
   * Use this only to add context to the link if the default text is not enough to understand the link on its own.
   *
   * note: a string telling the user that the link opens in a new window is always added at the end of the aria-label,
   * whether you pass one or not.
   */
  "aria-label"?: string;
}

/**
 * ExternalLink Component
 *
 * A React functional component for rendering an external link that opens in a new window.
 * By default, its aria-label is formatted to let screen reader users know we open a new window.
 *
 */
export const ExternalLink: React.FC<LinkProps> = ({
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
