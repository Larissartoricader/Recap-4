import "./Theme.css";
import ColorsBoxPreview from "./ColorsBoxPreview";
import ColorsBox from "./ColorsBox";
import { useState } from "react";

export default function Theme({
  theme,
  onDeleteTheme,
  onEditTheme,
  isEditing,
}) {
  const [showDetail, setShowDetail] = useState(false);

  function handleDetailButton() {
    setShowDetail(!showDetail);
  }

  return (
    <div>
      <div className="theme-box" onClick={handleDetailButton}>
        <h2>{`${theme.name} ﹀ `}</h2>
      </div>

      {showDetail ? (
        <ColorsBox
          theme={theme}
          onDeleteTheme={onDeleteTheme}
          onEditTheme={onEditTheme}
          isEditing={isEditing}
        />
      ) : (
        <ColorsBoxPreview theme={theme} />
      )}
    </div>
  );
}

// Part 6:
// 1. New Edit Button in Detail Color Box - DONE

// 2. Edit the already existing Form using defaultValue={newTheme.primary} same for (Name  and 3 more Colors)

//Question: Do I use "newTheme.primary" like in the App.js?

// 3. Inside the theme, do I create a new State that is operated by the Edit Button and ovewrite the initial State operate by the Name-Color-Button?
