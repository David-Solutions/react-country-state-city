import { City, Country, CountryState, CountryStateCity, State } from "../types";

export const GetCountries = async (): Promise<Country[] | []> => {
  const countries = await fetch(
    "https://raw.githubusercontent.com/David-Solutions/react-country-state-city/master/data/countriesminified.json"
  ).then((res) => res.json());
  return countries as Array<Country>;
};

export const GetState = async (id: number): Promise<Array<State> | []> => {
  const states = await fetch(
    "https://raw.githubusercontent.com/David-Solutions/react-country-state-city/master/data/statesminified.json"
  ).then((res) => res.json());
  const record = states as Array<CountryState>;
  const statesone = record.find((e: CountryState) => e.id === id);
  const state = statesone && statesone.states ? statesone.states : [];
  return state;
};

export const GetCity = async (
  countryid: number,
  stateid: number
): Promise<Array<City> | []> => {
  const cities = await fetch(
    "https://raw.githubusercontent.com/David-Solutions/react-country-state-city/master/data/citiesminified.json"
  ).then((res) => res.json());
  const record = cities as Array<CountryStateCity>;
  const countries = record.find((e: CountryStateCity) => e.id === countryid);
  if (countries) {
    const states = countries && countries.states ? countries.states : [];
    const city = states.find((e) => e.id === stateid);
    return city && city.cities ? city.cities : [];
  } else {
    return [];
  }
};
