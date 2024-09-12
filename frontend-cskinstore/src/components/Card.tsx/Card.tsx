import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FloatLine } from "./FloatLine/FloatLine";
import { Item } from "../hooks/useFetchItems";

interface CardProps {
  item: Item
}

export function Card({item}: CardProps) {
  return (
    <Flex
      direction='column'
      align='center'
      bg='whiteAlpha.50'
      justify={'space-between'}
      maxW={230}
      maxH={350}
      p={15}
      borderRadius={8}
      transition='transform 0.3s ease'
      border='1px solid'
      borderColor='transparent'
      cursor='pointer'
      _hover={{
        bg: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(185,104,31,0.24273459383753504) 100%)',
        borderColor: 'orange.500',
        '& img': {
          transform: 'scale(1.1) rotate(-5deg)',
        },
      }}
    >
      <Box>
        <Heading size='15px'>{item.name}</Heading>
        <Text fontSize={11}>{item.category}</Text>
      </Box>
      <Image
        src={item.image}
        alt={`A skin de CS ${item.name}`}	
        filter='drop-shadow(rgba(0, 0, 0, 0.9) 1px 6px 8px)'
        transition='transform 0.3s ease'
      />
      <Text fontWeight='bold' fontSize={20}>
        {item.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>
      {item.float !== 'null' && <FloatLine floatValue={item.float} />}
    </Flex>
  );
}
