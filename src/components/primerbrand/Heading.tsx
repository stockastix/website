import { Heading as PrimerHeading } from "@primer/react-brand";

type HeadingProps = {
  children?: string;
};

export default function Heading({ children }: HeadingProps) {
  return <PrimerHeading>{children}</PrimerHeading>;
}
