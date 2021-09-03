import styled from "styled-components";

const Container = styled.section`
  width: 1090px;
  height: 38px;
  display: grid;
  grid-template-columns: 0.75fr 1fr 0.5fr 0.5fr;
  align-items: center;
  justify-content: center;
  border: 2px solid #EEEEEE;
  padding: 6px;
`

const StatusTitle = styled.h1`
  margin: 0 0 0 2px;
  font-weight: bold;
  font-size: 14px;
  color: black;
`
const StatusDescription = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  color: black;
`

const StatusWrapper = styled.div`
  display: flex;
`

const StatusIcon = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  justify-self: center;
  align-self: center;
  background-color: ${props => props.backgroundColor};
`

const StatusText = styled.h1`
  margin: 0 0 0 8px;
  font-weight: normal;
  font-size: 14px;
  color: black;
`

export {Container, StatusTitle, StatusDescription, StatusWrapper, StatusIcon, StatusText};