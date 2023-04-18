import {
  ArrayMinSize,
  IsArray,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Transform, TransformFnParams, Type } from 'class-transformer';
import { UserRolesDto } from '../dto/user-roles.dto';

export class UserCreateDto {
  @IsString({ message: 'O campo matricula precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo matricula é obrigátorio.' })
  @MinLength(8, { message: 'O campo matricula precisa ter pelo menos 8 caracteres.' })
  @MaxLength(8, { message: 'O campo login pode ter no máximo 8 caracteres.' })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  registrationNumber: string;

  @IsString({ message: 'O campo nome precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo nome é obrigátorio.' })
  @MinLength(3, { message: 'O campo nome precisa ter pelo menos 3 caracteres.' })
  @MaxLength(100, { message: 'O campo nome pode ter no máximo 100 caracteres.' })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  name: string;

  @IsDefined({ message: 'O campo CPF deve ser válido!' })
  @IsString({ message: 'O campo CPF deve ser uma string!' })
  @MinLength(11, { message: 'O campo CPF precisa ter pelo menos 11 caracteres.' })
  @MaxLength(11, { message: 'O campo CPF precisa ter pelo menos 11 caracteres.' })
  cpf: string;

  @IsDefined({ message: 'O campo senha deve ser válido!' })
  @IsString({ message: 'O campo senha deve ser uma string!' })
  @MinLength(8, { message: 'O campo senha precisa ter pelo menos 8 caracteres.' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'A senha deve conter pelo menos uma letra maiúscula, um caractere especial, um número e uma letra minúscula.',
  })
  password: string;

  @IsInt({ message: 'O campo de ID posição precisa ser um inteiro.' })
  @IsNotEmpty({ message: 'O campo posição é obrigátorio.' })
  @MinLength(3, { message: 'O campo posição precisa ter pelo menos 3 caracteres.' })
  @MaxLength(5, { message: 'O campo posição pode ter no máximo 100 caracteres.' })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  positionId: string;

  @IsArray()
  @ArrayMinSize(0, { message: 'Informe ao menos um perfil de acesso' })
  @ValidateNested({ each: true })
  @Type(() => UserRolesDto)
  roles: UserRolesDto[];
}
