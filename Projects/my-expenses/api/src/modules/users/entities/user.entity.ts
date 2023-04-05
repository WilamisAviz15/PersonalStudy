import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ length: 50, type: 'varchar' })
  name: string;

  @Column({ length: 50, type: 'varchar' })
  email: string;

  @Column({ name: 'photo_url', length: 100, type: 'varchar' })
  photoUrl: string;
}
