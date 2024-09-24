import { Card } from "@primer/react-brand";

import { IMG_CDN } from "../config.js";

interface Props {
  children: React.ReactNode;
  image: string;
  heading: string;
  href: string;
  ctaText?: string;
}

export default function ToolCard({
  children,
  image,
  heading,
  href,
  ctaText = "Open",
}: Props) {
  return (
    <Card href={href} ctaText={ctaText} hasBorder>
      <Card.Image
        src={`${IMG_CDN}e_bgremoval,f_auto,q_auto/v1592294072/${image}.jpg`}
        alt="placeholder, blank area with an gray background color"
        aspectRatio="16:9"
        style={{ objectFit: "contain" }}
      />
      <Card.Heading>{heading}</Card.Heading>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}
