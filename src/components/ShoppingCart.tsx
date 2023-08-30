import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Instrument } from "./types";
import CardMedia from "@mui/material/CardMedia";

type ShoppingCartProps = {
  cart?: Instrument[];
  setCart: React.Dispatch<React.SetStateAction<Instrument[]>>;
};

export default function ShoppingCart({ cart, setCart }: ShoppingCartProps) {
  return (
    <Box
      sx={{
        mt: 0.5,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "70%",
          minHeight: "100vh",
          backgroundColor: "#F9F7F5",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mt: 2,
            textAlign: "center",
          }}
        >
          Your Shopping Cart
        </Typography>
        <Box
          id="main-content"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box id="item-list" sx={{ width: { xs: "100%", md: "50%" } }}>
            {cart?.map((inst) => {
              return (
                <Card sx={{ display: "flex", mt: 1 }}>
                  <CardContent sx={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      image={inst.image_url}
                      alt="Instrument Image"
                      sx={{ width: "20%" }}
                    ></CardMedia>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", ml: 1 }}
                    >
                      <Typography
                        sx={{ mb: 1.5, fontWeight: "bold" }}
                        color="text.primary"
                      >
                        {inst.brand + " " + inst.model}
                      </Typography>
                      <Typography variant="body1" color={"green"}>
                        in Stock
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <DeleteIcon onClick={() => alert("yes")}></DeleteIcon>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
                </Card>
              );
            })}
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ textAlign: "center" }} variant="h4">
              Total
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "flex-start",
    //     alignItems: "center",
    //     flexDirection: "column",
    //   }}
    // >
    //   <h2 style={{ textAlign: "center" }}>Shopping Cart Component {stuff} </h2>
    //   <img
    //     src={
    //       "https://netrinoimages.s3.eu-west-2.amazonaws.com/2014/02/13/370112/438511/shopping_cart_v8_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4515304_o.jpg"
    //     }
    //     style={{ maxWidth: "100%" }}
    //   />
    // </div>
  );
}
