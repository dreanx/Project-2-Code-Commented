import "./App.css";
import Search from "@components/search/search";

function App() {

  // we received the searchData from search component, and transform it into 2 string constants
  // representing the GPS Latitudes (lat) and Longitudes (lon) of the searched city
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    console.warn(lat);
    console.warn(lon);
  };

  return (
    <div>
      //We import the Search Component in the App
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;