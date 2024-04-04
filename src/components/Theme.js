import "./Theme.css";
import ColorsBoxPreview from "./ColorsBoxPreview";
import ColorsBox from "./ColorsBox";
import { useState } from "react";

// export default function Theme({ theme, onDeleteTheme }) {
//   const [showDetail, setShowDetail] = useState(false);

//   function handleDetailButton() {
//     setShowDetail(!showDetail);
//   }

//   return (
//     <div>
//       <div className="theme-box" onClick={handleDetailButton}>
//         <h2>{`${theme.name} ﹀ `}</h2>
//       </div>
//       {showDetail ? (
//         <ColorsBox theme={theme} onDeleteTheme={onDeleteTheme} />
//       ) : (
//         <ColorsBoxPreview theme={theme} />
//       )}
//     </div>
//   );
// }

export default function Theme({ theme, onDeleteTheme, onEditTheme, editing }) {
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
          editing={editing}
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
//Question: Do I use "newTheme.primary" like in the App.js? oder
// 3. How to fix the Toggle Edit Button? Do I need I new state and write the view-conditional inside the Detail-Box where the Button is? OR I write the preview-Conditional inside the THEME where the FIRST State is and already the detail/Preview View togglebal is? If that, how to inser 3 Conditions? Since inside de DETAIL, I need a condition for the Edit button?
