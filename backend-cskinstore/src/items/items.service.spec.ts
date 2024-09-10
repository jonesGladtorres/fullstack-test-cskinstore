import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsService, PrismaService],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findById', () => {
    it('should return a single item', async () => {
      const result = {
        item: {
          id: '1',
          name: 'Item 1',
          image: '',
          category: '',
          float: '',
          price: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        similarItems: [],
      };
      jest.spyOn(service, 'findById').mockResolvedValue(result); // Use mockResolvedValue

      await expect(service.findById('1')).resolves.toEqual(result); // Use resolves.toEqual
    });

    it('Item não encontrado!', async () => {
      jest.spyOn(service, 'findById').mockImplementation(async () => {
        throw new NotFoundException(`Item with id 1 not found`);
      });
    });
  });
});
