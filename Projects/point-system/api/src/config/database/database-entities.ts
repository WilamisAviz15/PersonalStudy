import { ActionsMenuEntity } from '../../modules/actions/entities/action-menu.entity';
import { ActionEntity } from '../../modules/actions/entities/action.entity';
import { MenusGroupEntity } from '../../modules/menus-groups/entities/menus-group.entity';
import { MenuEntity } from '../../modules/menus/entities/menu.entity';
import { RoleEntity } from '../../modules/roles/entities/role.entity';
import { PrivilegeEntity } from '../../modules/menus/entities/privilege.entity';

export const entities = [ActionEntity, ActionsMenuEntity, RoleEntity, MenuEntity, MenusGroupEntity, PrivilegeEntity];
