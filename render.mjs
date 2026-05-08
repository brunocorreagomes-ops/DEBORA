import * as React from 'react';
import { renderToString } from 'react-dom/server';

// Override global modules for mock
import Module from 'module';
const originalRequire = Module.prototype.require;
Module.prototype.require = function(request) {
  if (request === 'lucide-react') {
    return new Proxy({}, {
      get: (_, prop) => {
        if (prop === '__esModule') return true;
        return ({ size, className }) => React.createElement('i', { className, 'data-icon': prop }, `icon-${prop}`);
      }
    });
  }
  if (request === 'motion/react') {
    return {
      __esModule: true,
      AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
      useScroll: () => ({ scrollYProgress: 0 }),
      useTransform: () => 0,
      motion: new Proxy({}, {
        get: (_, prop) => {
          if (prop === 'div') return function(props) { const p = {...props}; delete p.initial; delete p.animate; delete p.whileInView; delete p.viewport; delete p.transition; delete p.variants; return React.createElement('div', p); };
          if (prop === 'span') return function(props) { const p = {...props}; delete p.initial; delete p.animate; delete p.whileInView; delete p.viewport; delete p.transition; delete p.variants; return React.createElement('span', p); };
          if (prop === 'h1') return function(props) { const p = {...props}; delete p.initial; delete p.animate; delete p.whileInView; delete p.viewport; delete p.transition; delete p.variants; return React.createElement('h1', p); };
          if (prop === 'h2') return function(props) { const p = {...props}; delete p.initial; delete p.animate; delete p.whileInView; delete p.viewport; delete p.transition; delete p.variants; return React.createElement('h2', p); };
          if (prop === 'h3') return function(props) { const p = {...props}; delete p.initial; delete p.animate; delete p.whileInView; delete p.viewport; delete p.transition; delete p.variants; return React.createElement('h3', p); };
          if (prop === 'p') return function(props) { const p = {...props}; delete p.initial; delete p.animate; delete p.whileInView; delete p.viewport; delete p.transition; delete p.variants; return React.createElement('p', p); };
          if (prop === 'a') return function(props) { const p = {...props}; delete p.initial; delete p.animate; delete p.whileInView; delete p.viewport; delete p.transition; delete p.variants; return React.createElement('a', p); };
          if (prop === 'img') return function(props) { const p = {...props}; delete p.initial; delete p.animate; delete p.whileInView; delete p.viewport; delete p.transition; delete p.variants; return React.createElement('img', p); };
          if (prop === 'article') return function(props) { const p = {...props}; delete p.initial; delete p.animate; delete p.whileInView; delete p.viewport; delete p.transition; delete p.variants; return React.createElement('article', p); };
          if (prop === 'button') return function(props) { const p = {...props}; delete p.initial; delete p.animate; delete p.whileInView; delete p.viewport; delete p.transition; delete p.variants; return React.createElement('button', p); };
          return function(props) { const p = {...props}; delete p.initial; delete p.animate; delete p.whileInView; delete p.viewport; delete p.transition; delete p.variants; return React.createElement('div', p); };
        }
      })
    };
  }
  return originalRequire.apply(this, arguments);
};

import fs from 'fs';
import App from './out-app.mjs';

try {
  const html = renderToString(React.createElement(App.default || App));
  fs.writeFileSync('rendered.html', html);
  console.log("Written to rendered.html successfully.");
} catch (e) {
  console.error("Render failed");
  console.error(e);
}
