import React from 'react';
import { createRoot } from 'react-dom/client';

const app = document.getElementById('app')!;

const root = createRoot(app);

const App = () => {
  return <div>Hello, this is React!</div>
}

root.render(<App />);