import {
	Box,
	Button,
	Container,
	Divider,
	Flex,
	Grid,
	Heading,
	Icon,
	Image,
	Link,
	List,
	ListItem,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import adrioidApp from "../assets/android-app-download.svg";
import iosApp from "../assets/ios-app-download.svg";

export default function FooterBottom() {
	return (
		<Box bg="#212121" pt="5" pb={10} color={"#fff"} mt={10}>
			<Container maxW={"container.xl"}>
				<Flex alignItems={{ base: "center" }} flexDir={{ base: "column", sm: "row" }}>
					<Box fontWeight={"bold"} fontSize={"lg"} mr={{ sm: 4 }}>
						Create your own Meetup group.
					</Box>
					<Button
						mt={{ base: 5, sm: 0 }}
						borderWidth={2}
						variant={"outline"}
						color={"#fff"}
						borderColor={"#fff"}
					>
						Get Started
					</Button>
				</Flex>

				<Divider mt={5} mb={5} />

				<Grid
					templateColumns={{
						base: "repeat(1, 1fr)",
						sm: "repeat(2, 1fr)",
						md: "repeat(3, 1fr)",
					}}
					gap={{ base: 6, sm: 0 }}
				>
					<Box>
						<Heading size="sm">Your Account</Heading>

						<List mt="4" spacing={2}>
							<ListItem>
								<Link color={"#A2A2A2"}> Sign up </Link>
							</ListItem>
							<ListItem>
								<Link color={"#A2A2A2"}> Log in </Link>
							</ListItem>
							<ListItem>
								<Link color={"#A2A2A2"}> Help </Link>
							</ListItem>
						</List>
					</Box>
					<Box>
						<Heading size="sm">Discover</Heading>
						<List mt="4" spacing={2}>
							<ListItem>
								<Link color="#A2A2A2">Groups</Link>
							</ListItem>
							<ListItem>
								<Link color="#A2A2A2">Calendar</Link>
							</ListItem>
							<ListItem>
								<Link color="#A2A2A2">Topics</Link>
							</ListItem>
							<ListItem>
								<Link color="#A2A2A2">Cities</Link>
							</ListItem>
							<ListItem>
								<Link color="#A2A2A2">Online Events</Link>
							</ListItem>
							<ListItem>
								<Link color="#A2A2A2">Local Guides</Link>
							</ListItem>
						</List>
					</Box>

					<Box>
						<Heading size="sm">Meetup</Heading>
						<List mt="4" spacing={2}>
							<ListItem>
								<Link color="#A2A2A2">About</Link>
							</ListItem>
							<ListItem>
								<Link color="#A2A2A2">Blog</Link>
							</ListItem>
							<ListItem>
								<Link color="#A2A2A2">Meetup Pro</Link>
							</ListItem>
							<ListItem>
								<Link color="#A2A2A2">Carrers</Link>
							</ListItem>
							<ListItem>
								<Link color="#A2A2A2">Apps</Link>
							</ListItem>
						</List>
					</Box>
				</Grid>

				<Flex direction={"column"} alignItems={"flex-start"} mt="10" mb="10">
					<Box mb={5}>Follow us</Box>

					<Flex justifyContent={"space-between"} w={"100%"} flexWrap={"wrap"}>
						<Flex gap={6}>
							<Link>
								<Icon w="25px" h="25px" as={FaFacebook} />
							</Link>
							<Link>
								<Icon w="25px" h="25px" as={FaTwitter} />
							</Link>
							<Link>
								<Icon w="25px" h="25px" as={FaYoutube} />
							</Link>
							<Link>
								<Icon w="25px" h="25px" as={FaInstagram} />
							</Link>
						</Flex>

						<Flex mt={{ base: 5, sm: 0, md: 0 }}>
							<Image src={adrioidApp} mr={{ base: 1, sm: 2 }} />
							<Image src={iosApp} />
						</Flex>
					</Flex>
				</Flex>

				<Flex flexWrap={"wrap"}>
					<Box as="span" mr="5" fontSize="sm" mb={{ base: 2, sm: 2 }}>
						© 2021 Meetup
					</Box>
					<Link mr="5" fontSize="sm" color="#A2A2A2">
						Terms of Service
					</Link>
					<Link mr="5" fontSize="sm" color="#A2A2A2">
						Privacy Policy
					</Link>
					<Link mr="5" fontSize="sm" color="#A2A2A2">
						Cookie Policy
					</Link>
					<Link mr="5" fontSize="sm" color="#A2A2A2">
						Help
					</Link>
				</Flex>
			</Container>
		</Box>
	);
}
