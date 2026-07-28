import { Router } from 'express';
import { LeaderboardEntryModel } from '../models/LeaderboardEntry';

const router = Router();

router.get('/', async (_req, res) => {
  const entries = await LeaderboardEntryModel.find({}).populate('user').lean();
  res.json(entries);
});

export default router;
