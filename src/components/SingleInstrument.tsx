import { useParams } from "react-router";
import { Instrument } from "./types";
import Box from "@mui/material/Box";

type SingleInstrumentProps = {
  data: Instrument[];
};

export default function SingleInstrument({ data }: SingleInstrumentProps) {
  const { id } = useParams();
  const instrument = data.filter((item) => item._id === id);
  console.log(Array.isArray(instrument));

  return <Box>{instrument[0].model}</Box>;
}
