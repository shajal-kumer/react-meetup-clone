import { Box, Container, Grid, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import storyOne from "../assets/story-one.jpg";
import storyThree from "../assets/story-three.jpg";
import storyTwo from "../assets/story-two.jpg";

const stories = [
	{
		id: 1,
		image: storyOne,
		title: "Three Ways To Make Coworker Friendships While Working From Home",
		text: "Work friendships don’t need to fade just because you’re working remotely. Here are three fun ways you can get to know your colleagues.",
	},
	{
		id: 2,
		image: storyTwo,
		title: "Five Ways to Feel More Connected",
		text: "Since Meetup began nearly 20 years ago, we’ve fostered connections between more than 50 million people in 190 countries worldwide. Here are five simple strategies to help you feel more connected and improve your wellbeing.",
	},
	{
		id: 3,
		image: storyThree,
		title: "How To Live Your Best Social Life",
		text: "Social interaction is a key part of any healthy lifestyle. Discover all different kinds of events that’ll help you maintain a fun and fulfilling social life.",
	},
];

export default function Stories() {
	return (
		<Container maxW="container.xl" py="20">
			<VStack justifyContent="center" mb="8">
				<Heading as="h2" size="xl">
					Stories from Meetup
				</Heading>
				<Text align="center" maxW="700px" mx="auto" fontSize={"lg"} pb="10">
					People on Meetup have fostered community, learned new skills, started businesses, and made life-long
					friends. Learn how.
				</Text>
			</VStack>

			<Grid templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
				{stories.map((story) => (
					<VStack key={story.id} spacing={"none"} alignItems={"flex-start"}>
						<Box h="200px" w="100%" mb={3}>
							<Image borderRadius={"xl"} src={story.image} boxSize={"100%"} objectFit={"cover"} />
						</Box>

						<Heading fontSize={"24px"} mt="3">
							<Link href="#">{story.title}</Link>
						</Heading>

						<Text mt="4">{story.text}</Text>
					</VStack>
				))}
			</Grid>
		</Container>
	);
}
