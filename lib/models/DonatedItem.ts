import { model, Schema, models, ObjectId } from "mongoose";
import { generateUniqueId } from "../utils";

const DonatedItemSchema = new Schema({
  foodName: {
    type: String,
    required: true,
  },
  itemId: {
    type: Schema.Types.ObjectId,
    default: generateUniqueId(),
    required: true,
  },
  rawOrCooked: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  manufactureTime: {
    type: Date,
    required: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
  inCart: {
    type: Boolean,
  },
});

const DonatedItemModel =
  models?.DonatedItemSchema || model("DonatedItemSchema", DonatedItemSchema);

export default DonatedItemModel;
