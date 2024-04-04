import "./ColorsBoxPreview.css";
export default function ColorsBoxPreview({ theme }) {
  return (
    <div key={theme.id}>
      <div className="colorbox-preview-container">
        {theme.colors.map((color) => (
          <div
            className="colorbox-preview-colors"
            key={color.value}
            style={{ backgroundColor: color.value }}
          ></div>
        ))}
      </div>
    </div>
  );
}
