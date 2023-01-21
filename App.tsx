import { Home } from "./src/screens/Home";
import { StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";
import fontsLoaded from "./src/components/LoadFonts";

export default function App() {
	if (!fontsLoaded) {
		return <Loading />;
	}

	return (
		<>
			<Home />
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
		</>
	);
}
