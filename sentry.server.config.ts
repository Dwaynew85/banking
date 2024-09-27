// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f0b4d7754f518beaff3844fb475f8a5c@o4508006482313216.ingest.us.sentry.io/4508006485196800",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
