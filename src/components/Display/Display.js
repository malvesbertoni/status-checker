import {Container} from "./Display.styles";
import Status from "../StatusTableRow/StatusTableRow";
import StatusInformation from "../StatusTableHeader/StatusTableHeader";
import {response} from "./MockAPI";

const Display = () => {
  // Mapping response status
  const mapStatus = {
    1: { status: "No Issues", color: "green"},
    2: { status: "Degraded", color: "red"},
    3: { status: "Website offline", color: "red"}
  }

  //useEffect -> fecth data from Services API
    //setInterval(API)

  return (
    <Container>
      <StatusInformation />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {response.map((item, index) => {
          return (
            <li key={index}>
              <Status 
                service={item.service} 
                description={item.description} 
                status={mapStatus[item.status]}  
              />
            </li>
          )
        })}
      </ul>
    </Container>
  );
};

export default Display;
