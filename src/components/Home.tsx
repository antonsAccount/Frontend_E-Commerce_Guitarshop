import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { Instrument } from "./types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type HomeProps = {
  data: Instrument[];
  token?: string;
};
type Item = {
  name: string;
  image_url: string;
  _id: string;
};

export default function Home({ token, data }: HomeProps): JSX.Element {
  // const mostRecentInstruments = data.sort((a, b) => {
  //   return new Date(a.createdAt) - new Date(b.createdAt);
  // });
  const navigate = useNavigate();
  const items: Item[] = data.map((item) => {
    return {
      name: `${item.year} ${item.brand}: ${item.model}`,
      image_url: item.image_url,
      _id: item._id,
    };
  });
  // const itemsfourAndFive = items.slice(1, 2);
  // console.log("Items:", items);

  return (
    <Box sx={{ textAlign: "center", backgroundColor: "black" }}>
      <Typography variant="h5" sx={{ color: "white", p: 3 }}>
        Welcome to Anton's Rare Guitars. Feel free to check out all the
        instruments we have in stock right now!{" "}
        <Link to="/shop" style={{ color: "white" }}>
          Here
        </Link>
      </Typography>

      <Typography variant="body1" gutterBottom color="white">
        New Arrivals:
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Carousel
          sx={{
            width: 1,
            margin: "0 auto",
            minHeight: "100vh",
          }} /* autoPlay={false} */
        >
          {items.map((item, i) => {
            return (
              <Paper
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "black",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(`/${item._id}`);
                }}
              >
                <img
                  src={item.image_url}
                  alt={item.name}
                  style={{
                    maxHeight: "500px",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "white", m: 2 }}
                >
                  {item.name}
                </Typography>
                {/* <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white", m: 2 }}
                  onClick={() => navigate(`shop/${item._id}`)}
                >
                  Check it out!
                </Button> */}
              </Paper>
            );
          })}
        </Carousel>
      </Box>
    </Box>
  );
}
