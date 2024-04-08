import "./TryOut.css";

export default function TryOut() {
  return (
    <div className="TryOut-container">
      <button className="TryOut-button">Close Preview</button>
      <h1 className="TryOut-headline">Headline</h1>
      <p>
        Bacon ipsum dolor amet salami ham hock jerky, cow shankle porchetta
        turkey andouille capicola venison bresaola. Tri-tip meatloaf swine
        picanha doner, ball tip tenderloin sirloin corned beef jowl turkey
        burgdoggen. Prosciutto shankle pastrami, chuck corned beef ham tongue
        jowl meatloaf chicken.{" "}
      </p>
      <div>
        <h2>A Highlight Box</h2>
        <p>
          Ground round brisket landjaeger bacon. Pork fatback corned beef pork
          chop chuck chicken shank prosciutto. Ribeye pastrami shank bacon
          andouille landjaeger, strip steak jowl meatloaf shoulder picanha.
        </p>
      </div>
      <button>Contained</button>
      <button>Outline</button>
      <button>Primary</button>
      <button>Secondary</button>
    </div>
  );
}
