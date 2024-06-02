import { ThemeProvider as PrimerThemeProvider } from "@primer/react-brand";

type ThemeProviderProps = {
  children?: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <PrimerThemeProvider colorMode="auto">{children}</PrimerThemeProvider>;
}
