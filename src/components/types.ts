export interface Instrument {
  _id: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  availability: string;
  description: string;
  color: string;
  nutwidth: string;
  radius: string;
  bag: string;
  weight: string;
  pickups: string;
  body: string;
  neck: string;
  storage_quantity: number;
  image_url: string;
  __v?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CartItem {
  itemId: string;
  name: string;
  quantity: number;
  price: string;
}

export interface Cart {
  owner: string;
  items: CartItem[];
  bill: number;
  createdAt?: Date;
  updatedAt?: Date;
}
