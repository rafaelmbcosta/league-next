import { Alert, AlertIcon, Text } from '@chakra-ui/react';

export default function Notices() {
  const notices = [
    { type: 'error', message: 'ATENÇÃO: Mercado fecha hoje as 16:00' },
    { type: 'success', message: 'Mercado Aberto' },
    { type: 'warning', message: 'IMPORTANTE: Essa rodada é premiada!' },
  ];

  return (
    <div>
      {
                notices?.map((notice, index) => (
                  <Alert mt="2" status={notice.type} key={index} variant="left-accent">
                    <AlertIcon />
                    <Text fontSize="sm">{ notice.message }</Text>
                  </Alert>
                ))
            }
    </div>
  );
}
