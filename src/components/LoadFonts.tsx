import * as Font from 'expo-font'
import {
	useFonts,
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

const fontsLoaded = async () => {
   await Font.loadAsync({
		Inter_400Regular,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_800ExtraBold,
	});
}

export default fontsLoaded