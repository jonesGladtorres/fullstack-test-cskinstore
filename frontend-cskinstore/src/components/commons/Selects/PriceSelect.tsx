/* eslint-disable jsx-a11y/aria-proptypes */
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface PriceSelectProps {
  setPriceMin: (value: string) => void;
  setPriceMax: (value: string) => void;
}

const imputStyles = {
  type: "number",
  borderColor: "orange.500",
  focusBorderColor: "orange.500",
};

export function PriceSelect({ setPriceMin, setPriceMax }: PriceSelectProps) {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [manualPriceMin, setManualPriceMin] = useState(0);
  const [manualPriceMax, setManualPriceMax] = useState(10000);

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    setPriceMin(values[0].toString());
    setPriceMax(values[1].toString());
  };

  const handleManualPriceChange = () => {
    setPriceRange([manualPriceMin, manualPriceMax]);
    setPriceMin(manualPriceMin.toString());
    setPriceMax(manualPriceMax.toString());
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        size='200px'
        minW={210}
        p={3}
        colorScheme='orange'
      >
        {`R$ ${priceRange[0].toLocaleString()} - R$ ${priceRange[1].toLocaleString()}`}
      </MenuButton>
      <MenuList
        bg='gray.900'
        border='1px solid'
        borderColor='orange.500'
        p={8}
        w='400px'
      >
        <Text mb={2}>Selecione o intervalo de preço:</Text>
        <RangeSlider
          aria-label={['min', 'max']}
          defaultValue={[0, 10000]}
          min={0}
          max={10000}
          step={100}
          onChange={handlePriceChange}
        >
          <RangeSliderTrack bg='orange.100'>
            <RangeSliderFilledTrack bg='orange.500' />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={4} index={0}>
            <Box color='orange.500' />
          </RangeSliderThumb>
          <RangeSliderThumb boxSize={4} index={1}>
            <Box color='orange.500' />
          </RangeSliderThumb>
        </RangeSlider>
        <Text mt={2}>
          {`R$ ${priceRange[0].toLocaleString()} - R$ ${priceRange[1].toLocaleString()}`}
        </Text>
        <Text mt={4} mb={2}>
          Ou insira manualmente:
        </Text>
        <HStack spacing={4}>
          <Input
            placeholder='Preço Mín'
            value={manualPriceMin}
            onChange={(e) => setManualPriceMin(Number(e.target.value))}
            {...imputStyles}
          />
          <Input
            placeholder='Preço Máx'
            value={manualPriceMax}
            onChange={(e) => setManualPriceMax(Number(e.target.value))}
            {...imputStyles}
          />
          <Button
            onClick={handleManualPriceChange}
            colorScheme='orange'
            w={200}
          >
            Aplicar
          </Button>
        </HStack>
      </MenuList>
    </Menu>
  );
}
