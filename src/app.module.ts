import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';
import { PrismaService } from './prisma/prisma.service';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [AuthModule, UsersModule, PokemonModule],
  providers: [PrismaService],
})
export class AppModule {}
