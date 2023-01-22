import { IsoDateString } from "dates/types";
import { ReactNode } from "react";

export type SundayActivity = {
  date: IsoDateString;
  title: ReactNode;
  additionalDescription?: ReactNode;
  noMeeting?: boolean;
  isCanceled?: boolean;
  cancelReason?: string | null;
};
