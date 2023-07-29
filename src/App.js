import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import Create from "./pages/Create";
import Room from "./pages/Room";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/create" element={<Create />} />
          <Route path="/room/:key" element={<Room />} />
          {/* <Route exact path="/profile" component={ProfilePage} />
          <Route path="/profile/:username" component={ProfileDetailPage} />
        <Route path="/feed" component={FeedPage} /> */}
        </Routes>
      </BrowserRouter>
      {/* TODO
          - screen for when you first arrive at the page: create a room, login, or login as an editor
          - cookie for 24h to save recent room code
          - view screen: poll every 1-2s for room code
          - create screen: create key and password and submit (initialize text to "Welcome" or something)
          - edit screen: submit new text for the room key while passing pw     
          - update Favicon and tab title text 
        */}
    </ChakraProvider>
  );
}

export default App;
