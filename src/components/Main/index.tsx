import React, { ReactElement } from "react";
import { makeStyles, Menu, MenuItem, Paper } from "@material-ui/core";
import "./styles.scss";
import { Metadata, PageIds } from "../../stores/Interfaces";
import OrganizerList from "../OrganizerList";
import "./styles.scss";
import CommmitteeList from "../CommitteeList";
import CFPText from "../CFPText";
import ScheduleList from "../ScheduleList";
import LandingDiv from "../Landing";
import AboutDiv from "../About";
import SpeakerList from "../Speaker";

export type PageBlock =
  | "cfp"
  | "about"
  | "organizers"
  | "committee"
  | "schedule";

const Main = ({
  meta,
  types,
}: {
  meta: Metadata;
  types: PageBlock[];
}): ReactElement => {
  return (
    <div key={types.join("-")}>
      <LandingDiv overview={meta.overview} />
      <div className="app-main">
        {types.includes("about") && (
          <div className="section">
            <div className="title">About</div>
            <AboutDiv overview={meta.overview} cfp={meta.cfp} />
          </div>
        )}
        {types.includes("schedule") && (
          <div className="section">
            <div className="title">Schedule (to be finalized)</div>
            <ScheduleList schedules={meta.schedule} />
          </div>
        )}
        {types.includes("schedule") && (
          <div className="section">
            <div className="title">Speakers & Panelists (to be finalized)</div>
            <SpeakerList speakers={meta.speakers} />
          </div>
        )}
        {types.includes("cfp") && (
          <div className="section">
            <div className="title">Call for Papers</div>
            <CFPText cfp={meta.cfp} />
          </div>
        )}
        {types.includes("organizers") && (
          <div className="section">
            <div className="title">Organizers</div>
            <OrganizerList organizers={meta.organizers} />
          </div>
        )}
        {types.includes("committee") && (
          <div className="section">
            <div className="title">Program Committees</div>
            <CommmitteeList members={meta.pcs} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Main;
