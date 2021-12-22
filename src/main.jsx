import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import extendTheme from "./extendTheme";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={extendTheme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
