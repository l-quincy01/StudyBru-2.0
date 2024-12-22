import { registerRootComponent } from "expo";
import { PortalHost } from "@rn-primitives/portal";

import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./context/AuthContext";

import "../../global.css";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

//theming for RN Paper
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "white",
    secondary: "black",
  },
};

function App() {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
      <PortalHost />
    </AuthProvider>
  );
}

registerRootComponent(App);
