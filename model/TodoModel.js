import mongoose, { Schema } from "mongoose";
const TodoSchema = new Schema({
  data: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const todo = mongoose.model("todos", TodoSchema);
export default todo;
