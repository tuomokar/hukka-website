import React, { FC, ReactNode } from "react";

type Props = {
  activity: ReactNode;
  reason?: string | null;
  noMeeting: boolean;
};

const CancelledActivity: FC<Props> = ({ activity, reason, noMeeting }) => (
  <>
    <span>
      <s>{activity}</s>
    </span>
    &nbsp;
    {reason && <span>{`(${reason})`}</span>}
    &nbsp;
    {noMeeting && "(ei tapaamista perumisen takia)"}
  </>
);

export { CancelledActivity as CanceledActivity };
