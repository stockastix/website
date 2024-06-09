import { Stack, EyebrowBanner } from "@primer/react-brand";
import { Blankslate } from "@primer/react/experimental";
import { PencilIcon } from "@primer/octicons-react";

import Theme from "./Theme.tsx";

import { Token } from "@primer/react";

// interface Props {}

export default function Studies() {
  const entries = localStorage.getItem("studies-index")?.split(",");
  return entries && entries.length ? (
    <Stack>
      {entries?.map((entry) => {
        try {
          const info = JSON.parse(localStorage.getItem(entry)!);
          return (
            info.name && (
              <EyebrowBanner
                href={`/tool/${entry.replace("time", "chart").replace("?", "?name=")}`}
              >
                <EyebrowBanner.Heading>
                  {info.name} <Token text={info.type} />
                </EyebrowBanner.Heading>
                <EyebrowBanner.SubHeading>
                  {`Created: ${new Date(info.date).toLocaleDateString()}`}
                </EyebrowBanner.SubHeading>
              </EyebrowBanner>
            )
          );
        } catch (error) {}
      })}
    </Stack>
  ) : (
    <Theme>
      <Blankslate border={true} spacious={true}>
        <Blankslate.Visual>
          <PencilIcon size="medium" />
        </Blankslate.Visual>
        <Blankslate.Heading>
          You don't have any saved work yet
        </Blankslate.Heading>
        <Blankslate.Description>
          Found any interesting chart, backtest or optimisation? Save your work;
          you will find it here.
        </Blankslate.Description>
        <Blankslate.PrimaryAction href="/tool/">
          Start now
        </Blankslate.PrimaryAction>
      </Blankslate>
    </Theme>
  );
}
