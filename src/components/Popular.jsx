import { Icon } from "@chakra-ui/icons";
import { Box, Container, Divider, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
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
	{
		id: 4,
		image: popularImage,
		title: "Online Improve",
		date: "Sat, Aug 14 @ 9:45 PM NPT",
		text: "English Communication",
	},
	{
		id: 5,
		image: popularImage,
		title: "Leap - Conversations for Curious Minds",
		date: "Sat, Aug 15 @ 9:45 PM NPT",
		text: "English Communication",
	},
	{
		id: 6,
		image: popularImage,
		title: "New York History and Culture - Experience NY and the World",
		date: "Sat, Aug 14 @ 9:45 PM NPT",
		text: "English Communication",
	},
];

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<Icon as={GrFormNext} color="black" />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<Icon as={GrFormPrevious} color="black" />
		</div>
	);
}

export default function Popular() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
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

			<Slider {...settings} className="popular-slider-grid">
				{data.map((el) => (
					<Box key={el.id} p="4" border="1px" borderColor="#ddd" borderRadius={"lg"}>
						<Flex alignItems={"center"} gap={5} mb={4}>
							<Image borderRadius={"lg"} src={popularImage} boxSize={"60px"} />

							<Heading as="h3" fontSize={"22px"}>
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
			</Slider>
		</Container>
	);
}
