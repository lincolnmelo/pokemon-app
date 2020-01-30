import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './main/App'
import * as serviceWorker from './serviceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-components'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/'
});

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(WrappedApp, document.getElementById('root'))

serviceWorker.unregister();