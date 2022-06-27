import {ApolloProvider} from '@apollo/client';
import * as React from 'react';
import {Provider} from 'react-redux';
import client from './src/cli/cli';
import DrawerNavigator from './src/navigator/Drawer';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <DrawerNavigator />
      </ApolloProvider>
    </Provider>
  );
};

export default App;
