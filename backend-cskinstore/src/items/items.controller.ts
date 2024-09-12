import { Controller, Get, Param, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { FindAllQueryParams } from './interfaces/find-all-query-params.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(@Query() query: FindAllQueryParams) {
    return this.itemsService.findAll(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.itemsService.findById(id);
  }
}
