import { Transform, TransformFnParams } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

import { ActionsMenuInterface } from '../../actions/interfaces/actions-menu.interface';

export class MenuUpdateDto {
  @IsNotEmpty({ message: 'O campo de ID é obrigátorio.' })
  @IsInt({ message: 'O campo de ID precisa ser um inteiro.' })
  id: number;

  @IsString({ message: 'O campo de Nome do Menu precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo de Nome do Menu é obrigátorio.' })
  @MinLength(3, { message: 'O campo de Nome do Menu precisa ter pelo menos 3 caracteres.' })
  @MaxLength(50, { message: 'O campo de Nome do Menu pode ter no máximo 50 caracteres.' })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  name: string;

  @IsString({ message: 'O campo de Rota precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo de Rota é obrigátorio.' })
  @MinLength(3, { message: 'O campo de Rota precisa ter pelo menos 3 caracteres.' })
  @MaxLength(50, { message: 'O campo de Rota pode ter no máximo 50 caracteres.' })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  route: string;

  @IsString({ message: 'O campo de Icone precisa ser uma string.' })
  @IsOptional({ message: 'O campo de Icone é obrigátorio.' })
  @MinLength(3, { message: 'O campo de Icone precisa ter pelo menos 3 caracteres.' })
  @MaxLength(50, { message: 'O campo de Icone pode ter no máximo 50 caracteres.' })
  icon: string;

  @IsNotEmpty({ message: 'O campo de ID do Grupo de Menus é obrigátorio.' })
  @IsInt({ message: 'O campo de ID do Grupo de Menus precisa ser um inteiro.' })
  menuGroupId: number;

  @IsString({ message: 'O campo de Chave do Menu precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo de Chave do Menu é obrigátorio.' })
  @MinLength(3, { message: 'O campo de Chave do Menu precisa ter pelo menos 3 caracteres.' })
  @MaxLength(50, { message: 'O campo de Chave do Menu pode ter no máximo 50 caracteres.' })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  menuKey: string;

  @IsOptional()
  actionsMenus?: ActionsMenuInterface[];
}
