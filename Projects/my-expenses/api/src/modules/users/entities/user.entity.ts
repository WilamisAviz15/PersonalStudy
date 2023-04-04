import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trip')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ length: 50, type: 'varchar' })
  name: string;

  @Column({ name: 'id_google', length: 50, type: 'varchar' })
  idGoogle: string;

  @Column({ length: 50, type: 'varchar' })
  email: string;

  @Column({ length: 50, type: 'varchar' })
  photo_url: string;
}
