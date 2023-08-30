import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import { Instrument } from "./types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

type SingleInstrumentProps = {
  data: Instrument[];
  cart: Instrument[];
  setCart: React.Dispatch<React.SetStateAction<Instrument[]>>;
};

export default function SingleInstrument({
  data,
  cart,
  setCart,
}: SingleInstrumentProps) {
  const navigate = useNavigate();
  if (!data) {
    console.log("true");
    navigate("/");
  }
  const { id } = useParams();
  const instrument = data.filter((item) => item._id === id);
  console.log(Array.isArray(instrument));
  const inst = instrument[0];
  const addToCart = (instrumentToCart: Instrument): void => {
    //Logic to check for multiple Items, how to add quantity to Cart
    setCart((prevState) => [...prevState, instrumentToCart]);
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <>
      {!data.length ? (
        <h2>Page not found</h2>
      ) : (
        <>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontSize: "2rem", textAlign: "center", m: 2 }}
          >
            {`${inst?.year} ${inst?.brand} ${inst?.model}`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              marginLeft: { xs: "1rem", md: "4rem" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Box
                component="img"
                src={inst?.image_url}
                alt={`Image of ${inst?.model}`}
                // sx={{ width: "60%",  }}
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  padding: "0",
                  margin: "0",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box sx={{ m: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.2em", display: "inline", mr: 1 }}
              >
                {inst?.price}€ incl. Tax
              </Typography>
              <Button
                variant="outlined"
                sx={{ display: "inline" }}
                onClick={() => addToCart(inst)}
              >
                Add to Cart
              </Button>

              <Typography
                variant="body1"
                sx={{
                  color:
                    inst?.availability === "available" ? "green" : "orange",
                  fontSize: "1.2em",
                }}
              >
                {inst?.availability}{" "}
                {inst?.availability === "available"
                  ? `(${inst?.storage_quantity} in stock)`
                  : null}
              </Typography>
              <Typography variant="body2">
                Description: {inst?.description}
              </Typography>
              <List>
                <ListItem>Body Wood: {inst?.body}</ListItem>
                <ListItem>Neck Wood: {inst?.neck}</ListItem>
                <ListItem>Color: {inst?.color}</ListItem>
                <ListItem>Nutwidth: {inst?.nutwidth} mm</ListItem>
                <ListItem>Fretboard Radius: {inst?.radius}"</ListItem>
                <ListItem>Weigth: {inst?.weight} kg</ListItem>
                <ListItem>Pickups: {inst?.pickups}</ListItem>
                <ListItem>Case/Gigbag: {inst?.bag}</ListItem>
              </List>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
