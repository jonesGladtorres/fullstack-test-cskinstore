import { ItemOrder } from './item-order.interface';

export interface FindAllQueryParams extends ItemOrder {
  name?: string;
  floatMin?: string;
  floatMax?: string;
  priceMin?: string;
  priceMax?: string;
  category?: string;
}
