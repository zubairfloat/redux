import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import 'bootstrap/dist/css/bootstrap.min.css';
import authReducer from './redux/reducer/auth.reducer';
import authWatcher from './saga/auth.saga';

function* rootSaga() {
  yield all([fork(authWatcher)]);
}
const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

let enhancer = compose(
  applyMiddleware(sagaMiddleware),
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'undefined'
    ? (a) => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, enhancer);
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.StrictMode>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
