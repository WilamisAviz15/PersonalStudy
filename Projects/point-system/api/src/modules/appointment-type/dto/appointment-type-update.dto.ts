import { Transform, TransformFnParams } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class AppointmentTypeUpdateDto {
  @IsNotEmpty({ message: 'O campo de ID da ação é obrigátorio.' })
  @IsInt({ message: 'O campo de ID da ação precisa ser um inteiro.' })
  id: number;

  @IsString({ message: 'O campo de Nome precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo de Nome é obrigátorio.' })
  @MinLength(3, { message: 'O campo de Nome precisa ter pelo menos 3 caracteres.' })
  @MaxLength(50, { message: 'O campo de Nome pode ter no máximo 50 caracteres.' })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  name: string;
}
