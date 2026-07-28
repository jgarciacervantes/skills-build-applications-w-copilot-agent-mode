"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiBaseUrl = getApiBaseUrl;
exports.startServer = startServer;
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./src/app");
function getApiBaseUrl() {
    const codespaceName = process.env.CODESPACE_NAME;
    return codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : 'http://localhost:8000';
}
async function startServer() {
    const app = (0, app_1.createApp)();
    const port = process.env.PORT || 8000;
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
    const baseUrl = getApiBaseUrl();
    console.log(`Backend listening on port ${port}`);
    console.log(`API base URL: ${baseUrl}`);
    try {
        await mongoose_1.default.connect(mongoUri);
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Backend listening on port ${port}`);
        });
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}
if (require.main === module) {
    startServer();
}
