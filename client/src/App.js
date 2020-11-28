import React from 'react';
import { ApolloProvider } from '@apollo/client';

import client from './config/gql_server';
import Student from './containers/Student/Student';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Student />
      </div>
    </ApolloProvider>
  );
}

export default App;
