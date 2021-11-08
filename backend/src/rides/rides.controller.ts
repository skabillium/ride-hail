import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  DefaultValuePipe,
  ParseBoolPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RidesService } from './rides.service';
import { CreateRideDto } from './dto/create-ride.dto';

@ApiTags('Rides')
@Controller('rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}

  @Post()
  create(@Body() createRideDto: CreateRideDto) {
    return this.ridesService.create(createRideDto);
  }

  @Get()
  findAll(
    @Query('user') user: string,
    @Query('unratedOnly', new DefaultValuePipe(true), ParseBoolPipe)
    unratedOnly: boolean,
  ) {
    if (unratedOnly && user) return this.ridesService.findAllUnrated(user);
    return this.ridesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ridesService.findOne(id);
  }

  @Delete(':id')
  remove(id: string) {
    return this.ridesService.remove(id);
  }
}
