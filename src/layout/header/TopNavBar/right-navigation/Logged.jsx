import { Avatar, IconButton, Tooltip } from "@mui/material";
import { useMenu } from "../menu/MenuProvider";

const Logged = () => {
  const setOpen = useMenu();
  return (
    <Tooltip title="open setting">
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={() => setOpen(true)}
      >
        <Avatar alt="me" src="/assets/images/man.png"></Avatar>
      </IconButton>
    </Tooltip>
  );
};

export default Logged;
