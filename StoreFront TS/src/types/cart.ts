export interface Cart {
  id: number;
  userId: number;
  products: [
    {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
    },
  ];
}
