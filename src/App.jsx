import Banner from "./components/Banner";
import Connected from "./components/Connected";
import FooterBottom from "./components/FooterBottom";
import ItWorks from "./components/ItWorks";
import Popular from "./components/Popular";
import Stories from "./components/Stories";
import Upcomming from "./components/Upcomming";

function App() {
	return (
		<div className="App">
			<Banner />
			<ItWorks />
			<Upcomming />
			<Popular />
			<Connected />
			<Stories />
			<FooterBottom />
		</div>
	);
}

export default App;
