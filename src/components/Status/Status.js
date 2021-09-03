/* 
  Status.js renders the information about a determined Service's Status.
  This component receives the displayed props from his owner (@Display.js).
*/

import styled from "styled-components";
import ViewButton from "../ViewButton/ViewButton";

const Container = styled.section`
  width: 1103px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const StatusTitle = styled.h1`
  margin-left: 1vw;
  font-weight: bold;
  font-size: 14px;
  color: black;
`
const StatusDescription = styled.h1`
  margin-left: 2.5vw;
  font-weight: normal;
  font-size: 14px;
  color: black;
`
const StatusWrapper = styled.div`
  display: flex;
  margin-left: 22vw;
`

const StatusText = styled.h1`
  margin-left: 1vw;
  font-weight: normal;
  font-size: 14px;
  color: black;
`

const Status = ({ service, description, status, details }) => {
  // Need to implement logic to show the correct status placeholder on StatusWrapper
  
  return (
    <Container>
      <StatusTitle>Title Placeholder</StatusTitle>
      <StatusDescription>Type Placeholder</StatusDescription>
      <StatusWrapper>
        <img src="/statusError.svg" alt="Red circle error"  />
        <StatusText>Status Placeholder</StatusText>
      </StatusWrapper>
      <ViewButton />
    </Container>
  );
};

export default Status;
