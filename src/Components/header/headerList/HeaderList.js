import React from "react";
import data from "../../../data";
import { HeaderNavigation } from "./HeaderListStyled";

const HeaderList = () => {
  return (
    <HeaderNavigation>
      <ul className="headerList">
        {data.header.map((item) => {
          return (
            <li className="headerListItem" key={item}>
              <a href={item} className="headerListLink">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </HeaderNavigation>
  );
};

export default HeaderList;
