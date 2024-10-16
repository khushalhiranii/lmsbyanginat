import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ThemeContext from './context/ThemeContext';

const renderReactApp = (containerId, basename = '/') => {
  const container = document.getElementById(containerId);

  if (container) {
    console.log('Rendering React app...');
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter basename={basename}>
            <ThemeContext>
              <App />
            </ThemeContext>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    );
  } else {
    console.error(`No container found with ID: ${containerId}`);
  }
};

// Expose the render function globally
window.renderReactApp = renderReactApp;
console.log('renderReactApp exposed to window:', window.renderReactApp);
