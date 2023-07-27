type ShoppingCartProps = { stuff?: string };

export default function ShoppingCart({ stuff }: ShoppingCartProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Shopping Cart Component {stuff} </h2>
      <img
        src={
          "https://netrinoimages.s3.eu-west-2.amazonaws.com/2014/02/13/370112/438511/shopping_cart_v8_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4515304_o.jpg"
        }
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
}
