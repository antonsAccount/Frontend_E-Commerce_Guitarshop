import { Instrument } from "./types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type ShopProps = {
  data: Instrument[];
};

export default function Shop({ data }: ShopProps) {
  return (
    <>
      {/* <h2>Shop Component WIP</h2>
      {data?.map((item) => (
        <h5>
          {item.brand} - {item.model} - Price: {item.price}
        </h5>
      ))} */}
      <Box sx={{ flexGrow: 1, justifyContent: "center", marginTop: "1rem" }}>
        <Grid container spacing={1}>
          {data?.map((item) => (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.image_url}
                  title={item.model}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.brand + " " + item.model}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.price}€
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>

              {/* <h5>
                {item.brand} - {item.model} - Price: {item.price}
              </h5> */}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
