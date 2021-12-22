import { Container, Flex, Grid, Heading, Link } from "@chakra-ui/react";

export default function Upcomming() {
	return (
		<Container maxW="container.lg">
			<Flex justifyContent="space-between" alignItems="center">
				<Heading as="h3" size="lg">
					Upcoming online events
				</Heading>
				<Link fontWeight="semibold" color="teal.500">
					Explore more events
				</Link>
			</Flex>

			<Grid></Grid>
		</Container>
	);
}
