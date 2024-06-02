import { MinimalFooter } from "@stockastix/react-brand";

const currentYear = new Date().getFullYear();

export default function Footer({ site }: { site?: URL }) {
  return (
    <MinimalFooter
      name={site ? site.hostname.split(".").slice(0, -1).join() : ""} // "Stockastix"
      socialLinks={["github"]}
      logoHref={site?.href}
      copyrightStatement={`\u00A9 ${currentYear} ${site?.host}
      - All rights reserved.`}
    />
  );
}
