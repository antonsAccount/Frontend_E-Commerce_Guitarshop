import { Instrument } from "./types";
type ShopProps = {
  data: Instrument[];
};

export default function Shop({ data }: ShopProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Shop Component WIP</h2>
      {data?.map((item) => (
        <h5>
          {item.brand} - {item.model} - Price: {item.price}
        </h5>
      ))}
    </div>
  );
}
