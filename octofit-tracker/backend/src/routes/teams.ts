import { Router } from 'express';
import { TeamModel } from '../models/Team';

const router = Router();

router.get('/', async (_req, res) => {
  const teams = await TeamModel.find({}).populate('members').lean();
  res.json(teams);
});

router.post('/', async (req, res) => {
  const team = await TeamModel.create(req.body);
  res.status(201).json(team);
});

export default router;
