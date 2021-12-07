import { AppBar, Toolbar } from "@material-ui/core";
import React, { ReactElement } from "react";
import { PageIds } from "../../stores/Interfaces";

import "./styles.scss";

const Header = (): ReactElement => {
  {
    /* <header className="app-header">
      <h1>TRAIT</h1>
      <nav>
        <ul>
          {Object.values(PageIds).map((value) => (
            <li className="option">
              <a href={`#${value}`} key={value}>
                {value}
              </a>
            </li>
          ))}
        </ul>
      </nav>
          </header>*/
  }
  return (
    <AppBar className="app-header" position="sticky">
      <Toolbar variant="dense">
        <h1>TRAIT</h1>
        <nav>
          <ul>
            {Object.values(PageIds).map((value) => (
              <li className="option">
                <a href={`#${value}`} key={value}>
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
