import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 1500px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: white;
  background-color: #2d333a;
`
const HeaderLogo = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 1vw;
`

const HeaderTitle = styled.h1`
  font-weight: bold;
  margin-left: 3vw;
`

export {HeaderDiv, HeaderLogo, HeaderTitle};