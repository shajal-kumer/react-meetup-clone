import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
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

export default function Banner() {
	return (
		<>
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

			<Container maxW="container.lg.xl">
				<Box d="flex" alignItems="center" py="20" flexDir="row">
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
					<Box w="50%">
						<Image src={illustration} alt="Illustration" w="100%" />
					</Box>
				</Box>
			</Container>
			<Container maxW="container.xl" mt={10}>
				<Grid templateColumns="repeat(3, 1fr)" gap={4}>
					<Box>
						<Image src={imageOne} alt="Image One" w="100%" borderRadius="lg" />
						<Button variant="link" mt={5} colorScheme="teal">
							Make new friends
							<Image src={rightArrow} ml={2} alt="rightArrow " w="100%" />
						</Button>
					</Box>
					<Box>
						<Image src={imageTwo} alt="Image One" w="100%" borderRadius="lg" />

						<Button rightIcon={<ArrowForwardIcon />} variant="link" mt={5} colorScheme="teal">
							Explore the outdores
						</Button>
					</Box>
					<Box>
						<Image src={imageThree} alt="Image One" w="100%" borderRadius="lg" />

						<Button variant="link" mt={5} colorScheme="teal">
							Connect over tech
							<Image src={rightArrow} ml={2} alt="rightArrow " w="100%" />
						</Button>
					</Box>
				</Grid>
			</Container>

			<Container maxW="container.xl" mt={10}>
				<Box display="flex" justifyContent="space-between" flexDirection="row" flexWrap="wrap">
					<Link href="#">
						<Badge
							variant="link"
							borderRadius="3xl"
							px={4}
							py={2}
							mr="4"
							mb="4"
							textTransform="normal"
							color="#ffffff"
							bg="blue.100"
						>
							Boost your career
						</Badge>
					</Link>
					<Link href="#">
						<Badge
							variant="link"
							borderRadius="3xl"
							px={4}
							py={2}
							mr="4"
							mb="4"
							textTransform="normal"
							color="#ffffff"
							bg="blue.100"
						>
							Find your zen
						</Badge>
					</Link>
					<Link href="#">
						<Badge
							variant="link"
							borderRadius="3xl"
							px={4}
							py={2}
							mr="4"
							mb="4"
							textTransform="normal"
							color="#ffffff"
							bg="blue.100"
						>
							Get moving
						</Badge>
					</Link>
					<Link href="#">
						<Badge
							variant="link"
							borderRadius="3xl"
							px={4}
							py={2}
							mr="4"
							mb="4"
							textTransform="normal"
							color="#ffffff"
							bg="blue.100"
						>
							Share language + culture
						</Badge>
					</Link>
					<Link href="#">
						<Badge
							variant="link"
							borderRadius="3xl"
							px={4}
							py={2}
							mr="4"
							mb="4"
							textTransform="normal"
							color="#ffffff"
							bg="blue.100"
						>
							Read with friends
						</Badge>
					</Link>
					<Link href="#">
						<Badge
							variant="link"
							borderRadius="3xl"
							px={4}
							py={2}
							mr="4"
							mb="4"
							textTransform="normal"
							color="#ffffff"
							bg="blue.100"
						>
							Write together
						</Badge>
					</Link>
					<Link href="#">
						<Badge
							className="badge-last-item"
							variant="link"
							borderRadius="3xl"
							px={4}
							py={2}
							mb="4"
							textTransform="normal"
							color="#ffffff"
							bg="blue.100"
						>
							Hone your craft
						</Badge>
					</Link>
				</Box>
			</Container>

			<Container maxW="container.xl" mt="20">
				<Grid templateColumns="repeat(2, 1fr)" gap={6}>
					<Box>
						<Heading as="h3" size="lg" mb="7">
							What do you want to do?
						</Heading>
						<Box d="flex" gap={2} alignItems="center" flexDirection="row" w="100%">
							<Box flexBasis="50%" w="50%" mr="2">
								<FormControl>
									<InputGroup>
										<InputLeftElement
											pointerEvents="none"
											children={<SearchIcon color="gray.300" />}
										/>
										<Input type="text" placeholder="Search for 'tennis'" />
									</InputGroup>
								</FormControl>
							</Box>
							<Box flexBasis="50%" w="50%" mr="2">
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
							<Link href="#">
								<Badge
									variant="link"
									borderRadius="3xl"
									px={4}
									py={2}
									mr="4"
									mb="4"
									textTransform="normal"
									color="#ffffff"
									bg="blue.100"
								>
									Boost your career
								</Badge>
							</Link>
							<Link href="#">
								<Badge
									variant="link"
									borderRadius="3xl"
									px={4}
									py={2}
									mr="4"
									mb="4"
									textTransform="normal"
									color="#ffffff"
									bg="blue.100"
								>
									Find your zen
								</Badge>
							</Link>
							<Link href="#">
								<Badge
									variant="link"
									borderRadius="3xl"
									px={4}
									py={2}
									mr="4"
									mb="4"
									textTransform="normal"
									color="#ffffff"
									bg="blue.100"
								>
									Get moving
								</Badge>
							</Link>
							<Link href="#">
								<Badge
									variant="link"
									borderRadius="3xl"
									px={4}
									py={2}
									mr="4"
									mb="4"
									textTransform="normal"
									color="#ffffff"
									bg="blue.100"
								>
									Share language + culture
								</Badge>
							</Link>
							<Link href="#">
								<Badge
									variant="link"
									borderRadius="3xl"
									px={4}
									py={2}
									mr="4"
									mb="4"
									textTransform="normal"
									color="#ffffff"
									bg="blue.100"
								>
									Read with friends
								</Badge>
							</Link>
							<Link href="#">
								<Badge
									variant="link"
									borderRadius="3xl"
									px={4}
									py={2}
									mr="4"
									mb="4"
									textTransform="normal"
									color="#ffffff"
									bg="blue.100"
								>
									Write together
								</Badge>
							</Link>
							<Link href="#">
								<Badge
									variant="link"
									borderRadius="3xl"
									px={4}
									py={2}
									mb="4"
									textTransform="normal"
									color="#ffffff"
									bg="blue.100"
								>
									Hone your craft
								</Badge>
							</Link>
						</Box>
					</Box>
				</Grid>
			</Container>
		</>
	);
}
