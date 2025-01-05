type YearDigits = `202${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;
type MonthFirstDigit = 0 | 1;
type MonthSecondDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type DayFirstDigit = 0 | 1 | 2 | 3;
type DaySecondDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type IsoDateString = `${YearDigits}-${MonthFirstDigit}${MonthSecondDigit}-${DayFirstDigit}${DaySecondDigit}`;
