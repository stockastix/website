import { Stack as PrimerStack, Card } from "@primer/react-brand";
import type React from "react";

type StackProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Stack({ children, style }: StackProps) {
  return (
    <PrimerStack
      gap="spacious"
      justifyContent="center"
      direction="horizontal"
      style={style}
    >
      {children}
    </PrimerStack>
  );
}
