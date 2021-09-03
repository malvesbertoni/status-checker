import styled from "styled-components";

const Container = styled.div`
    width: 1103px;
    height: 40px;
    background-color: #EEEEEE;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Information = styled.h1`
    color: black;
`


const StatusInformation = () => {
    return (
        <Container>
            <Information style={{marginLeft: "1vw"}}>Service</Information>
            <Information style={{marginLeft: "6vw"}}>Description</Information>
            <Information style={{marginLeft: "25vw"}}>Status</Information>
            <Information style={{marginLeft: "8vw"}}>Details</Information>
        </Container>
    )
}

export default StatusInformation;