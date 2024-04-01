export interface Character {
    id: string;
    name: string;
    status: string;
    species: string;
    image: string;
}
  
export interface CharactersData {
    characters: {
      info: {
        count: number;
        pages: number;
      };
      results: Character[];
    };
}
