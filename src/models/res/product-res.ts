export interface ProductRes {
  id: string;
  name: string;
  status: boolean;
  price: number;
}

export const initialProduct: ProductRes[] = [
  {
    id: "1",
    name: "Iphone X",
    status: true,
    price: 1000,
  },
  {
    id: "2",
    name: "Iphone 8",
    status: true,
    price: 500,
  },
  {
    id: "3",
    name: "Iphone 7",
    status: true,
    price: 400,
  },
];
