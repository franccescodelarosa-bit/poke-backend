import {
  Controller,
  Get,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PokemonService } from './pokemon.services';

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
