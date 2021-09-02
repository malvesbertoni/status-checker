import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { styled } from "@material-ui/core";

const MyButton = styled(Button)({
  position: "absolute",
  width: 80,
  height: 31,
  background: "#ffffff",
  border: "1px solid #eeeeee",
  boxSizing: "border-box",
  borderRadius: 5,
  textTransform: "none",
  color: "#2D333A",
});

const ViewButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MyButton variant="outlined" color="primary" onClick={handleClickOpen}>
        View
      </MyButton>
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
