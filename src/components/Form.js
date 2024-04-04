import "./Form.css";

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
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
            id="color1"
            name="color1"
          ></input>
          <input
            className="pick-color"
            type="color"
            id="color2"
            name="color2"
          ></input>
          <input
            className="pick-color"
            type="color"
            id="color3"
            name="color3"
          ></input>
          <input
            className="pick-color"
            type="color"
            id="color4"
            name="color4"
          ></input>
        </div>
        <button type="submit" className="pick-color-button">
          Send your Theme
        </button>
      </form>
    </div>
  );
}
