import { StyledPageHeading } from "../styled/PageHeading.styled";

interface pageHeadingProps {
  children: React.ReactNode;
}

export default function PageHeading({ children }: pageHeadingProps) {
  return <StyledPageHeading>{children}</StyledPageHeading>;
}
