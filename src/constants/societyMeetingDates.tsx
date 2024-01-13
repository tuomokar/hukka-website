/*
Update these when the date is known for the meeting.
The root page will show invitation by default, and in
the case of the autum society meeting, it will also
display the available officer roles that we're searching.

// TODO: could use these in the MDX too.
*/

import { isWithinInterval, parseISO, startOfToday, subDays } from "date-fns";
import { IsoDateString } from "dates/types";

export const springSocietyMeetingDate: IsoDateString = "2023-05-28";
export const autumnSocietyMeetingDate: IsoDateString = "2023-12-03";

export const isAutumnSocietyMeetingInvitationDisplayed = (): boolean =>
  isWithinThirtyDays(parseISO(autumnSocietyMeetingDate));

export const isSpringSocietyMeetingInvitationDisplayed = (): boolean =>
  isWithinThirtyDays(parseISO(springSocietyMeetingDate));

const isWithinThirtyDays = (meetingDate: Date): boolean =>
  isWithinInterval(startOfToday(), {
    start: subDays(meetingDate, 30),
    end: meetingDate,
  });
