import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponsesService } from './responses.service';
import { CreateResponseDto } from './dto/create-response.dto';

@ApiTags('Responses')
@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @Post()
  create(@Body() createResponseDto: CreateResponseDto) {
    return this.responsesService.create(createResponseDto);
  }

  @Get()
  findAll() {
    return this.responsesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsesService.findOne(id);
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.responsesService.findByUser(userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsesService.remove(id);
  }
}
