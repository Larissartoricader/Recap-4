import "./ColorsBoxPreview.css";
export default function ColorsBoxPreview({ theme }) {
  return (
    <div>
      <div className="colorbox-preview-container">
        {theme.colors.map((color) => (
          <div
            className="colorbox-preview-colors"
            key={color.index}
            style={{ backgroundColor: color.value }}
          ></div>
        ))}
      </div>
    </div>
  );
}
