import Banner from "./assets/Components/Banner";
import Physics from "./assets/Components/Physics";

function App() {
  return (
    <>
      <div className=" w-screen">
        <Banner />
        <div className=" p-14">
          <Physics />
        </div>
        <div className=" p-14">
          <Physics />
        </div>
      </div>
    </>
  );
}

export default App;
