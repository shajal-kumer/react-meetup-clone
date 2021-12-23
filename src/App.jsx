import Banner from "./components/Banner";
import Connected from "./components/Connected";
import ItWorks from "./components/ItWorks";
import Popular from "./components/Popular";
import Upcomming from "./components/Upcomming";

function App() {
	return (
		<div className="App">
			<Banner />
			<ItWorks />
			<Upcomming />
			<Popular />
			<Connected />
		</div>
	);
}

export default App;
