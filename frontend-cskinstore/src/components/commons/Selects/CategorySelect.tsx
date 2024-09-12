'use client';
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface CategorySelectProps {
  category: string;
  setCategory: (category: string) => void;
}

const categories = [
  { label: 'Todos Itens', value: '' },
  { label: 'Adesivo', value: 'Adesivo' },
  { label: 'Agente', value: 'Agente' },
  { label: 'Escopeta', value: 'Escopeta' },
  { label: 'Faca', value: 'Faca' },
  { label: 'Pistola', value: 'Pistola' },
  { label: 'Rifle', value: 'Rifle' },
  { label: 'Rifle de Precisão', value: 'Rifle de Precisão' },
  { label: 'Submetralhadora', value: 'Submetralhadora' },
];

const menuItemStyles = {
  bg: 'Gray 900',
  _hover: { bg: 'orange.500' },
};

export function CategorySelect({category, setCategory }: CategorySelectProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Categoria');

  useEffect(() => {
    if (category === "Categoria") {
      setSelectedCategory("Categoria");
    }
  }, [category]);

  const handleCategorySelect = (category: string, label: string) => {
    setCategory(category);
    setSelectedCategory(label);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        size='170px'
        minW={180}
        p={3}
        colorScheme='orange'
      >
        {selectedCategory}
      </MenuButton>
      <MenuList bg='gray.900' border='1px solid' borderColor='orange.500'>
        {categories.map((category) => (
          <MenuItem
            key={category.value}
            onClick={() => handleCategorySelect(category.value, category.label)}
            {...menuItemStyles}
          >
            {category.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
