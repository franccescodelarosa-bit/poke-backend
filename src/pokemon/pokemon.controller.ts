import {
  Controller,
  Get,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PokemonService } from './pokemon.services';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  list(
    @Query('limit') limit = 20,
    @Query('offset') offset = 0,
  ) {
    return this.pokemonService.list(
      Number(limit),
      Number(offset),
    );
  }
}
