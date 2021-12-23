import { Box, Container, Divider, Flex, Grid, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import popularImage from "../assets/popular-image.jpg";

export default function Popular() {
	return (
		<Container maxW="container.xl" my="20">
			<Flex justifyContent="space-between" alignItems="center" mb="8">
				<Heading as="h3" size="lg">
					Popular group
				</Heading>
				<Link fontWeight="semibold" color="teal.500">
					Explore more groups
				</Link>
			</Flex>

			<Grid templateColumns="repeat(3, 1fr)" gap={6}>
				<VStack
					spacing={"none"}
					p="4"
					border="1px"
					borderColor="#ddd"
					borderRadius={"lg"}
					alignItems={"flex-start"}
				>
					<Flex alignItems={"center"} gap={5}>
						<Image borderRadius={"lg"} src={popularImage} boxSize={"60px"} />

						<Heading as="h3" fontSize={"26px"}>
							Online Improv
						</Heading>
					</Flex>
					<Divider mt="4" />
					<Text mt="3" textTransform={"uppercase"} color="#877457" fontWeight="semibold">
						Sat, Aug 14 @ 9:45 PM NPT
					</Text>
					<Text>English Communication</Text>
				</VStack>
				<Box p="4" border="1px" borderColor="#ddd" borderRadius={"lg"}>
					<Flex alignItems={"center"} gap={5} mb={4}>
						<Image borderRadius={"lg"} src={popularImage} boxSize={"60px"} />

						<Heading as="h3" fontSize={"26px"}>
							Leap - Conversations for Curious Minds
						</Heading>
					</Flex>
					<Divider mb="3" />
					<Text textTransform={"uppercase"} color="#877457" fontWeight="semibold">
						Sat, Aug 14 @ 9:45 PM NPT
					</Text>
					<Text>English Communication</Text>
				</Box>
				<Box p="4" border="1px" borderColor="#ddd" borderRadius={"lg"}>
					<Flex alignItems={"center"} gap={5} mb={4}>
						<Image borderRadius={"lg"} src={popularImage} boxSize={"60px"} />

						<Heading as="h3" fontSize={"26px"}>
							New York History and Culture - Experience NY and the World
						</Heading>
					</Flex>
					<Divider mb="3" />
					<Text textTransform={"uppercase"} color="#877457" fontWeight="semibold">
						Sat, Aug 14 @ 9:45 PM NPT
					</Text>
					<Text>English Communication</Text>
				</Box>
			</Grid>
		</Container>
	);
}
