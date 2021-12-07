import { Grid, Avatar } from "@material-ui/core";
import React, { ReactElement } from "react";
import { Organizer, PageIds } from "../../stores/Interfaces";

import "./styles.scss";
import clsx from "clsx";

const OrganizerEntry = ({
  organizer,
}: {
  organizer: Organizer;
}): ReactElement => {
  const [isSeeDescription, setIsSeeDescription] = React.useState(false);
  return (
    <a
      href={organizer.webpage}
      className="entry"
      onMouseOut={() => setIsSeeDescription(false)}
      onMouseOver={() => {
        setIsSeeDescription(true);
      }}
    >
      <Avatar
        className="avatar"
        alt={organizer.name}
        src={`${process.env.PUBLIC_URL}/images/${organizer.img}`}
      />
      <div>
        <div className={clsx("description", { visible: isSeeDescription })}>
          {organizer.description}
        </div>
        <div className="name">{organizer.name}</div>
        <div className="affiliation">{organizer.affliation}</div>
      </div>
    </a>
  );
};

const OrganizerList = ({
  organizers,
}: {
  organizers: Organizer[];
}): ReactElement => {
  return (
    <Grid container spacing={3} className="organizer-list">
      {organizers.map((organizer: Organizer) => (
        <Grid item lg={3} md={3} sm={3} xs={12} key={organizer.name}>
          <OrganizerEntry organizer={organizer} />
        </Grid>
      ))}
    </Grid>
  );
};
export default OrganizerList;
