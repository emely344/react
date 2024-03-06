import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

const CardComponant = () => {
  return (
    <Card sx={{ with: 250, m: 2 }}>
      <CardActionArea>
        <CardHeader title="card title" />
        <CardContent>
          <Typography variant="h1" color="initial">
            card contant
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponant;
