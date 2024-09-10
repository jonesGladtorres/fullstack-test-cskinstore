import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

describe('ItemsController', () => {
  let controller: ItemsController;
  let service: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [ItemsService, PrismaService],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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

      await expect(controller.findById('1')).resolves.toEqual(result); // Use resolves.toEqual
    });

    it('Item não encontrado!', async () => {
      jest.spyOn(service, 'findById').mockImplementation(async () => {
        throw new NotFoundException(`Item with id 1 not found`);
      });
    });
  });
});
