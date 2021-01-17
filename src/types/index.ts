export interface CensusDataType {
  [key: number]: {
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
  };
}
