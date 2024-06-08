import { SubdomainNavBar } from "@stockastix/react-brand";

export default function Header({ site }: { site?: URL }) {
  const numLinks = 6;

  const links = {
    tools: "/tool/",
    documentation: "/docs/",
    tutorial: "/tutorial/index",
  };

  const args = {
    // showSearch: true,
    title: "", // site ? site.hostname.split(".").slice(0, -1).join() : "", // "Stockastix",
    titleHref: "/",
    logoHref: "/", // site?.href
  };

  return (
    <SubdomainNavBar {...args} fullWidth={true}>
      {Object.entries(links)
        .slice(0, numLinks)
        .map(([link, href]) => {
          return (
            <SubdomainNavBar.Link key={link} href={href}>
              {link
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </SubdomainNavBar.Link>
          );
        })}
    </SubdomainNavBar>
  );
}
