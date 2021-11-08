import { ApiProperty } from '@nestjs/swagger';

export class CreateRideDto {
  @ApiProperty()
  user: string;

  @ApiProperty()
  vehicle: string;
}
