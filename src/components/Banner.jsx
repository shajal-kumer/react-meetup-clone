import { SearchIcon } from "@chakra-ui/icons";
import { Box, Container, Grid, Heading } from "@chakra-ui/layout";
import {
	Badge,
	Button,
	FormControl,
	Icon,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import brandLogo from "../assets/brand-logo.svg";
import illustration from "../assets/illustration.svg";
import imageOne from "../assets/image-one.jpg";
import imageThree from "../assets/image-three.jpg";
import imageTwo from "../assets/image-two.jpg";
import rightArrow from "../assets/right-arrow.svg";

const tagsOne = [
	"boost your career",
	"find your zen",
	"get moving",
	"share language + culture",
	"read with friends",
	"write together",
	"Hone your craft",
];
const tagsTwo = ["starting soon", "today", "Tomorrow", "This week", "online", "In person", "Trending near you"];

const categories = [
	{
		id: 1,
		image: imageOne,
		title: "Make new friends",
	},
	{
		id: 2,
		image: imageTwo,
		title: "Explore the outdore",
	},
	{
		id: 3,
		image: imageThree,
		title: "Connect over tech",
	},
];

export default function Banner() {
	return (
		<Box className="header">
			<header>
				<Box d="flex" alignItems="center" justifyContent="space-between" ml={6} mr={6}>
					<Link href="#">
						<Image src={brandLogo} boxSize="90px" />
					</Link>
					<Box>
						<Button pr="3" colorScheme="gray.600" fontSize="sm" variant="link">
							Log in
						</Button>
						<Button colorScheme="gray.600" fontSize="sm" variant="link">
							Sign Up
						</Button>
					</Box>
				</Box>
			</header>

			<Container maxW="container.xl">
				<Box d="flex" alignItems="center" py="20" flexDir={{ base: "column", md: "row" }}>
					<Box mr="6">
						<Heading as="h1" size="2xl">
							Celebrating 20 years of real connections on Meetup
						</Heading>

						<Text mt="6" fontWeight="medium">
							Whatever you’re looking to do this year, Meetup can help. For 20 years, people have turned
							to Meetup to meet people, make friends, find support, grow a business, and explore their
							interests. Thousands of events are happening every day—join the fun.
						</Text>
					</Box>
					<Box w="100%" mt={{ base: 8, sm: "none" }}>
						<Image src={illustration} alt="Illustration" w="100%" />
					</Box>
				</Box>
			</Container>
			<Container maxW="container.xl" mt={10}>
				<Grid
					templateColumns={{
						md: "repeat(3, 1fr)",
						base: "repeat(1, 1fr)",
					}}
					gap={6}
				>
					{categories.map((category) => (
						<Link key={category.id} href="#" _hover={{ opacity: 0.8 }}>
							<Image src={category.image} alt="Image One" w="100%" borderRadius="lg" />
							<Button variant="link" mt={5} colorScheme="teal">
								{category.title}
								<Image src={rightArrow} ml={2} alt="rightArrow " w="100%" />
							</Button>
						</Link>
					))}
				</Grid>
			</Container>

			<Container maxW="container.xl" mt={12}>
				<Box
					display="flex"
					justifyContent={{ base: "flex-start", md: "space-between" }}
					flexDirection="row"
					flexWrap="wrap"
				>
					{tagsOne.map((tag) => (
						<Link href="#" key={tag}>
							<Badge
								variant="link"
								borderRadius="3xl"
								px={5}
								py={{ base: 2, sm: 3 }}
								mr="4"
								mb="4"
								textTransform="normal"
								color="#ffffff"
								bg="blue.100"
								fontSize={"sm"}
							>
								{tag}
							</Badge>
						</Link>
					))}
				</Box>
			</Container>

			<Container maxW="container.xl" mt={{ base: 10, sm: 20 }}>
				<Grid
					templateColumns={{
						md: "repeat(2, 1fr)",
						base: "repeat(1, 1fr)",
					}}
					gap={16}
				>
					<Box>
						<Heading as="h3" size="lg" mb="7">
							What do you want to do?
						</Heading>
						<Box
							d="flex"
							gap={2}
							alignItems="center"
							flexDirection={{ base: "column", sm: "row" }}
							w="100%"
						>
							<FormControl>
								<InputGroup>
									<InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
									<Input type="text" placeholder="Search for 'tennis'" />
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										children={<Icon as={FaMapMarkerAlt} color="gray.300" />}
									/>
									<Input type="text" placeholder="Search for 'tennis'" />
								</InputGroup>
							</FormControl>
						</Box>
						<Button
							_hover={{ opacity: "0.8" }}
							mt="5"
							pt="6"
							pb="6"
							w="100%"
							color="#ffffff"
							bg="red.400"
							fontSize="xl"
							fontWeight="extrabold"
						>
							Search
						</Button>
					</Box>
					<Box>
						<Heading as="h3" size="lg" mb="7" display={{ sm: "none", md: "block" }}>
							See what's happening
						</Heading>
						<Box display="flex" justifyContent="flex-start" flexDirection="row" flexWrap="wrap">
							{tagsTwo.map((tag) => (
								<Link href="#" key={tag}>
									<Badge
										variant="link"
										borderRadius="3xl"
										px={5}
										py={{ base: 2, sm: 3 }}
										mr="4"
										mb="4"
										textTransform="normal"
										color="#ffffff"
										bg="blue.100"
										fontSize={"sm"}
									>
										{tag.charAt(0).toUpperCase() + tag.slice(1)}
									</Badge>
								</Link>
							))}
						</Box>
					</Box>
				</Grid>
			</Container>
		</Box>
	);
}
