import { Country } from "./country.interface"
import { Region } from "./region.type"

export interface CachStore {
  byCapital: TempCountries,
  byCountries: TempCountries,
  byRegion: RegionCountries
}

export interface TempCountries{
  term: string,
  countries: Country[]
}

export interface RegionCountries{
  region?: Region,
  countries: Country[]
}

