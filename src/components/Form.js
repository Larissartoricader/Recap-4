import "./Form.css";

export default function Form({ onAddTheme }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.elements.name.focus();
    onAddTheme(data);
    // console.log(primary + secondary);
    event.target.reset();
  }

  return (
    <div>
      <h2>Your Theme</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="name">Add a your Theme</label>
        <input
          type="text"
          placeholder="Write your theme name"
          id="name"
          name="name"
          required
        ></input>
        <label>Pick your colors</label>
        <div className="form-pick-colors">
          <input
            className="pick-color"
            type="color"
            id="primary"
            name="primary"
            defaultValue="#1DDA82"
          ></input>
          <input
            className="pick-color"
            type="color"
            id="secondary"
            name="secondary"
            defaultValue="#D908E8"
          ></input>
          <input
            className="pick-color"
            type="color"
            id="surface"
            name="surface"
            defaultValue="#94FF28"
          ></input>
          <input
            className="pick-color"
            type="color"
            id="surfaceon"
            name="surfaceon"
            defaultValue="#C93E55"
          ></input>
        </div>
        <button type="submit" className="pick-color-button">
          Send your Theme
        </button>
      </form>
    </div>
  );
}
