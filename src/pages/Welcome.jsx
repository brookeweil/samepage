import { Button, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <Stack spacing={6}>
        <Heading size="lg">SamePage</Heading>
        <Heading size="md">
          For Trivia in a loud bar, live closed-captioning, or any time you want
          to be on the same page.
        </Heading>
        <Link to="/create">
          <Button>Create a room</Button>
        </Link>
        <Link to="/join">
          <Button>Join a room </Button>
        </Link>
        <Link to="/login">
          <Button>Log into an existing room as an editor </Button>
        </Link>
      </Stack>
    </>
  );
};

export default Welcome;
