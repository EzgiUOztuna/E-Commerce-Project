import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { myStore } from './store/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}> {/* React-Redux arasındaki bağlantıyı kurmak için Provider kullanıyoruz. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>
)
