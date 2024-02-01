import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const ContentSection = ({
  children,
  className,
  classNameChildren,
  ...props
}: PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & { classNameChildren?: string }) => {
  return (
    <div
      className={twMerge(
        "overflow-hidden flex justify-center py-[50px] md:py-20",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex flex-col items-center w-full lg:w-[64em] px-4 gap-[50px]",
          classNameChildren,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};
