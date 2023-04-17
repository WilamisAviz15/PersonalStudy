import { ActionsMenuEntity } from '../../modules/actions/entities/action-menu.entity';
import { ActionEntity } from '../../modules/actions/entities/action.entity';
import { MenusGroupEntity } from '../../modules/menus-groups/entities/menus-group.entity';
import { MenuEntity } from '../../modules/menus/entities/menu.entity';
import { RoleEntity } from '../../modules/roles/entities/role.entity';
import { PrivilegeEntity } from '../../modules/menus/entities/privilege.entity';
import { AppointmentTypeEntity } from '../../modules/appointment-type/entities/appointment-type.entity';
import { OccurrenceEntity } from '../../modules/occurrences/entities/occurrence.entity';
import { StatusEntity } from '../../modules/status/entities/status.entity';
import { UsersStatusEntity } from '../../modules/users-status/entities/users-status.entity';
import { WorkdayEntity } from '../../modules/workday/entities/workday.entity';
import { PositionEntity } from '../../modules/positions/entities/positions.entity';
import { UserEntity } from '../../modules/users/entities/user.entity';

export const entities = [
  ActionEntity,
  ActionsMenuEntity,
  RoleEntity,
  MenuEntity,
  MenusGroupEntity,
  PrivilegeEntity,
  AppointmentTypeEntity,
  OccurrenceEntity,
  StatusEntity,
  UsersStatusEntity,
  WorkdayEntity,
  PositionEntity,
  UserEntity,
];
