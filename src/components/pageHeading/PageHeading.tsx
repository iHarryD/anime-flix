import { StyledPageHeading } from "../../styled";
import { pageHeaderProps } from "../../interfaces";

export function PageHeading({ children }: pageHeaderProps) {
  return <StyledPageHeading>{children}</StyledPageHeading>;
}
