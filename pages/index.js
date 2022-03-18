import { Center, Container, Flex } from '@chakra-ui/react'
import Notices from '../components/home/Notices'
import TopScores from '../components/home/TopScores'

export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      <Center>
        <Flex flexDirection="column">
          <Notices />
          <TopScores />
        </Flex>
      </Center>
    </Container>
  )
}
