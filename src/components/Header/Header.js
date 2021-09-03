import {HeaderDiv, HeaderLogo, HeaderTitle} from "./Header.styles";

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderLogo src="/rxlogo.svg" alt="Logo" />
      <HeaderTitle>Infrastructure Status</HeaderTitle>
    </HeaderDiv>
  )
}

export default Header;
