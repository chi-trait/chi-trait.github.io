import { Grid, Avatar } from "@material-ui/core";
import React, { ReactElement } from "react";
import { ProgramCommittee } from "../../stores/Interfaces";

import "./styles.scss";
const CommmitteeList = ({
  members,
}: {
  members: ProgramCommittee[];
}): ReactElement => {
  return (
    <div className="committee-list">
      {members.map((member, index) => (
        <div className="member" key={member.name}>
          <div className="name">{member.name}</div>
          <div className="affiliation">{member.affiliation}</div>
        </div>
      ))}
    </div>
  );
};
export default CommmitteeList;
