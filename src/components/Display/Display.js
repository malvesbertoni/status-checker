/* 
  Display.js renders all Services's Status by calling the component @Status.js.
  This component uses the Status.Service.js service to fetch all data from the Services, 
    and passes the returned data to its ownee (@Status.js).
*/

import "./Display.css";
import Status from "../Status/Status";
import { styled } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const StatusDivider = styled(Divider)({
  width: "100%",
  height: 1,
  backgroundColor: "#EEEEEE",
});

const Display = () => {
  return (
    <section className="display-section" style={{ width: 1103 }}>
      <div className="display-gray-bar" />

      <ul style={{ listStyleType: "none" }}>
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
    </section>
  );
};

export default Display;
