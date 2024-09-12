import { CategorySelect } from "@/components/commons/Selects/CategorySelect";
import { FloatSelect } from "@/components/commons/Selects/FloatSelect";
import { OrderDirectionSelect } from "@/components/commons/Selects/OrderDirctionSelect";
import { PriceSelect } from "@/components/commons/Selects/PriceSelect";
import {
  Box,
  Button,
  HStack,
  Input,
} from "@chakra-ui/react";

interface SearchBarDesktopProps {
  name: string;
  setName: (value: string) => void;
  floatMin: string;
  setFloatMin: (value: string) => void;
  floatMax: string;
  setFloatMax: (value: string) => void;
  priceMin: string;
  setPriceMin: (value: string) => void;
  priceMax: string;
  setPriceMax: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  orderBy: string;
  orderDirection: string;
  setOrderDirection: (value: string) => void;
  handleSearch: () => void;
  handleClear: () => void;
}

const inputStyles = {
  w: '40%',
  border: '1px solid',
  borderColor: 'orange.500',
  focusBorderColor: 'orange.500',
};

const buttonStyles = {
  colorScheme: 'orange',
  size: '170px',
  p: 3,
};

export function SearchBarDesktop({
  name,
  setName,
  floatMin,
  setFloatMin,
  floatMax,
  setFloatMax,
  setPriceMin,
  setPriceMax,
  category,
  setCategory,
  orderDirection,
  setOrderDirection,
  handleSearch,
  handleClear,
}: SearchBarDesktopProps) {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <Box bg='whiteAlpha.50' p={4} borderRadius='md'>
      <HStack spacing={4}>
        <Input
          placeholder='Procurar por itens'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          {...inputStyles}
        />
        <FloatSelect
          floatMin={floatMin}
          setFloatMin={setFloatMin}
          floatMax={floatMax}
          setFloatMax={setFloatMax}
        />
        <PriceSelect setPriceMin={setPriceMin} setPriceMax={setPriceMax} />
        <CategorySelect category={category} setCategory={setCategory} />
        <OrderDirectionSelect
          orderDirection={orderDirection}
          setOrderDirection={setOrderDirection}
        />
        <Button onClick={handleSearch} {...buttonStyles}>
          Pesquisar
        </Button>
        <Button onClick={handleClear} {...buttonStyles}>
          Limpar
        </Button>
      </HStack>
    </Box>
  );
}
