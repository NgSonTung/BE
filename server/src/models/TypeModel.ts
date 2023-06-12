import { Model, Schema, model } from "mongoose";

export interface IType {
  type: string;
}

const typeSchema = new Schema<IType>(
  {
    type: { type: String, required: true },
  },
  { collection: "type" }
);

export class Type {
  private static model: Model<IType> = model<IType>("type", typeSchema);

  public static getModel(): Model<IType> {
    return this.model;
  }
}
