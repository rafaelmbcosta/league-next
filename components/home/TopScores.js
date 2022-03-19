import { Box } from '@chakra-ui/react';

const boxes = [
  { title: 'Disputa Mensal', link: '/scores/month' },
  { title: 'Copa da Liga', link: '/scores/league' },
  { title: 'Campeonato', link: '/scores/championship' },
  { title: 'Patrimônio', link: '/scores/currency' },
];

export default function TopScores() {
  return (
    <Box>
      ???
      {boxes.map((box) => (
        <div>oi!</div>
      ))}
    </Box>
  );
}
