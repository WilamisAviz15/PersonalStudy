import { PositionEntity } from './../../positions/entities/positions.entity';
import { RoleEntity } from '../../roles/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'registration_number' })
  registrationNumber: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  password: string;

  @ManyToMany(() => RoleEntity, { cascade: true })
  @JoinTable({
    name: 'users_roles',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: RoleEntity[];

  @OneToOne(() => PositionEntity)
  @JoinColumn()
  position: PositionEntity;

  @Column({ name: 'last_access' })
  lastAccess?: Date;

  // @Column({ name: 'status' })
  // status: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;
}
