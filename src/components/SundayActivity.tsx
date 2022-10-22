import React, { FC } from "react";
import { SundayActivity as SundayActivityType } from "../types/Activities";
import { CanceledActivity } from "./CanceledActivity";

type NonOptional<T> = {
  [Property in keyof T]-?: T[Property];
};

interface Props extends NonOptional<SundayActivityType> {}

const getTitle = ({
  noMeeting,
  title,
  isCanceled,
  cancelReason,
}: Pick<Props, "noMeeting" | "title" | "isCanceled" | "cancelReason">) => {
  if (noMeeting) {
    return "(ei tapaamista)";
  }

  if (isCanceled) {
    return <CanceledActivity activity={title} reason={cancelReason} />;
  }

  return title;
};

const SundayActivity: FC<Props> = ({ date, title, additionalDescription, noMeeting, isCanceled, cancelReason }) => {
  return (
    <>
      <span>{noMeeting ? <>{date}</> : <b>{date}</b>}</span>&nbsp;
      <span>{getTitle({ noMeeting, title, isCanceled, cancelReason })}</span>
      {additionalDescription && (
        <ul>
          <li>{additionalDescription}</li>
        </ul>
      )}
    </>
  );
};

export { SundayActivity };
