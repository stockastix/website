import { ThemeProvider, BaseStyles, theme, Box } from "@primer/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Theme({ children }: Props) {
  return (
    <ThemeProvider theme={theme} colorMode="auto">
      <BaseStyles>
        <Box>{children}</Box>
      </BaseStyles>
    </ThemeProvider>
  );
}
