import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
    <h1> eita pleura !</h1>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
