import './App.css';

function App() {
  return (
    <div className="App">
      <h1>SamePage</h1>
      <h2>
        For Trivia in a loud bar, live closed-captioning, or any time you want to be on the same page.
      </h2>
      {/* TODO
        - screen for when you first arrive at the page: create a room, login, or login as an editor
        - cookie for 24h to save recent room code
        - view screen: poll every 1-2s for room code
        - create screen: create key and password and submit (initialize text to "Welcome" or something)
        - edit screen: submit new text for the room key while passing pw      
      */}
    </div>
  );
}

export default App;
