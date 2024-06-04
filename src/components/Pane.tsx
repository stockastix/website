import { PageLayout } from "@primer/react";
import { Heading, Text, Box } from "@primer/react-brand";

import Theme from "./Theme.tsx";
import Tool from "./Tool.tsx";

interface Props {
  children: React.ReactNode;
  title?: string;
  tool?: string;
}

export default function Pane({ children, title, tool }: Props) {
  return (
    <Theme>
      <PageLayout>
        <PageLayout.Content>
          <Tool tool={tool} />
        </PageLayout.Content>
        <PageLayout.Pane sticky={true} resizable={false} aria-label="Side pane">
          <Box
            borderWidth="thin"
            borderStyle="solid"
            borderColor="default"
            borderRadius="medium"
            padding="condensed"
          >
            {title && <Heading size={"6"}>{title}</Heading>}
            {children && (
              <Text weight="light" size="100">
                {children}
              </Text>
            )}
          </Box>
        </PageLayout.Pane>
      </PageLayout>
    </Theme>
  );
}
