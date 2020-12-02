import '../styles/globals.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://192.168.99.100:3001/graphql'
})

function MyApp({ Component, pageProps }) {
  return(
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
