import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    sport: { type: String, required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
);

export const TeamModel = model('Team', teamSchema);
