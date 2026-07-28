import mongoose from 'mongoose';
import { createApp } from './src/app';
import { connectDatabase } from './src/config/database';

export function getApiBaseUrl() {
  const codespaceName = process.env.CODESPACE_NAME;
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
}

export async function startServer() {
  const app = createApp();
  const port = process.env.PORT || 8000;
  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
  const baseUrl = getApiBaseUrl();

  console.log(`Backend listening on port ${port}`);
  console.log(`API base URL: ${baseUrl}`);

  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Backend listening on port ${port}`);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  startServer();
}
