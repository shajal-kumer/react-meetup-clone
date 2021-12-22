import { Box, Container, Grid, Heading } from "@chakra-ui/layout";
import { Button, Image, Link, Text } from "@chakra-ui/react";
import group from "../assets/group.svg";
import joinGroup from "../assets/joinagroup.svg";
import ticket from "../assets/ticket.svg";

export default function ItWorks() {
	return (
		<Container maxW="container.lg" my="20">
			<Box>
				<Heading align="center" as="h3" mx="auto" size="lg" pb="2">
					How meet up works
				</Heading>
				<Text align="center" maxW="700px" mx="auto" pb="10">
					Meet new people who share your interests through online and in-person events. It’s free to create an
					account.
				</Text>
			</Box>

			<Grid templateColumns="repeat(3, 1fr)" gap="6">
				<Box mx="auto" align="center">
					<Image src={joinGroup} alt="Join group" />
					<Link color="blue.100">
						<Heading as="h5" size="md" pb="4">
							Join a Group
						</Heading>
					</Link>
					<Text>Do what you love, meet others who love it, find your community. The rest is history!</Text>
				</Box>
				<Box mx="auto" align="center">
					<Image src={ticket} alt="Join group" />
					<Link color="blue.100">
						<Heading as="h5" size="md" pb="4">
							Find an event
						</Heading>
					</Link>
					<Text>Do what you love, meet others who love it, find your community. The rest is history!</Text>
				</Box>
				<Box mx="auto" align="center">
					<Image src={group} alt="Join group" />
					<Link color="blue.100">
						<Heading as="h5" size="md" pb="4">
							Start a group
						</Heading>
					</Link>
					<Text>Do what you love, meet others who love it, find your community. The rest is history!</Text>
				</Box>
			</Grid>
			<Box align="center" mt="16">
				<Button _hover={{ background: "#0098ae" }} bg="teal" color="white" fontSize="sm">
					<Link href="#" _hover={{ textDecoration: "none" }}>
						Join Meetup
					</Link>
				</Button>
			</Box>
		</Container>
	);
}
