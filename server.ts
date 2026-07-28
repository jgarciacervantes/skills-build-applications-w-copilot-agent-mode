import { getApiBaseUrl, startServer } from './octofit-tracker/backend/server';

export { getApiBaseUrl, startServer };

if (require.main === module) {
  startServer();
}
