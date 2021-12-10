import { Grid, Avatar, Divider } from "@material-ui/core";
import React, { ReactElement } from "react";
import { People, PageIds } from "../../stores/Interfaces";

import "./styles.scss";
import clsx from "clsx";

const SpeakerEntry = ({ speaker }: { speaker: People }): ReactElement => {
  const [isSeeDescription, setIsSeeDescription] = React.useState(false);
  return (
    <div className="speaker">
      <Avatar
        className="avatar"
        alt={speaker.name}
        src={`${process.env.PUBLIC_URL}/images/${speaker.img}`}
      />
      <div>
        <b className="name">
          <a href={speaker.webpage}>{speaker.name}</a>
        </b>
        , <i className="affiliation">{speaker.affliation}</i>
        <p>{speaker.description}</p>
      </div>
    </div>
  );
};

const SpeakerList = ({ speakers }: { speakers: People[] }): ReactElement => {
  return (
    <div className="speaker-list">
      {speakers.map((speaker) => (
        <>
          <SpeakerEntry speaker={speaker} key={speaker.name} />
          <Divider key={speaker.name} className="divider" />
        </>
      ))}
    </div>
  );
};
export default SpeakerList;
