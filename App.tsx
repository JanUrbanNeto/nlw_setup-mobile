import "./src/lib/dayjs";
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";
import fontsLoaded from "./src/components/LoadFonts";

export default function App() {
	if (!fontsLoaded) {
		return <Loading />;
	}

	return (
		<>
			<Routes />
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
		</>
	);
}
