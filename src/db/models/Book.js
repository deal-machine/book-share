import { model, Schema } from "mongoose";

const bookSchema = new Schema(
  {
    id: { id: true, type: String },
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    favs: { type: Number, default: 0 },
  },
  {
    versionKey: false,
  }
);

export const books = model("books", bookSchema);
