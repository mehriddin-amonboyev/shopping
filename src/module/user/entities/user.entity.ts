import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
enum UserRole{
    Admin = 'admin',
    User = 'user',
    Guest = 'guest',
}
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    fullname: string;

    @Column({ length: 56 })
    email: string;

    @Column({ length: 13 })
    phone: string;

    @Column({length: 56})
    password: string;

    @Column()
    is_active: boolean;

    @Column('text')
    refresh_token: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default:UserRole.User
    })
    role: UserRole;
}
