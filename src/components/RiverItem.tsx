import {
  AnimationProvider,
  River,
  Heading,
  Link,
  Text,
} from "@primer/react-brand";

import { IMG_CDN } from "../config.js";

interface Props {
  children: React.ReactNode;
  image: string;
  heading: string;
  href: string;
  ctaText?: string;
  align?: "start" | "center" | "end";
}

export default function ToolCard({
  children,
  image,
  heading,
  href,
  ctaText = "Open",
  align,
}: Props) {
  return (
    <AnimationProvider
      animationTrigger="on-visible"
      visibilityOptions={"middle-of-screen"}
    >
      <River align={align}>
        <River.Visual fillMedia={false}>
          <img
            style={{ maxHeight: "250px", margin: "auto" }}
            src={`${IMG_CDN}e_bgremoval,f_auto,q_auto/v1592294072/${image}.jpg`}
            alt=""
          />
        </River.Visual>
        <River.Content
          animate={`slide-in-${align === "start" ? "left" : "right"}`}
        >
          <Heading>{heading}</Heading>
          <Text>{children}</Text>
          <Link href={href}>{ctaText}</Link>
        </River.Content>
      </River>
    </AnimationProvider>
  );
}
