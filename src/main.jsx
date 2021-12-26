import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
