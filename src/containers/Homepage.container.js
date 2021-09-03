import styled from "styled-components";
import Display from "../components/Display/Display";
import Header from "../components/Header/Header";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Homepage = () => {
  return (
    <Container>
      <Header />
      <Display />
    </Container>
  );
};

export default Homepage;
