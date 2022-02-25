import { Body, Controller, Get, Post, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) { }

  @Post('add')
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
    return createCatDto;
  }

  @Get('getAll')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
    // throw new HttpException('Forbidden123454', HttpStatus.FORBIDDEN);
  }
}
