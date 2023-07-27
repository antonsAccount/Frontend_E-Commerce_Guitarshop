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
      name: `${item.brand}: ${item.model}`,
      image_url: item.image_url,
      _id: item._id,
    };
  });
  const itemsfourAndFive = items.slice(3, 4);
  console.log("Items:", items);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Home Component</h2>
      <br />
      <br />
      <br />
      <h2>
        This site is still in progress and gets updated daily! Please come back
        later.
        <br />
        Welcome to Anton's Rare Guitars. Feel free to check out all the
        instruments we have in stock right now! <Link to="/shop">Here</Link>
      </h2>
      <br />
      <Typography variant="body1" gutterBottom>
        New Arrivals:
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Carousel
          sx={{
            width: 1,
            margin: "0 auto",
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
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "white", m: 2 }}
                >
                  {item.name}
                </Typography>
                <img
                  src={item.image_url}
                  alt={item.name}
                  style={{
                    maxHeight: "500px",
                    objectFit: "cover",
                  }}
                />
                <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                  onClick={() => navigate(`shop/${item._id}`)}
                >
                  Check it out!
                </Button>
              </Paper>
            );
          })}
        </Carousel>
      </Box>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
