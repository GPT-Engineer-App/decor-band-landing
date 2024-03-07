import React from "react";
import { Box, Center, Heading, Text, Button, VStack, HStack, Image, Container, Link } from "@chakra-ui/react";
import { FaMusic, FaTicketAlt, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center" fontSize="xl">
        <VStack spacing={8} paddingTop="40px">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1466695108335-44674aa2058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwZ3JvdXAlMjBwaG90b3xlbnwwfHx8fDE3MDk3NzE1MTd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="The Band" />
          <Heading as="h1" size="2xl" fontWeight="bold">
            The HomeTones
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Join us on our "Decorate with Harmony" Tour 2023!
          </Text>
          <Button size="lg" colorScheme="teal" rightIcon={<FaTicketAlt />} onClick={() => window.alert("Redirect to ticket purchase")}>
            Buy Tickets
          </Button>
        </VStack>
      </Box>

      <Box paddingY="60px">
        <Center>
          <Heading as="h2" size="xl" marginBottom="24px">
            Upcoming Shows
          </Heading>
        </Center>
        <HStack justifyContent="center" spacing={8}>
          <VStack alignItems="center" spacing={4}>
            <FaMusic fontSize="3rem" />
            <Text fontWeight="semibold">New York</Text>
            <Text color="gray.500">June 10, 2023</Text>
          </VStack>
          <VStack alignItems="center" spacing={4}>
            <FaMusic fontSize="3rem" />
            <Text fontWeight="semibold">Los Angeles</Text>
            <Text color="gray.500">June 20, 2023</Text>
          </VStack>
          <VStack alignItems="center" spacing={4}>
            <FaMusic fontSize="3rem" />
            <Text fontWeight="semibold">Chicago</Text>
            <Text color="gray.500">June 30, 2023</Text>
          </VStack>
        </HStack>
      </Box>

      <Box paddingY="40px" backgroundColor="gray.100">
        <VStack spacing={4}>
          <Heading as="h3" size="lg">
            Follow Us
          </Heading>
          <HStack spacing={6}>
            <Link href="https://instagram.com" isExternal>
              <FaInstagram fontSize="2rem" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter fontSize="2rem" />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <FaFacebookF fontSize="2rem" />
            </Link>
          </HStack>
        </VStack>
      </Box>

      <Box paddingY="40px">
        <Center>
          <VStack spacing={2}>
            <Text fontSize="sm">© 2023 The HomeTones. All Rights Reserved.</Text>
            <Text fontSize="sm">Terms of Service | Privacy Policy</Text>
          </VStack>
        </Center>
      </Box>
    </Container>
  );
};

export default Index;
