import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Item } from '@prisma/client';
import { ItemFilters } from 'src/interfaces/item-filters.interface';
import { ItemOrder } from 'src/interfaces/item-order.interface';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  private parseNumber(value?: string): number | undefined {
    return value ? parseFloat(value) : undefined;
  }

  async findAll(filters: ItemFilters & ItemOrder): Promise<Item[]> {
    const {
      name,
      floatMin,
      floatMax,
      priceMin,
      priceMax,
      category,
      orderBy,
      orderDirection,
    } = filters;

    const floatMinNumber = this.parseNumber(floatMin);
    const floatMaxNumber = this.parseNumber(floatMax);
    const priceMinNumber = this.parseNumber(priceMin);
    const priceMaxNumber = this.parseNumber(priceMax);

    try {
      const items = await this.prisma.prismaClient.item.findMany({
        where: {
          name: name ? { contains: name } : undefined,
          float: {
            gte:
              floatMinNumber !== undefined
                ? floatMinNumber.toString()
                : undefined,
            lte:
              floatMaxNumber !== undefined
                ? floatMaxNumber.toString()
                : undefined,
          },
          price: {
            gte: priceMinNumber,
            lte: priceMaxNumber,
          },
          category: category ? { equals: category } : undefined,
        },
        orderBy: orderBy ? { [orderBy]: orderDirection || 'asc' } : undefined,
      });
      return items;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Erro ao buscar itens!');
    }
  }

  async findById(id: string): Promise<{ item: Item; similarItems: Item[] }> {
    try {
      const item = await this.prisma.prismaClient.item.findUnique({
        where: { id },
      });

      const similarItems = await this.prisma.prismaClient.item.findMany({
        where: {
          category: item.category,
          id: { not: id },
        },
        take: 2,
      });
      return { item, similarItems };
    } catch (error) {
      console.error(error);
      throw new NotFoundException('O item não foi encontrado!');
    }
  }
}
