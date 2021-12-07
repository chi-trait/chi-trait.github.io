import { ReactElement, useState } from "react";
import { Overview } from "../../stores/Interfaces";
import clsx from "clsx";
import "./styles.scss";
import { Visibility } from "@material-ui/icons";

const LandingDiv = ({ overview }: { overview: Overview }): ReactElement => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/${overview.backgroundImg})`,
        }}
        className="landing"
      >
        <div className="landing-title">
          {overview.acronym} {overview.year}
        </div>
        <p className="landing-description">
          <b>{overview.fullName}</b>, at {overview.confName} {overview.year}
          {/*<img
          className="img"
          src={`${process.env.PUBLIC_URL}/images/${overview.confLogoImg}`}
        />*/}
        </p>
      </div>
    </>
  );
};
export default LandingDiv;
