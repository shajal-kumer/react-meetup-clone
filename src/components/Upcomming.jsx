import { Icon } from "@chakra-ui/icons";
import { Box, Container, Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";
import { IoShareOutline } from "react-icons/io5";
import UpcommingFour from "../assets/upcomming-four.jpg";
import Upcommingone from "../assets/upcomming-one.png";
import Upcommingthree from "../assets/upcomming-three.jpg";
import UpcommingTwo from "../assets/upcomming-two.jpg";

const events = [
	{
		id: 1,
		image: Upcommingone,
		time: "MON, JAN 3 @ 6:00 AM BST",
		title: "New York & New Jersey Virtual Dating",
		text: "New York & New Jersey",
		numberOfAttendence: 134,
		attendenceImages: [
			"https://www.dropbox.com/s/nd8z3hxuo3ahauk/segun_adebayo.jpg?dl=1",
			"https://www.dropbox.com/s/nd8z3hxuo3ahauk/segun_adebayo.jpg?dl=1",
			"https://www.dropbox.com/s/nd8z3hxuo3ahauk/segun_adebayo.jpg?dl=1",
		],
	},
	{
		id: 2,
		image: UpcommingTwo,
		time: "MON, JAN 3 @ 6:00 AM BST",
		title: "New Jersey Virtual Dating",
		text: "New Jersey Matchmaking Dating",
		numberOfAttendence: 56,
		attendenceImages: [
			"https://www.dropbox.com/s/nd8z3hxuo3ahauk/segun_adebayo.jpg?dl=1",
			"https://www.dropbox.com/s/nd8z3hxuo3ahauk/segun_adebayo.jpg?dl=1",
			"https://www.dropbox.com/s/nd8z3hxuo3ahauk/segun_adebayo.jpg?dl=1",
		],
	},
	{
		id: 3,
		image: Upcommingthree,
		time: "SUN, JAN 9 @ 1:00 AM BST",
		title: "New York Single Black Men White Women Interracial Dating",
		text: "New York Black White Interracial",
		numberOfAttendence: 29,
		attendenceImages: [
			"https://www.dropbox.com/s/nd8z3hxuo3ahauk/segun_adebayo.jpg?dl=1",
			"https://www.dropbox.com/s/nd8z3hxuo3ahauk/segun_adebayo.jpg?dl=1",
			"https://www.dropbox.com/s/nd8z3hxuo3ahauk/segun_adebayo.jpg?dl=1",
		],
	},
	{
		id: 4,
		image: UpcommingFour,
		time: "WED, DEC 29 @ 6:00 AM BST",
		title: "Jupiter in Pisces",
		text: "The Big Apple Astrology Meetup",
		numberOfAttendence: 88,
		attendenceImages: [
			"https://www.dropbox.com/s/nd8z3hxuo3ahauk/segun_adebayo.jpg?dl=1",
			"https://www.dropbox.com/s/nd8z3hxuo3ahauk/segun_adebayo.jpg?dl=1",
			"https://www.dropbox.com/s/nd8z3hxuo3ahauk/segun_adebayo.jpg?dl=1",
		],
	},
];

export default function Upcomming() {
	return (
		<Container maxW="container.xl" py={10}>
			<Flex justifyContent="space-between" alignItems="center" mb="8">
				<Heading as="h3" size="lg">
					Upcoming online events
				</Heading>
				<Link fontWeight="semibold" color="teal.500">
					Explore more events
				</Link>
			</Flex>

			<Grid
				templateColumns={{
					sm: "repeat(2, 1fr)",
					md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
					xl: "repeat(4, 1fr)",
					base: "repeat(1, 1fr)",
				}}
				gap={6}
			>
				{events.map((event) => (
					<Box key={event.id} width="100%" pos={"relative"} pb="35px">
						<Box position="relative">
							<Image borderRadius={"md"} position="relative" w="100%" src={event.image} alt="brand" />
							<Box
								position="absolute"
								d="flex"
								alignItems="center"
								borderRadius="5px"
								top="0"
								background="#ffffff"
								fontSize="sm"
								m="2"
								px="3"
								py="1"
							>
								<Icon as={IoShareOutline} w={4} h={4} />
								<Text ml="2" color="#757575" fontWeight="semibold">
									Online Event
								</Text>
							</Box>
						</Box>
						<Box p={3}>
							<Box mt="3" color="#877457" fontWeight="semibold">
								{event.time}
							</Box>
							<Heading alignItems="center" as="h3" mt="1" fontweights="black" size="md">
								{event.title}
							</Heading>
							<Text my="3" size="xs" color={"rgba(117,117,117,0.8)"}>
								{event.text}
							</Text>
							<Box
								pos={"absolute"}
								left={0}
								bottom={0}
								right={0}
								pl={3}
								d="flex"
								alignItems="center"
								justifyContent="space-between"
							>
								<Box d="flex" alignItems="center">
									{event.attendenceImages.map((img, index) => (
										<Image
											key={index}
											borderRadius="full"
											border="1px"
											borderColor="gray.200"
											boxSize="35px"
											mr="-8px"
											src={img}
										/>
									))}

									<Box as="span" ml="16px" color="#757575">
										{event.numberOfAttendence}
									</Box>
								</Box>
								<Box>
									<Icon as={IoShareOutline} w={6} h={6} />
								</Box>
							</Box>
						</Box>
					</Box>
				))}
			</Grid>
		</Container>
	);
}
