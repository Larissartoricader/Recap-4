import Form from "./Form";
import "./EditForm.css";

export default function EditForm({ theme }) {
  return (
    <div className="edit_box">
      <h1>Edit Form</h1>
      <Form theme={theme} />
      {/* <Form theme={theme} /> */}
    </div>
  );
}
