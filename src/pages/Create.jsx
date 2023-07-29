import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState("");
  const [passcode, setPasscode] = useState("");
  const [redirectReady, setRedirectReady] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePasscodeChange = (e) => setPasscode(e.target.value);

  const isTextValid = (text) => text && /^\w+$/.test(text) && text.length <= 12;

  const isNameValid = isTextValid(name);
  const isPasscodeValid = isTextValid(passcode);
  const submissable = name && passcode && isNameValid && isPasscodeValid;

  const onSubmit = () => {
    setSubmitting(true);
    // TODO Make request to api
    setSubmitting(false);
    setRedirectReady(true);
  };

  return (
    <>
      <Stack spacing={6}>
        <Heading size="md">Create a room</Heading>
        <FormControl isInvalid={name && !isNameValid}>
          <FormLabel>Room Name</FormLabel>
          <Input value={name} onChange={handleNameChange} />
          <FormHelperText>
            Enter the name of your room. Keep it short and sweet.
          </FormHelperText>
          {name && !isNameValid && (
            <FormErrorMessage>
              Use letters, numbers, and underscores, and keep it 12 characters
              or less.
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={passcode && !isPasscodeValid}>
          <FormLabel>Room Passcode</FormLabel>
          <Input value={passcode} onChange={handlePasscodeChange} />
          <FormHelperText>To add other editors to the room.</FormHelperText>
          {passcode && !isPasscodeValid && (
            <FormErrorMessage>
              Use letters, numbers, and underscores, and keep it 12 characters
              or less.
            </FormErrorMessage>
          )}
        </FormControl>
        <Button
          isDisabled={!submissable}
          isLoading={submitting}
          onClick={onSubmit}
        >
          Get started
        </Button>
      </Stack>
      {redirectReady && (
        <Navigate
          state={{ test: "test" }}
          to={`/room/${name}?passcode=${passcode}`}
          replace={true}
        />
      )}
    </>
  );
};

export default Welcome;
