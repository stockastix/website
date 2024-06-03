import { Hero as PrimerHero, Grid } from "@primer/react-brand";

import Timeline from "./Timeline.tsx";

export default function Hero() {
  return (
    <Grid>
      <Grid.Column>
        <PrimerHero align="center">
          {/* <Hero.Label>Label</Hero.Label> */}
          <PrimerHero.Heading>
            Trading strategies with proven track records
          </PrimerHero.Heading>
          <PrimerHero.Description>
            <Timeline />
            {/* Use trading strategies with proven track record: backtest
              performance and automatically find the best combination of
              parameters */}
          </PrimerHero.Description>
          {/* <Hero.PrimaryAction href="#">Primary action</Hero.PrimaryAction> */}

          <PrimerHero.PrimaryAction href="/tool/chart">
            Get started
          </PrimerHero.PrimaryAction>
          {/* <PrimerHero.Image position="inline-end" src={""} alt="" /> */}
        </PrimerHero>
      </Grid.Column>
    </Grid>
  );
}
