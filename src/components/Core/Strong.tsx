import React from "react";

export interface StrongProps {
  children: React.ReactNode;
}

/**
 * Strong component represents bold text with a specific styling.
 */
export const Strong: React.FC<StrongProps> = ({ children }: StrongProps) => (
  <strong className="text-dinum-grey-2">{children}</strong>
);
