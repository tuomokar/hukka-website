import React, { FC, ReactNode } from "react";

type Props = {
  activity: ReactNode;
  reason?: string | null;
};

const CancelledActivity: FC<Props> = ({ activity, reason }) => (
  <>
    <span>
      <s>{activity}</s>
    </span>
    &nbsp;
    {reason && <span>{`(${reason})`}</span>}
  </>
);

export { CancelledActivity as CanceledActivity };
