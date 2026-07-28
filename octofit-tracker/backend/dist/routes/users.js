"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const users = await User_1.UserModel.find({}).lean();
    res.json(users);
});
router.post('/', async (req, res) => {
    const user = await User_1.UserModel.create(req.body);
    res.status(201).json(user);
});
exports.default = router;
