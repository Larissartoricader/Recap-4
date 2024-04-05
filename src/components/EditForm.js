import Form from "./Form";
import "./EditForm.css";
import ColorsBoxPreview from "./ColorsBoxPreview";

export default function EditForm({ theme, onAddTheme }) {
  return (
    <div className="edit_box">
      <ColorsBoxPreview theme={theme} />
      <h1>Edit Form</h1>
      <Form onAddTheme={onAddTheme} />
    </div>
  );
}
