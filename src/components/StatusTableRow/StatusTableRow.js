import {Container, StatusTitle, StatusDescription, StatusWrapper, StatusIcon, StatusText} from "./StatusTableRow.styles";
import ViewButton from "../ViewButton/ViewButton";

const StatusTableRow = ({ service, description, status, details }) => {
  // Need to implement logic to show the correct status placeholder on StatusWrapper
  
  return (
    <Container>
      <StatusTitle>{service}</StatusTitle>
      <StatusDescription>{description}</StatusDescription>
      <StatusWrapper>
        <StatusIcon backgroundColor={status.color} />
        <StatusText>{status.status}</StatusText>
      </StatusWrapper>
      <ViewButton />
    </Container>
  );
};

export default StatusTableRow;
