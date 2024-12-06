import { registerRootComponent } from "expo";

import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "../context/AuthContext";
import "../../global.css";

function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

registerRootComponent(App);
