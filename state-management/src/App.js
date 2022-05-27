import StarRating from "./StarRating.js";

function App() {
  return (
    <div className="App">
      <StarRating
        styles={{ backgroundColor: "lightblue" }}
        onDoubleClick={() => alert("double click")}
      />
    </div>
  );
}

export default App;
