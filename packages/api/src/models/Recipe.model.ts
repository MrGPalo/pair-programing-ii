/* eslint-disable max-len */
import mongoose, { Document, Schema } from 'mongoose';

export interface Recipe extends Document {
  name: String;
  instructions: String;
  price: Number;
  ingredients: [{ name:String, quantity:String; }];
}

const schema = new Schema({
  name: { type: String, require: true },
  instructions: { type: String, require: true },
  price: { type: Number, require: true },
  ingredients: [{ name: { type: String, require: true }, quantity: { type: String, require: true } }],
});

export const Recipes = mongoose.model<Recipe>('Recipe', schema);
