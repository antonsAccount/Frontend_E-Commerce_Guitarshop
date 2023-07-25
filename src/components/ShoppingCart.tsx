type ShoppingCartProps = { stuff?: string };

export default function ShoppingCart({ stuff }: ShoppingCartProps) {
  return <div>Shopping Cart {stuff} </div>;
}
