'use client';
import { useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { SearchBarDesktop } from "./SearchBarDesktop/SearchBarDesktop";
import { SearchBarMobile } from "./SearchBarMobile/SearchBarMobile";
import { ModalSearchMobile } from "../ModalSearchMobile/ModalSearchMobile";


interface SearchBarProps {
  setSearch: (search: string) => void;
}

export function SearchBar({ setSearch }: SearchBarProps) {
  const [name, setName] = useState<string>('');
  const [floatMin, setFloatMin] = useState<string>('');
  const [floatMax, setFloatMax] = useState<string>('');
  const [priceMin, setPriceMin] = useState<string>('');
  const [priceMax, setPriceMax] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [orderBy] = useState<string>('price');
  const [orderDirection, setOrderDirection] = useState<string>('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearch = (): void => {
    const query: { [key: string]: string } = {};

    if (name) query.name = name;
    if (floatMin) query.floatMin = floatMin;
    if (floatMax) query.floatMax = floatMax;
    if (priceMin) query.priceMin = priceMin;
    if (priceMax) query.priceMax = priceMax;
    if (category && category !== 'Categoria') query.category = category;
    if (orderBy) query.orderBy = orderBy;
    if (orderDirection) query.orderDirection = orderDirection;

    const queryString = new URLSearchParams(query).toString();
    setSearch(`/items?${queryString}`);
  };

  const handleClear = (): void => {
    setName('');
    setFloatMin('');
    setFloatMax('');
    setPriceMin('');
    setPriceMax('');
    setCategory('Categoria');
    setOrderDirection('');
    setSearch('/items');
  };

  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  return (
    <form>
      {isLargerThan1024 ? (
        <SearchBarDesktop
          name={name}
          setName={setName}
          floatMin={floatMin}
          setFloatMin={setFloatMin}
          floatMax={floatMax}
          setFloatMax={setFloatMax}
          priceMin={priceMin}
          setPriceMin={setPriceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
          category={category}
          setCategory={setCategory}
          orderBy={orderBy}
          orderDirection={orderDirection}
          setOrderDirection={setOrderDirection}
          handleSearch={handleSearch}
          handleClear={handleClear}
        />
      ) : (
        <SearchBarMobile
          name={name}
          setName={setName}
          handleSearch={handleSearch}
          onOpen={onOpen}
        />
      )}
      <ModalSearchMobile
        isOpen={isOpen}
        onClose={onClose}
        setSearch={setSearch}
        setCategory={setCategory}
        orderDirection={orderDirection}
        setOrderDirection={setOrderDirection}
        handleSearch={handleSearch}
        handleClear={handleClear}
        floatMax={floatMax}
        priceMax={priceMax}
        floatMin={floatMin}
        priceMin={priceMin}
        setPriceMax={setPriceMax}
        setPriceMin={setPriceMin}
        setFloatMax={setFloatMax}
        setFloatMin={setFloatMin}
      />
    </form>
  );
}
