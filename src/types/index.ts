export interface CensusDataType {
  0: CityType;
  1: CityType;
  2: CityType;
  3: CityType;
  4: CityType;
  5: CityType;
  6: CityType;
  7: CityType;
  8: CityType;
  9: CityType;
  10: CityType;
  11: CityType;
  12: CityType;
  13: CityType;
  14: CityType;
  15: CityType;
  17: CityType;
  18: CityType;
  19: CityType;
  20: CityType;
  21: CityType;
  22: CityType;
  23: CityType;
  24: CityType;
}

export interface CityType {
  City: string;
  2011: number;
  2012: number;
  2013: number;
  2014: number;
  2015: number;
  2016: number;
  2017: number;
  2018: number;
  2019: number;
  'Unnamed: 10': number; //TODO: cleanup py script to skip unused cols.
  'Growth 2011-2019': number;
  'Unnamed: 12': number;
  'Growth 2015-2019': number;
}

export interface LineDataType {
  x: number[];
  y: number[];
  name: string;
  type: string;
}
