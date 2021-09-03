/* 
  Display.js renders all Services's Status by calling the component @Status.js.
  This component uses the Status.Service.js service to fetch all data from the Services, 
    and passes the returned data to its ownee (@Status.js).
*/

import styled from "styled-components";
import { styled as styledUI } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Status from "../Status/Status";
import StatusInformation from "../StatusInformation/StatusInformation";

const Container = styled.section`
  width: 1103px;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StatusDivider = styledUI(Divider)({
  width: "100%",
  height: 1,
  backgroundColor: "#EEEEEE",
});

const Display = () => {
  return (
    <Container>
      <StatusInformation />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {/* .map will call all services status */}
        <li>
          <Status />
          <StatusDivider />
        </li>
        <li>
          <Status />
          <StatusDivider />
        </li>
        <li>
          <Status />
          <StatusDivider />
        </li>
      </ul>
    </Container>
  );
};

export default Display;
