import { Container, VStack, Heading, Text, Button, HStack, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSpotify } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center" color="gray.700">
          Welcome to The Rock Legends
        </Heading>
        <Image src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb2xrJTIwYmFuZHxlbnwwfHx8fDE3MTY1NDcyOTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="The Rock Legends" borderRadius="md" boxShadow="lg" />
        <Text fontSize="lg" textAlign="center" color="gray.500">
          Join us on our musical journey and experience the best rock music live!
        </Text>
        <Button colorScheme="gray" size="lg">
          Get Tickets
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" color="gray.700" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" color="gray.600" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" color="gray.500" />
          <IconButton aria-label="Spotify" icon={<FaSpotify />} size="lg" color="gray.400" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
