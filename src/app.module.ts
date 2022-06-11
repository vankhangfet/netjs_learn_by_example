import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forRoot({
      type: "postgres",
      host: "db.axmcabyvewmjgdrlswcr.supabase.co",
      port: 5432,
      username: "postgres",
      password: "Qwertyuiop@123Zxcasd",
      database: "postgres",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      autoLoadEntities: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
