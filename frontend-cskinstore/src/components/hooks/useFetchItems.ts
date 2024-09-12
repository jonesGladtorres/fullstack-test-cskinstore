import { useState, useEffect, useCallback } from "react";
import { api } from "@/services/api";

export interface Item {
  id: string;
  name: string;
  category: string;
  price: number;
  float: string;
  image: string;
}

export const useFetchItems = (initialSearch: string) => {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState<string>(initialSearch);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await api.get<Item[]>(search);
      setItems(data);
    } catch (error) {
      setError('Erro ao buscar itens!');
      console.error('Erro ao buscar itens:', error);
    } finally {
      setIsLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { items, search, setSearch, isLoading, error };
};
