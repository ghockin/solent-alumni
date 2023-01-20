import "../card.css";
import "../flip-transition.css";

function cardExuser({onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">Whether it’s been days or decades since you left us, or you’re soon to don your cap and gown, things are constantly changing at Solent. We’re always innovating, but we’re also immensely proud of our heritage. And that means you.
Remember to keep us up-to-date with any changes to your details to continue receiving the latest news, events and opportunities.
If you undertook your course at Warsash Maritime School, head over to your Warsash alumni community here.
Stay connected, stay Solent for life.</div>
      <div className="card-front">Update Details</div>
    </div>
  );
}

export default cardExuser;
