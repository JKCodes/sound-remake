import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'
import registerServiceWorker from './registerServiceWorker';

import RootContainer from './containers/RootContainer';
import configureStore from './store/configureStore';


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={configureStore()}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(RootContainer);
