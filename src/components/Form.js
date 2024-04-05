import "./Form.css";

export default function Form({ onAddTheme, theme }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.elements.name.focus();
    onAddTheme(data);
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
            defaultValue={theme.colors[0].value}
          ></input>
          <input
            className="pick-color"
            type="color"
            id="secondary"
            name="secondary"
            defaultValue={theme.colors[1].value}
          ></input>
          <input
            className="pick-color"
            type="color"
            id="surface"
            name="surface"
            defaultValue={theme.colors[2].value}
          ></input>
          <input
            className="pick-color"
            type="color"
            id="surfaceon"
            name="surfaceon"
            defaultValue={theme.colors[3].value}
          ></input>
        </div>
        <button type="submit" className="pick-color-button">
          Send your Theme
        </button>
      </form>
    </div>
  );
}
