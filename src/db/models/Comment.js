import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  id: { id: true, type: String },
  body: String,
  date: { type: Date, default: new Date() },
  book: { type: Schema.Types.ObjectId, ref: "books" },
});

export const comments = model("comments", commentSchema);
