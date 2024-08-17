import { Country } from './countries';
import { Region } from './Region.type';


export interface CacheStore {
  byCapital: TermCountries,
  byCountries: TermCountries,
  byRegion: RegionCountries,
}

export interface TermCountries{
  term: string,
  countries: Country[],
}

export interface RegionCountries{
  region: Region,
  countries: Country[]
}


