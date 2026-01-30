import { Injectable, BadGatewayException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PokemonService {
  async list(limit = 20, offset = 0) {
    try {
      const res = await axios.get(
        'https://pokeapi.co/api/v2/pokemon',
        {
          params: { limit, offset },
        },
      );

      return res.data;
    } catch (error) {
      throw new BadGatewayException(
        'Error consuming Pokémon API',
      );
    }
  }
}
