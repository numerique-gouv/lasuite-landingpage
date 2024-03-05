import React from "react";
import { twMerge } from "tailwind-merge";
import { CommonProps } from "@/types";

export const SubTitle: React.FC<CommonProps> = ({ children }) => (
  <h2>{children}</h2>
);

export const Text: React.FC<CommonProps> = ({ children }) => <p>{children}</p>;

export const Header: React.FC<Omit<CommonProps, "className">> = ({
  children,
}) => (
  <div className="py-9 bg-dsfr-blue-3">
    <h1 className="fr-container font-bold text-[2rem] md:text-[2.5rem]">
      {children}
    </h1>
  </div>
);

export const List: React.FC<CommonProps> = ({ children }) => (
  <ul>{children}</ul>
);
