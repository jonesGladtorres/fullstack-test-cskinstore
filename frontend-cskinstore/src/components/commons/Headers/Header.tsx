"use client";
import { Flex, Image, Text, Divider } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex direction='column' w='100%' minW={320}>
      <Flex justify={{ base: 'center', md: 'space-between' }} align='center'>
        <Image
          src='https://www.cskinstore.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo%201.daef7967.png&w=256&q=75'
          alt='Logotipo da marca CSkinStore'
          w={{ base: '137px', md: '195px' }}
        />
        <Text display={{ base: 'none', md: 'block' }}>
          PROJETO PARA TESTE TÉCNICO
        </Text>
      </Flex>
      <Divider mt={4} display={{ base: 'none', md: 'block' }} opacity={0.3}/>
    </Flex>
  );  
}
