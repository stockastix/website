import { ThemeProvider, BaseStyles, theme } from "@primer/react";

import { ChartApp } from "@stockastix/react";

type Props = {
  children?: { props: { value: string } };
};

export default function Chart({ children }: Props) {
  // children.props.value has a shape similar to:
  // "<span class="line"><span>{</span></span>
  // <span class="line"><span>    "defs": [],</span></span>
  // <span class="line"><span>    "draw": [["^DJI"]],</span></span>
  // <span class="line"><span>    "show": ["^DJI crossup sma(^DJI, 200)"]</span></span>
  // <span class="line"><span>  }</span></span>
  // <span class="line"><span></span></span>"
  // So I need to get rid of the HTML stuff
  const elt = document.createElement("div");
  elt.innerHTML = children?.props?.value || "{}";
  const spec = JSON.parse(elt.innerText);

  return (
    <ThemeProvider theme={theme} colorMode="auto">
      <BaseStyles>
        <ChartApp type="time">
          {
            spec
            // {
            // defs: ['average100 = sma(^DJI, 100)', 'average200 = sma(^DJI, 200)'],
            // draw: [['average100'], ['average200']],
            // defs: [],
            // draw: [["^DJI"]],
            // show: ['^DJI crossup sma(^DJI, 200)'],
            // }
          }
        </ChartApp>
      </BaseStyles>
    </ThemeProvider>
  );
}
