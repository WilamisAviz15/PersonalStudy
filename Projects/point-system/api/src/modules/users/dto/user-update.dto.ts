import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Transform, TransformFnParams, Type } from 'class-transformer';
import { UserRolesDto } from './user-roles.dto';

export class UserUpdateDto {
  @IsNotEmpty({ message: 'O campo de ID do Usuário é obrigátorio.' })
  @IsInt({ message: 'O campo de ID do Usuário precisa ser um inteiro.' })
  id: number;

  @IsString({ message: 'O campo matricula precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo matricula é obrigátorio.' })
  @MinLength(8, { message: 'O campo matricula precisa ter pelo menos 8 caracteres.' })
  @MaxLength(8, { message: 'O campo login pode ter no máximo 8 caracteres.' })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  registrationNumber: string;

  @IsArray()
  @ArrayMinSize(0, { message: 'Informe ao menos um perfil de acesso' })
  @ValidateNested({ each: true })
  @Type(() => UserRolesDto)
  roles: UserRolesDto[];
}
