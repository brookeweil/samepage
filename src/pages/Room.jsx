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
import { Link, Navigate, useSearchParams } from "react-router-dom";

const Room = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const passcode = searchParams.get("passcode");

  return (
    <>
      <Heading size="md">Hello!</Heading>
    </>
  );
};

export default Room;
