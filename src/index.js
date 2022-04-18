import React from 'react';
import { createRoot } from 'react-dom/client';
//import {ErrorBoundary} from 'react-error-boundary';
import './index.css';

import { App } from './Components/App/App';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
