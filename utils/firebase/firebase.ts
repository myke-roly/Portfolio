import { Analytics, getAnalytics, logEvent as logEventAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';

const app = initializeApp(firebaseConfig);

let analytics: Analytics;
if (app.name && typeof window !== 'undefined') {
  console.log(app);
  analytics = getAnalytics(app);
}

const logEvent = (event: string) => {
  logEventAnalytics(analytics, event);
};

export default logEvent;
