import { ReactElement, useState } from "react";
import { CFP, Overview } from "../../stores/Interfaces";
import clsx from "clsx";
import "./styles.scss";
import { Grid } from "@material-ui/core";

const AboutDiv = ({
  overview,
  cfp,
}: {
  overview: Overview;
  cfp: CFP;
}): ReactElement => {
  return (
    <>
      <div className="about-div">
        <Grid container spacing={3} className="dates">
          {cfp.dates.map((date, i) => (
            <Grid item sm={4} xs={4} key={i}>
              <div className="col">
                <span className="col-key">{date.type}</span>
                <div className="col-value">{date.date}</div>
              </div>
            </Grid>
          ))}
        </Grid>
        <p className="landing-description">{overview.description}</p>
      </div>
    </>
  );
};
export default AboutDiv;
