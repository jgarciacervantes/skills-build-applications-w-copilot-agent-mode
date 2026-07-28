import { Schema, model } from 'mongoose';

const leaderboardEntrySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, required: true },
    streak: { type: Number, required: true },
  },
  { timestamps: true },
);

export const LeaderboardEntryModel = model('LeaderboardEntry', leaderboardEntrySchema);
