import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import adrioidApp from "../assets/android-app-download.svg";
import leftPhone from "../assets/device-left.webp";
import rightPhone from "../assets/device-right.webp";
import iosApp from "../assets/ios-app-download.svg";
import logo from "../assets/meetup-logo.svg";

export default function Connected() {
	return (
		<Container maxW={"container.xl"} py="20">
			<Flex justifyContent={{ md: "space-between", base: "center" }}>
				<Box display={{ base: "none", md: "block" }}>
					<Image src={leftPhone} />
				</Box>
				<Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"} gap={5}>
					<Image src={logo} />
					<Heading textAlign={"center"}>
						Stay connected <br />
						Download the app
					</Heading>

					<Flex justifyContent={"space-between"} w={"100%"}>
						<Image src={adrioidApp} />
						<Image src={iosApp} />
					</Flex>
				</Flex>
				<Box display={{ base: "none", md: "block" }}>
					<Image src={rightPhone} />
				</Box>
			</Flex>
		</Container>
	);
}
