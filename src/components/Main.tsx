import { Box } from "@primer/react-brand";

type MainProps = {
  children?: React.ReactNode;
};

export default function Main({ children }: MainProps) {
  return (
    <Box
      style={{
        maxWidth: "1280px",
        margin: "74px 5% 0",
        flexGrow: 1,
      }}
    >
      {children}
    </Box>
  );
}
