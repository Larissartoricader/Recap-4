import "./Theme.css";
import ColorsBoxPreview from "./ColorsBoxPreview";
import ColorsBox from "./ColorsBox";
import { useState } from "react";

export default function Theme({
  theme,
  onDeleteTheme,
  onEditButton,
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
          onEditButton={onEditButton}
          isEditing={isEditing}
        />
      ) : (
        <ColorsBoxPreview theme={theme} />
      )}
    </div>
  );
}
