export type DonatedItem = {
  foodName: string;
  itemId: string;
  rawOrCooked: string;
  location: string;
  amount: string;
  manufactureTime: string;
  expiry: string;
  inCart: boolean;
};

export type DonatedItems = DonatedItem[];

export type UserType = {
  _id: string;
  name: string;
  id: string;
  avatar: string;
  email: string;
  foodItems: DonatedItems;
  addedToCart: DonatedItems;
  __v: number;
};

export interface FoodCardProps {
  food: DonatedItem;
  isAddedToCart: boolean;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}
