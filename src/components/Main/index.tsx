import React, { ReactElement } from "react";
import { Menu, MenuItem, Paper } from "@material-ui/core";
import "./styles.scss";
import { Metadata, PageIds } from "../../stores/Interfaces";
import OrganizerList from "../OrganizerList";
import "./styles.scss";
import CommmitteeList from "../CommitteeList";
import CFPText from "../CFPText";
import ScheduleList from "../ScheduleList";
import LandingDiv from "../Landing";
import AboutDiv from "../About";

const Main = ({ meta }: { meta: Metadata }): ReactElement => {
  return (
    <>
      <LandingDiv overview={meta.overview} />

      <div className="app-main">
        <div className="section">
          <div className="title">About</div>
          <AboutDiv overview={meta.overview} cfp={meta.cfp} />
        </div>
        <div id={PageIds.Schedule} className="section">
          <div className="title">{PageIds.Schedule}</div>
          <ScheduleList schedules={meta.schedule} />
        </div>
        <div id={PageIds.CFP} className="section">
          <div className="title">{PageIds.CFP}</div>
          <CFPText cfp={meta.cfp} />
        </div>
        <div id={PageIds.Organizers} className="section">
          <div className="title">{PageIds.Organizers}</div>
          <OrganizerList organizers={meta.organizers} />
        </div>
        <div id={PageIds.committee} className="section">
          <div className="title">{PageIds.committee}</div>
          <CommmitteeList members={meta.pcs} />
        </div>
      </div>
    </>
  );
};
export default Main;
