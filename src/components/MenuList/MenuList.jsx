import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

export function MenuList() {
  return (
    <div className={s.container}>
      <MenuListItem difficulty="Low 🟢" />
      <MenuListItem difficulty="Medium 🟡" />
      <MenuListItem difficulty="High 🔴" />
      <MenuListItem difficulty="Insane ⚫️" />
    </div>
  );
}
