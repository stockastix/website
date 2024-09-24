import { Stack as PrimerStack, useWindowSize } from "@primer/react-brand";
import type React from "react";

type StackProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Stack({ children, style }: StackProps) {
  const { isMedium } = useWindowSize();

  return (
    <PrimerStack
      gap="spacious"
      justifyContent="center"
      style={style}
      direction={isMedium ? "horizontal" : "vertical"}
    >
      {children}
    </PrimerStack>
  );
}
