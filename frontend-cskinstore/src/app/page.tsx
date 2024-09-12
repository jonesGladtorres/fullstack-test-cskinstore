"use client";
import { Card } from "@/components/Card.tsx/Card";
import { Header } from "@/components/commons/Headers/Header";
import { useFetchItems } from "@/components/hooks/useFetchItems";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { SpinnerIcon } from "@chakra-ui/icons";
import { Flex, Grid, Image, Text, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export default function Home() {
  const { items, setSearch, isLoading, error } = useFetchItems('/items');

  return (
    <Flex
      w='100%'
      p={{ base: '15px', md: '20px' }}
      maxW={2560}
      direction='column'
      align='center'
    >
      <Header />
      <Flex align='center' direction='column'>
        <SearchBar setSearch={setSearch} />
        {isLoading ? (
          <motion.div
            initial='hidden'
            animate='visible'
            variants={fadeIn}
            key='loading'
          >
            <Flex justify='center' align='center' w='100%' h='50vh'>
              <SpinnerIcon
                color='orange.500'
                w={8}
                h={8}
                animation={`${spin} 1s linear infinite`}
              />
            </Flex>
          </motion.div>
        ) : error ? (
          <motion.div
            initial='hidden'
            animate='visible'
            variants={fadeIn}
            key='error'
          >
            <Flex direction='column' align='center' mt={20}>
              <Text fontSize='xl' color='red.500'>
                {error}
              </Text>
            </Flex>
          </motion.div>
        ) : items.length === 0 ? (
          <motion.div
            initial='hidden'
            animate='visible'
            variants={fadeIn}
            key='no-items'
          >
            <Flex direction='column' align='center' mt={20}>
              <Image
                src='https://community.akamai.steamstatic.com/economy/image/IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0pO-CI3DyeyfFJjOXSF1tHrFfZG7fq2Hwt7iURT_AFeh4Eg9QevENpDJKO83aORQ9gNRe_iuomUM7HRkkfddLZQOvw2QfKOAnyXdKJ5ku8903IA/360fx360f'
                alt='Grafite CS2 Chorando'
                boxSize={200}
              />
              <Text fontSize='xl' color='gray.500'>
                Nenhum item foi encontrado.
              </Text>
            </Flex>
          </motion.div>
        ) : (
          <motion.div
            initial='hidden'
            animate='visible'
            variants={fadeIn}
            key={items.length}
          >
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                xl: 'repeat(5, 1fr)',
              }}
              mt={10}
              gap={19}
              maxW={1440}
            >
              {items.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </Grid>
          </motion.div>
        )}
      </Flex>
    </Flex>
  );
}
