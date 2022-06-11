import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './module/productsmodule.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "yourpassword",
      database: "postgres",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      autoLoadEntities: true,
  }),
   ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
