import {
  InlineLink,
  UnorderedList as PrimerUnorderedList,
} from "@primer/react-brand";

import ThemeProvider from "./primerbrand/ThemeProvider.tsx";

type UnorderedListProps = {
  items: [string, string][];
};

export default function UnorderedList({ items }: UnorderedListProps) {
  return (
    <ThemeProvider>
      <PrimerUnorderedList>
        {items.map(([title, url]) => (
          <PrimerUnorderedList.Item key={title}>
            <InlineLink href={url}>{title}</InlineLink>
          </PrimerUnorderedList.Item>
        ))}
      </PrimerUnorderedList>
    </ThemeProvider>
  );
}
