import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      // SQLite only
      storage: 'database.sqlite',
      autoLoadModels: true,
      synchronize: true,
    }),
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
