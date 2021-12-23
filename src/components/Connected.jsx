import { Box, Container, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import adrioidApp from "../assets/android-app-download.svg";
import leftPhone from "../assets/device-left.webp";
import rightPhone from "../assets/device-right.webp";
import iosApp from "../assets/ios-app-download.svg";
import logo from "../assets/meetup-logo.svg";

export default function Connected() {
	return (
		<Container maxW={"container.xl"} my="20">
			<Flex justifyContent={"space-between"}>
				<Box>
					<Image src={leftPhone} />
				</Box>
				<VStack justifyContent={"center"} alignItems={"center"} spacing={"5"}>
					<Image src={logo} />
					<Heading textAlign={"center"}>
						Stay connected <br />
						Download the app
					</Heading>

					<Flex justifyContent={"space-between"} w={"100%"}>
						<Image src={adrioidApp} />
						<Image src={iosApp} />
					</Flex>
				</VStack>
				<Box>
					<Image src={rightPhone} />
				</Box>
			</Flex>
		</Container>
	);
}
