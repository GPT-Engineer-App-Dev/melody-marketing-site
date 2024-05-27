import { Container, VStack, Heading, Text, Button, HStack, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSpotify } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center" color="brand.400">
          Welcome to The Folk Harmony
        </Heading>
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb2xrJTIwYmFuZHxlbnwwfHx8fDE3MTY1NDcyOTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="The Folk Harmony" borderRadius="md" boxShadow="lg" />
        <Text fontSize="lg" textAlign="center" color="brand.300">
          Join us on our musical journey and experience the best folk music live!
        </Text>
        <Button colorScheme="brand" size="lg">
          Get Tickets
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" color="brand.500" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" color="brand.400" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" color="brand.300" />
          <IconButton aria-label="Spotify" icon={<FaSpotify />} size="lg" color="brand.200" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
