import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="wrapper">
      <h1>Wisdom Tooth</h1>
      <p>
        <span>
          <strong>Proverbs</strong> , crystalline capsules of collective human
          experience, bear the weight of generations' trials and triumphs.
          Invaluable linguistic gems, reservoirs of wisdom. They are a testament
          to the past, a beacon of enlightenment for the present and a legacy of
          sagacity to shape the future. As we embrace these linguistic jewels,
          we unlock the door to eloquence, allowing the wisdom of ages past to
          flow through our words and resonate with all who listen.
        </span>{" "}
      </p>
      <p className="sm-screens">
        {" "}
        Unlock the door to eloquence, allowing the wisdom of ages past to flow
        through your words and resonate with all who listen.
      </p>
      <div className="proverb-setup-container">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
