import {Container, Title} from "./StatusTableHeader.styles";

const StatusTableHeader = () => {
    return (
        <Container>
            <Title style={{marginLeft: "1vw"}}>Service</Title>
            <Title>Description</Title>
            <Title>Status</Title>
            <Title>Details</Title>
        </Container>
    )
}

export default StatusTableHeader;