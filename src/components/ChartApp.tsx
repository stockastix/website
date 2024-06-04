import { ThemeProvider, BaseStyles, theme } from "@primer/react";

import { ChartApp } from "@stockastix/react";

export default function Chart() {
  return (
    <ThemeProvider theme={theme} colorMode="auto">
      <BaseStyles>
        <ChartApp type="time">
          {
            // {
            // defs: ['average100 = sma(^FCHI, 100)', 'average200 = sma(^FCHI, 200)'],
            // draw: [['average100'], ['average200']],
            // defs: [],
            // draw: [["^FCHI"]],
            // show: ['^FCHI crossup sma(^FCHI, 200)'],
            // }
          }
        </ChartApp>
      </BaseStyles>
    </ThemeProvider>
  );
}
