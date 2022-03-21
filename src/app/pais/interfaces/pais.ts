export interface Pais {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: Status;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion: string;
  languages: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Region[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs: string[];
  side: Side;
}

export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America',
}

export interface Currencies {
  UYU?: All;
  EUR?: All;
  PYG?: All;
  GMD?: All;
  DJF?: All;
  RSD?: All;
  TJS?: All;
  AUD?: All;
  KID?: All;
  XOF?: All;
  HTG?: All;
  VUV?: All;
  WST?: All;
  BOB?: All;
  MGA?: All;
  STN?: All;
  MUR?: All;
  LBP?: All;
  PEN?: All;
  USD?: All;
  BRL?: All;
  UGX?: All;
  SRD?: All;
  CLP?: All;
  THB?: All;
  LRD?: All;
  KPW?: All;
  YER?: All;
  AMD?: All;
  TWD?: All;
  PKR?: All;
  MWK?: All;
  ARS?: All;
  PHP?: All;
  CZK?: All;
  MMK?: All;
  XAF?: All;
  MRU?: All;
  TRY?: All;
  EGP?: All;
  MZN?: All;
  CNY?: All;
  CDF?: All;
  BDT?: All;
  ALL?: All;
  ZAR?: All;
  FJD?: All;
  ANG?: All;
  MDL?: All;
  GYD?: All;
  HRK?: All;
  ISK?: All;
  BYN?: All;
  NAD?: All;
  LKR?: All;
  NIO?: All;
  SOS?: All;
  XCD?: All;
  ILS?: All;
  JOD?: All;
  CRC?: All;
  VND?: All;
  ZMW?: All;
  HNL?: All;
  CHF?: All;
  UZS?: All;
  MKD?: All;
  IRR?: All;
  PAB?: All;
  JPY?: All;
  CVE?: All;
  BIF?: All;
  TTD?: All;
  BGN?: All;
  LAK?: All;
  NGN?: All;
  PLN?: All;
  KRW?: All;
  TND?: All;
  ETB?: All;
  ZWL?: All;
  AZN?: All;
  MVR?: All;
  SGD?: All;
  NPR?: All;
  AOA?: All;
  INR?: All;
  KGS?: All;
  GNF?: All;
  IQD?: All;
  CUC?: All;
  CUP?: All;
  IDR?: All;
  SCR?: All;
  BND?: All;
  SLL?: All;
  KES?: All;
  NZD?: All;
  COP?: All;
  PGK?: All;
  MOP?: All;
  RWF?: All;
  SYP?: All;
  BWP?: All;
  KZT?: All;
  VES?: All;
  TZS?: All;
  XPF?: All;
  SDG?: Sdg;
}

export interface All {
  name: string;
  symbol: string;
}

export interface Sdg {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum StartOfWeek {
  Monday = 'monday',
  Sunday = 'sunday',
  Turday = 'turday',
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
}
