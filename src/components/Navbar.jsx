import { Box, Flex, Link, Spacer, IconButton } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="xl">
          MySite
        </Link>
        <Spacer />
        <IconButton as={RouterLink} to="/" icon={<FaHome />} colorScheme="teal" variant="outline" aria-label="Home" />
      </Flex>
    </Box>
  );
}

export default Navbar;
