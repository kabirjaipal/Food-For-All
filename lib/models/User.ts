import { model, Schema, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  foodItems: {
    type: Array,
    ref: "DonatedItemSchema",
    default: [],
  },

  addedToCart: {
    type: Array,
    ref: "DonatedItemSchema",
    default: [],
  },
});

const UserModel = models?.UserSchema || model("UserSchema", UserSchema);

export default UserModel;
