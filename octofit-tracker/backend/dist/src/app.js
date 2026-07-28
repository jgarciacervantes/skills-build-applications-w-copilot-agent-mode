"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const teams_1 = __importDefault(require("./routes/teams"));
const activities_1 = __importDefault(require("./routes/activities"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const workouts_1 = __importDefault(require("./routes/workouts"));
function createApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.get('/api/health', (_req, res) => {
        res.json({ status: 'ok', service: 'octofit-backend' });
    });
    app.use('/api/users', users_1.default);
    app.use('/api/teams', teams_1.default);
    app.use('/api/activities', activities_1.default);
    app.use('/api/leaderboard', leaderboard_1.default);
    app.use('/api/workouts', workouts_1.default);
    return app;
}
