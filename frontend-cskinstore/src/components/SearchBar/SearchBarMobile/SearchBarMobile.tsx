import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Button, Flex, Input } from "@chakra-ui/react";

interface SearchBarMobileProps {
  name: string;
  setName: (value: string) => void;
  handleSearch: () => void;
  onOpen: () => void;
}

const inputStyles = {
  bg: 'whiteAlpha.50',
  borderLeftRadius: 8,
  borderRightRadius: 0,
  p: 2,
  w: '100%',
  border: 0,
  focusBorderColor: 'none',
};

const buttonStyles = {
  bg: 'orange.500',
  color: 'white',
  borderLeftRadius: 0,
  p: 2,
  maxW: 50,
};

export function SearchBarMobile({
  name,
  setName,
  handleSearch,
  onOpen,
}: SearchBarMobileProps) {
  return (
    <Flex w='100%' p={10}>
      <Input
        placeholder='Procurar por itens'
        value={name}
        onChange={(e) => setName(e.target.value.toLowerCase())}
        {...inputStyles}
      />
      <Button {...buttonStyles} borderRightRadius={0} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Button {...buttonStyles} borderRightRadius={8} onClick={handleSearch}>
        <SearchIcon />
      </Button>
    </Flex>
  );
}
