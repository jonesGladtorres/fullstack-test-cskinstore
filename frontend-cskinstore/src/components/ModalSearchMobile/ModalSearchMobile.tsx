import {
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Flex,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { CategorySelect } from "../commons/Selects/CategorySelect";
import { OrderDirectionSelect } from "../commons/Selects/OrderDirctionSelect";

interface ModalSearchMobileProps {
  isOpen: boolean;
  onClose: () => void;
  setSearch: (search: string) => void;
  setCategory: (value: string) => void;
  orderDirection: string;
  setOrderDirection: (value: string) => void;
  handleSearch: () => void;
  handleClear: () => void;
  setPriceMin: (value: string) => void;
  setPriceMax: (value: string) => void;
  setFloatMin: (value: string) => void;
  setFloatMax: (value: string) => void;
  floatMin: string;
  floatMax: string;
  priceMin: string;
  priceMax: string;
}

export function ModalSearchMobile({
  isOpen,
  onClose,
  setCategory,
  orderDirection,
  setOrderDirection,
  handleSearch,
  handleClear,
  setPriceMin,
  setPriceMax,
  setFloatMin,
  setFloatMax,
  floatMin,
  floatMax,
  priceMin,
  priceMax,
}: ModalSearchMobileProps) {
  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='gray.900'>
          <ModalHeader>Gerenciador de buscas</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' gap={3}>
              <OrderDirectionSelect
                orderDirection={orderDirection}
                setOrderDirection={setOrderDirection}
              />
              <CategorySelect setCategory={setCategory} />
            </Flex>
            <Flex direction='column' gap={3} mt={5}>
              <Text>Pesquisar por valor:</Text>
              <Flex gap={4}>
                <Input
                  type='number'
                  placeholder='Valor mínimo'
                  borderColor='orange.500'
                  focusBorderColor='orange.500'
                  value={priceMin}
                  onChange={(event) => setPriceMin(event.target.value)}
                />
                <Input
                  type='number'
                  placeholder='Valor máximo'
                  borderColor='orange.500'
                  focusBorderColor='orange.500'
                  value={priceMax}
                  onChange={(event) => setPriceMax(event.target.value)}
                />
              </Flex>
            </Flex>
            <Flex direction='column' gap={3} mt={5}>
              <Text>Pesquisar por Float:</Text>
              <Flex gap={4}>
                <Input
                  type='number'
                  placeholder='Float mínimo'
                  borderColor='orange.500'
                  focusBorderColor='orange.500'
                  value={floatMin}
                  onChange={(event) => setFloatMin(event.target.value)}
                />
                <Input
                  type='number'
                  placeholder='Float máximo'
                  borderColor='orange.500'
                  focusBorderColor='orange.500'
                  value={floatMax}
                  onChange={(event) => setFloatMax(event.target.value)}
                />
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='orange'
              mr={3}
              onClick={() => {
                onClose();
                handleSearch();
              }}
            >
              Pesquisar
            </Button>
            <Button
              colorScheme='orange'
              onClick={() => {
                onClose();
                handleClear();
              }}
            >
              Limpar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
