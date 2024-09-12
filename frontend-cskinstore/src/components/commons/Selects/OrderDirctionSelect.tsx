import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface OrderDirectionSelectProps {
  orderDirection: string;
  setOrderDirection: (value: string) => void;
}

const menuItemStyles = {
  bg: 'gray.900',
  _hover: { bg: 'orange.500' },
};

export function OrderDirectionSelect({ orderDirection, setOrderDirection}: OrderDirectionSelectProps) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        size='170px'
        minW={150}
        p={3}
        colorScheme='orange'
      >
        {orderDirection
          ? orderDirection === 'asc'
            ? 'Crescente'
            : 'Decrescente'
          : 'Ordenar por'}
      </MenuButton>
      <MenuList bg='gray.900' border='1px solid' borderColor='orange.500'>
        <MenuItem
          onClick={() => setOrderDirection('asc')}
          {...menuItemStyles}
        >
          Crescente
        </MenuItem>
        <MenuItem
          onClick={() => setOrderDirection('desc')}
          {...menuItemStyles}
        >
          Decrescente
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
