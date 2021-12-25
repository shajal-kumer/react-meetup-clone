import { Box, Container, Divider, Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";
import popularImage from "../assets/popular-image.jpg";

const data = [
	{
		id: 1,
		image: popularImage,
		title: "Online Improve",
		date: "Sat, Aug 14 @ 9:45 PM NPT",
		text: "English Communication",
	},
	{
		id: 2,
		image: popularImage,
		title: "Leap - Conversations for Curious Minds",
		date: "Sat, Aug 15 @ 9:45 PM NPT",
		text: "English Communication",
	},
	{
		id: 3,
		image: popularImage,
		title: "New York History and Culture - Experience NY and the World",
		date: "Sat, Aug 14 @ 9:45 PM NPT",
		text: "English Communication",
	},
];

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

			<Grid templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)", null, null, null]} gap={6}>
				{data.map((el) => (
					<Box key={el.id} p="4" border="1px" borderColor="#ddd" borderRadius={"lg"}>
						<Flex alignItems={"center"} gap={5} mb={4}>
							<Image borderRadius={"lg"} src={popularImage} boxSize={"60px"} />

							<Heading as="h3" fontSize={{ base: "22px", sm: "26px" }}>
								{el.title}
							</Heading>
						</Flex>
						<Divider mb="3" />
						<Text textTransform={"uppercase"} color="#877457" fontWeight="semibold">
							{el.date}
						</Text>
						<Text>{el.text}</Text>
					</Box>
				))}
			</Grid>
		</Container>
	);
}
