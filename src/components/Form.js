import "./Form.css";

export default function Form({ onAddTheme }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    onAddTheme(primary, secondary, surface, surfaceOn);
    const primary = data.primary;
    const secondary = data.secondary;
    const surface = data.surface;
    const surfaceOn = data.surfaceon;
    event.target.elements.themeName.focus();
    event.target.reset();
  }

  return (
    <div>
      <h2>Your Theme</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="themeName">Add a your Theme</label>
        <input
          type="text"
          placeholder="Write your theme name"
          id="themeName"
          name="themeName"
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
