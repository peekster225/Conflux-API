import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { config } from 'dotenv';

config();

@Module({
    imports: [
        TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        charset: 'utf8',
        entities: [join(__dirname, '**/**.entity{.ts,.js}')],
        synchronize: true,
        }),
        ProductModule, 
        UserModule, 
        AuthModule
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}