import { StyledPageHeading } from "../styled/PageHeading.styled";
import { pageHeaderProps } from "../../interfaces/pageHeader.interface";

export default function PageHeading({ children }: pageHeaderProps) {
  return <StyledPageHeading>{children}</StyledPageHeading>;
}
