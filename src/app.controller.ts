import {
  Req,
  Res,
  Headers,
  Body,
  Controller,
  Get,
  Param,
  Query,
  HttpCode,
  Post,
  Header
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @HttpCode(204)
  getHelloQuery(
    @Param() params,
    @Query() query,
    // @Body() body,
    // @Headers() header,
    // @Req() req,
    // @Res() res,
  ): string {
    console.log(params, query);
    // console.log(body, header);
    // console.log(req.params);
    // console.log(res);
    return this.appService.getHelloQuery(query);
  }

  @Get(':id')
  getHello(@Param() params): string {
    console.log(params);
    return this.appService.getHello(params);
  }

  @Post('add')
  @Header('Content-type', 'application/json')
  async create(@Body() createCatDto) {
    console.log(1234, createCatDto);
  }
}

// @Controller('user')
// export class AppControllerQuery {
//   constructor(private readonly appService: AppService) { }

//   @Get()
//   getHello(@Query() query): string {
//     console.log(query);
//     return this.appService.getHelloQuery(query);
//   }
// }
