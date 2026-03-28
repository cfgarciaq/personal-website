import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import App from './App.tsx'
import './i18n/config'

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* Vercel Analytics */}
    <Analytics />
    {/* Vercel performance metrics*/}
    <SpeedInsights/>
  </StrictMode>,
)
