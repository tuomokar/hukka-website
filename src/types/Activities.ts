import { ReactNode } from "react";

export type SundayActivity = {
  date: string;
  title: ReactNode;
  additionalDescription?: ReactNode;
  noMeeting?: boolean;
  isCanceled?: boolean;
  cancelReason?: string | null;
};
