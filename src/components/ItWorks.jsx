import { Box, Container, Grid, Heading } from "@chakra-ui/layout";
import { Button, Image, Link, Text } from "@chakra-ui/react";
import group from "../assets/group.svg";
import joinGroup from "../assets/joinagroup.svg";
import ticket from "../assets/ticket.svg";

const works = [
	{
		id: 1,
		image: joinGroup,
		title: "Join a group",
		text: "Do what you love, meet others who love it, find your community. The rest is history!",
	},
	{
		id: 2,
		image: group,
		title: "Find an event",
		text: "Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.",
	},
	{
		id: 3,
		image: ticket,
		title: "Start a group",
		text: "ou don’t have to be an expert to gather people together and explore shared interests.",
	},
];

export default function ItWorks() {
	return (
		<Container maxW="container.xl" py="20">
			<Box>
				<Heading align="center" as="h3" mx="auto" size="lg" pb="2">
					How meet up works
				</Heading>
				<Text align="center" maxW="600px" mx="auto" fontSize={"lg"} pb="10">
					Meet new people who share your interests through online and in-person events. It’s free to create an
					account.
				</Text>
			</Box>

			<Grid
				templateColumns={{
					sm: "repeat(2, 1fr)",
					base: "repeat(1, 1fr)",
					md: "repeat(3, 1fr)",
				}}
				gap="6"
			>
				{works.map((work) => (
					<Box key={work.id} mx="auto" align="center">
						<Image src={work.image} alt="Join group" />
						<Link color="blue.100">
							<Heading as="h5" size="md" pb="4">
								{work.title}
							</Heading>
						</Link>
						<Text>{work.text}</Text>
					</Box>
				))}
			</Grid>
			<Box align="center" mt="16">
				<Button _hover={{ background: "#0098ae" }} bg="teal" color="white" fontSize="md">
					<Link href="#" _hover={{ textDecoration: "none" }}>
						Join Meetup
					</Link>
				</Button>
			</Box>
		</Container>
	);
}
