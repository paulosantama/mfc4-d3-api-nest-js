import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaController } from './categoria/categoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Categoria } from './models/categoria';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Categoria])
  ],
  controllers: [AppController, CategoriaController],
  providers: [AppService],
})
export class AppModule {}
