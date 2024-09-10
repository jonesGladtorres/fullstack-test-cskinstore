import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [PrismaModule, ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
