import { Container, VStack, Heading, Text, Button, HStack, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSpotify } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to The Rocking Band
        </Heading>
        <Image src="https://images.unsplash.com/photo-1477704080907-b04e4e2d3282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmd8ZW58MHx8fHwxNzE2NTQ3Mjk1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="The Rocking Band" borderRadius="md" boxShadow="lg" />
        <Text fontSize="lg" textAlign="center">
          Join us on our musical journey and experience the best rock music live!
        </Text>
        <Button colorScheme="teal" size="lg">
          Buy Tickets
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          <IconButton aria-label="Spotify" icon={<FaSpotify />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
