import  { ApolloClient, InMemoryCache } from 'apollo-boost'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'



const link = createHttpLink({
  uri: 'http://localhost:4000/'
});


const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const client = new ApolloClient({
 link: authLink.concat(link),
 cache: new InMemoryCache(),
 connectToDevTools: true
});

 
export default client;