import { ApolloProvider } from '@apollo/client';

import client from './config/gql_server';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
    </ApolloProvider>
  );
}

export default App;
