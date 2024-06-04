import { Blankslate } from "@primer/react/experimental";
import { GraphIcon } from "@primer/octicons-react";

interface Props {
  // children?: string;
}
export default function ComingSoon({}: Props) {
  return (
    <Blankslate border={true} spacious={true}>
      <Blankslate.Visual>
        <GraphIcon size="medium" />
      </Blankslate.Visual>
      <Blankslate.Heading>Available soon!</Blankslate.Heading>
      <Blankslate.Description>
        This place is empty for now, but we are working hard on it...
      </Blankslate.Description>
      <Blankslate.PrimaryAction href="/tool/">
        Try other tools
      </Blankslate.PrimaryAction>
    </Blankslate>
  );
}
