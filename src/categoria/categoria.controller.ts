import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CategoriaDto } from '../dto/CategoriaDto';
import { Categoria } from '../models/categoria';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('categoria')
export class CategoriaController {

  constructor(
    @InjectRepository(Categoria)
    private categoriaRepo: Repository<Categoria>
  ) {
  }

  @Get()
  async index(): Promise<Categoria[]> {
    return this.categoriaRepo.find();
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Categoria> {
    return this.categoriaRepo.findOneOrFail(+id);
  }

  @Post()
  async store(@Body() body: CategoriaDto): Promise<Categoria> {
    const categoria: Categoria = this.categoriaRepo.create(body);
    return this.categoriaRepo.save(categoria);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CategoriaDto): Promise<Categoria> {
    await this.categoriaRepo.findOneOrFail(+id);
    await this.categoriaRepo.update({ id: +id }, body);
    return this.categoriaRepo.findOneOrFail(+id);
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string) : Promise<void> {
    await this.categoriaRepo.findOneOrFail(+id);
    await this.categoriaRepo.delete({ id: +id })
  }
}
