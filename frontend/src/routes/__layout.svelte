<script>
  import '../app.css';
  import {Buffer} from 'buffer';
  global.Buffer = Buffer;

  import * as Sentry from "@sentry/browser";
  import {Integrations} from "@sentry/tracing";
  import { CaptureConsole } from '@sentry/integrations';

  Sentry.init({
    dsn: "https://41e150efdd374340a94fb862f21a2772@o1070274.ingest.sentry.io/6066010",
    integrations: [
      new Integrations.BrowserTracing(),
      new CaptureConsole({levels: ['error', 'info',]}),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

</script>
<slot/>
