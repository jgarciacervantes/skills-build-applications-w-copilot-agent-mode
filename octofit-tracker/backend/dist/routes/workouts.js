"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Workout_1 = require("../models/Workout");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const workouts = await Workout_1.WorkoutModel.find({}).lean();
    res.json(workouts);
});
router.post('/', async (req, res) => {
    const workout = await Workout_1.WorkoutModel.create(req.body);
    res.status(201).json(workout);
});
exports.default = router;
