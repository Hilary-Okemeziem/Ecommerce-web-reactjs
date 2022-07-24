import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './redux/store';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { getTotals } from './slices/cartSlice';
import { ThemeProvider } from './context/ThemeContext';
import authReducer, { loadUser } from './slices/authSlice';
import cartUiSlice from './slices/cartUiSlice';

const store = configureStore({
  reducer:{
    cart: cartReducer,
    auth: authReducer,
    cartUi: cartUiSlice.reducer,
  }
});

store.dispatch(getTotals());
store.dispatch(loadUser(null));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
