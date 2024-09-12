import { Box, Flex, Text } from "@chakra-ui/react";

interface FloatLineProps {
  floatValue: string;
}

export function FloatLine({floatValue}: FloatLineProps) {

  const formattedFloatValue = parseFloat(floatValue).toFixed(2);

  return (
    <Flex align='center' w='100%' position='relative' mt={3}>
      <Box
        w='100%'
        h={1}
        bgGradient='linear(to-r, red.500, yellow.500, green.500)'
        borderRadius={4}
        position='relative'
      >
        <Box
          position='absolute'
          left={`${(1 - parseFloat(formattedFloatValue)) * 100}%`}
          transform='translateX(-50%)'
          top={0.5}
          w={0}
          h={0}
          borderLeft='4px solid transparent'
          borderRight='5px solid transparent'
          borderBottom='10px solid white'
        />
      </Box>
      <Text ml={2} fontSize={10}>
        {formattedFloatValue}
      </Text>
    </Flex>
  );
}
