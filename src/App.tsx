import Banner from "./assets/Components/Banner";
import Physics from "./assets/Components/Physics";

function App() {
  return (
    <>
      <div>
        <Banner />
        <div className=" p-14">
          <Physics />
        </div>
        <div className=" p-10">
          <Physics />
        </div>
      </div>
    </>
  );
}

export default App;
