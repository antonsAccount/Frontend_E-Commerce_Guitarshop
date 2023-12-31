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
import "./stylesheets/Shop.css";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ marginTop: "1rem" }}>
        <Grid container spacing={1}>
          {data?.map((item) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              /* sx={{ display: "flex", justifyContent: "center" }} */
            >
              <Card
                sx={{
                  maxWidth: 345,
                }}
              >
                <CardActionArea onClick={() => navigate(`/shop/${item._id}`)}>
                  <CardMedia
                    sx={{ height: 300 }}
                    image={item.image_url}
                    title={item.model}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        minHeight: "4rem",
                      }}
                    >
                      <Typography gutterBottom variant="body1" component="div">
                        {item.brand + " " + item.model}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center" }}
                    >
                      {item.price}€
                    </Typography>
                  </CardContent>
                </CardActionArea>
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
