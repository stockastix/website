import {
  Heading as PrimerHeading,
  type HeadingProps,
} from "@primer/react-brand";

export default function Heading({ children, ...props }: HeadingProps) {
  return <PrimerHeading {...props}>{children}</PrimerHeading>;
}
