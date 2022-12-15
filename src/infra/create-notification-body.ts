import { IsNotEmpty } from 'class-validator';
import { IsUUID, Length } from 'class-validator/types/decorator/decorators';

export class CreateNotificonBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 252)
  content: string;

  @IsNotEmpty()
  category: string;
}
