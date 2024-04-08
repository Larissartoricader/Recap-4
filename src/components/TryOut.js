import "./TryOut.css";

export default function TryOut({ showTryOut, onCloseTryOut }) {
  return (
    <div className="TryOut-container">
      <button className="TryOut-button" onClick={onCloseTryOut}>
        {showTryOut ? "Close Preview" : "Try Out"}
      </button>
      <div className="TryOut-box">
        <h1 className="TryOut-headline">Headline</h1>
        <p className="TryOut-txt">
          Bacon ipsum dolor amet salami ham hock jerky, cow shankle porchetta
          turkey andouille capicola venison bresaola. Tri-tip meatloaf swine
          picanha doner, ball tip tenderloin sirloin corned beef jowl turkey
          burgdoggen. Prosciutto shankle pastrami, chuck corned beef ham tongue
          jowl meatloaf chicken.{" "}
        </p>
        <div className="TryOut-highlightbox">
          <h2 className="TryOut-highlightbox-headline">A Highlight Box</h2>
          <p className="TryOut-highlightbox-txt">
            Ground round brisket landjaeger bacon. Pork fatback corned beef pork
            chop chuck chicken shank prosciutto. Ribeye pastrami shank bacon
            andouille landjaeger, strip steak jowl meatloaf shoulder picanha.
          </p>
        </div>
        <div className="TryOut-buttons-box">
          <button className="TryOut-button_test">Contained</button>
          <button className="TryOut-button_test">Outline</button>
          <button className="TryOut-button_test">Primary</button>
          <button className="TryOut-button_test">Secondary</button>
        </div>
      </div>
    </div>
  );
}
