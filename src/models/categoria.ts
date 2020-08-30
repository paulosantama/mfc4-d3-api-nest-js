import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @CreateDateColumn({type: 'datetime'})
  created_at: Date;

  @UpdateDateColumn({type: 'datetime'})
  updated_at: Date;
}
