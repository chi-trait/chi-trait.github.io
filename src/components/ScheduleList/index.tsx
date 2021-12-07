import { ReactElement, useState } from "react";
import { Schedule } from "../../stores/Interfaces";
import clsx from "clsx";
import "./styles.scss";
import { Visibility } from "@material-ui/icons";

const ScheduleEntry = ({ schedule }: { schedule: Schedule }): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="schedule">
      <div className="time">
        {schedule.start} -- {schedule.end}
      </div>
      <div className="theme">
        {schedule.title}
        <Visibility
          onClick={() => setIsOpen(!isOpen)}
          className={clsx("icon", { visible: schedule.description })}
          fontSize="small"
          color="secondary"
        />
        <div className={clsx("description", { visible: isOpen })}>
          {schedule.description}
        </div>
      </div>
      <div></div>
    </div>
  );
};
const ScheduleList = ({
  schedules,
}: {
  schedules: Schedule[];
}): ReactElement => {
  return (
    <div className="schedule-list">
      {schedules.map((schedule, index) => (
        <ScheduleEntry schedule={schedule} key={index} />
      ))}
    </div>
  );
};
export default ScheduleList;
