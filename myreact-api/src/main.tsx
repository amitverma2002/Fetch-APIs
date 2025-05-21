import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import WithAPIs from "./withAPIs.tsx";
// import NewAPIs from "./newWithAPIs.tsx";
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <WithAPIs/>
    {/* <NewAPIs/> */}
  </StrictMode>,
)
