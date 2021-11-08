import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';
import { Response, ResponseSchema } from './responses.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Response.name, schema: ResponseSchema },
    ]),
    UsersModule,
  ],
  controllers: [ResponsesController],
  providers: [ResponsesService],
})
export class ResponsesModule {}
