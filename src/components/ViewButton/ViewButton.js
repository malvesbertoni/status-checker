import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {ModalButton} from "./ViewButton.styles";

const ViewButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ModalButton variant="outlined" color="primary" onClick={handleClickOpen}>
        View
      </ModalButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Service Status"}</DialogTitle>
        <DialogContent>
          <DialogContentText>Lorem ipsum.</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ViewButton;
