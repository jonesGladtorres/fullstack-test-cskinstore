import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface FloatSelectProps {
  floatMin: string;
  setFloatMin: (value: string) => void;
  floatMax: string;
  setFloatMax: (value: string) => void;
}

const floatOptions = [
  { label: 'Nova de Fábrica (0 - 0.07)', min: '0', max: '0.07' },
  { label: 'Pouco Usada (0.07 - 0.15)', min: '0.07', max: '0.15' },
  { label: 'Testada em Campo (0.15 - 0.38)', min: '0.15', max: '0.38' },
  { label: 'Bem Desgastada (0.38 - 0.45)', min: '0.38', max: '0.45' },
  { label: 'Veterana de Guerra (0.45 - 1)', min: '0.45', max: '1' },
];

const menuItemStyles = {
  bg: 'gray.900',
  _hover: { bg: 'orange.500' },
};

export function FloatSelect({ floatMin, setFloatMin, floatMax, setFloatMax }: FloatSelectProps) {
  const handleFloatSelect = (min: string, max: string) => {
    setFloatMin(min);
    setFloatMax(max);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        size='170px'
        minW={170}
        p={3}
        colorScheme='orange'
      >
        {floatMin && floatMax ? `${floatMin} - ${floatMax}` : 'Pesquisar Float'}
      </MenuButton>
      <MenuList bg='gray.900' border='1px solid' borderColor='orange.500'>
        {floatOptions.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => handleFloatSelect(option.min, option.max)}
            {...menuItemStyles}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}