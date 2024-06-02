import { Box as PrimerBox } from "@primer/react-brand";
import type React from "react";

type BoxProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Box({ children, style }: BoxProps) {
  return <PrimerBox style={style}>{children}</PrimerBox>;
}
