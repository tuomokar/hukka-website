import { format, isSameDay, parseISO } from "date-fns";
import { IsoDateString } from "./types";

export const formatDateRange = (dateStartString: IsoDateString, dateEndString: IsoDateString) => {
  const startDate = parseISO(dateStartString);
  const endDate = parseISO(dateEndString);

  if (isSameDay(startDate, endDate)) {
    return format(startDate, "d.M.yyyy");
  }

  return `${format(startDate, "d.")}-${format(endDate, "d.M.yyyy")}`;
};
