import { Box, Button, Fab, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ButtonComponent = () => {
  return (
    <>
      <Box sx={{ "& button": { m: 1 } }}>
        <Button variant="text" size="small" startIcon={<DeleteIcon />}>
          simple btn
        </Button>
        <Button variant="contained" size="medium" endIcon={<SendIcon />}>
          Full btn
        </Button>
        <Button
          variant="outlined"
          size="large"
          endIcon={<SendIcon />}
          fullWidth
        >
          Bordered btn
        </Button>
        <Button variant="contained" disabled>
          Non functional btn
        </Button>

        <Fab color="primary" aria-label="add">
          <AddShoppingCartIcon />
        </Fab>
      </Box>
    </>
  );
};

export default ButtonComponent;
