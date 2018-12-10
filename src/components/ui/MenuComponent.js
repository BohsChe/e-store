import React from "react";
import { menuItems } from "../../config/ui/menu";

import "./MenuComponent.scss";
const MenuComponent = () => {
  let formSubMenu = (items, menuIndex) => {
    return (
      <ul className={`menu ${menuIndex}`}>
        {items.map((subMenuItems, index) => {
          return (
            <li className="subMenuItems">
              <a href="/">{subMenuItems.title}</a>
              {subMenuItems.subMenu
                ? formSubMenu(subMenuItems.subMenu, `submenu_${index}`)
                : ""}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="menu-component">{formSubMenu(menuItems, "main-menu")}</div>
  );
};

export default MenuComponent;
