import { ThemeProvider } from "@primer/react-brand";
import { Blankslate } from "@primer/react/experimental";
import { GraphIcon } from "@primer/octicons-react";

import ChartApp from "./ChartApp.tsx";

interface Props {
  tool?: string;
}
export default function Tool({ tool }: Props) {
  // @todo: manage the various tools
  // For now only chart is available
  return tool === "Chart" ? (
    <ChartApp />
  ) : (
    <ThemeProvider>
      <Blankslate border={true} spacious={true}>
        <Blankslate.Visual>
          <GraphIcon size="medium" />
        </Blankslate.Visual>
        <Blankslate.Heading>Available soon!</Blankslate.Heading>
        <Blankslate.Description>
          We are working hard on it...
        </Blankslate.Description>
        {tool && (
          <Blankslate.PrimaryAction href="/tool/">
            Try other tools
          </Blankslate.PrimaryAction>
        )}
      </Blankslate>
    </ThemeProvider>
  );
}
