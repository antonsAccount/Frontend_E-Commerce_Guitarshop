import { useParams } from "react-router";
import { Instrument } from "./types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

type SingleInstrumentProps = {
  data: Instrument[];
};

export default function SingleInstrument({ data }: SingleInstrumentProps) {
  const { id } = useParams();
  const instrument = data.filter((item) => item._id === id);
  console.log(Array.isArray(instrument));
  const inst = instrument[0];
  return (
    <>
      <Typography
        variant="h1"
        gutterBottom
        sx={{ fontSize: "2rem", textAlign: "center", m: 2 }}
      >
        {`${inst.year} ${inst.brand} ${inst.model}`}
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
            src={inst.image_url}
            alt={`Image of ${inst.model}`}
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
          <Typography variant="body1" sx={{ fontSize: "1.2em" }}>
            {inst.price}€ incl. Tax
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: inst.availability === "available" ? "green" : "orange",
              fontSize: "1.2em",
            }}
          >
            {inst.availability}
          </Typography>
          <Typography variant="body2">
            Description: {inst.description}
          </Typography>
          <List>
            <ListItem>Body Wood: {inst.body}</ListItem>
            <ListItem>Neck Wood: {inst.neck}</ListItem>
            <ListItem>Color: {inst.color}</ListItem>
            <ListItem>Nutwidth: {inst.nutwidth} mm</ListItem>
            <ListItem>Fretboard Radius: {inst.radius}"</ListItem>
            <ListItem>Weigth: {inst.weight} kg</ListItem>
            <ListItem>Pickups: {inst.pickups}</ListItem>
            <ListItem>Case/Gigbag: {inst.bag}</ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
