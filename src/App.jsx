import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import { useState } from "react";
import s from "./style.module.css";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("Insane");

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Select your React difficulty</h1>
      <div className={s.centerElems}>
        <MenuList
          onItemClick={onMenuListItemClick}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
