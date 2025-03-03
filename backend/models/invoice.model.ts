import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.model";

export interface IInvoice extends Document {
  user: mongoose.Types.ObjectId | IUser;
  clientName: string;
  clientEmail: string;
  items: { description: string; quantity: number; price: number }[];
  totalAmount: number;
  status: "paid" | "pending" | "draft";
  dueDate: Date;
  createdAt: Date;
}

const InvoiceSchema = new Schema<IInvoice>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    clientName: { type: String, required: true },
    clientEmail: { type: String, required: true },
    items: [
      {
        description: String,
        quantity: Number,
        price: Number,
      },
    ],
    totalAmount: Number,
    status: {
      type: String,
      enum: ["paid", "pending", "overdue"],
      default: "pending",
    },
    dueDate: Date,
  },
  { timestamps: true }
);

export default mongoose.model<IInvoice>("Invoice", InvoiceSchema);
