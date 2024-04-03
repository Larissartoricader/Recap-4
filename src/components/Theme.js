import "./Theme.css";
import ColorsBoxPreview from "./ColorsBoxPreview";
import ColorsBox from "./ColorsBox";
import { useState } from "react";

// export default function Theme({ theme }) {
//   const [showDetail, setShowDetail] = useState(false);

//   function handleDetailButton() {
//     setShowDetail(!showDetail);
//   }

//   return (
//     <div>
//       <div className="theme-box">
//         <h2>{theme.name}</h2>
//         <button onClick={handleDetailButton}>Details</button>
//       </div>
//       <ColorsBoxPreview theme={theme} />
//       {showDetail && (
//         <>
//           <ColorsBox theme={theme} />
//         </>
//       )}
//     </div>
//   );
// }

export default function Theme({ theme }) {
  const [showDetail, setShowDetail] = useState(false);

  function handleDetailButton() {
    setShowDetail(!showDetail);
  }

  return (
    <div>
      <div className="theme-box" onClick={handleDetailButton}>
        <h2>{`${theme.name} ﹀ `}</h2>
      </div>
      <ColorsBoxPreview theme={theme} />
      {showDetail && <ColorsBox theme={theme} />}
    </div>
  );
}
