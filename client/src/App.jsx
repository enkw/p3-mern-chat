import "./App.css";
import Homepage from "./Pages/Homepage";
import { Outlet } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <ChakraProvider>
      <ChatProvider>
    <div className="App">
      <Outlet />
    </div>
    </ChatProvider>
    </ChakraProvider>
  );
}

export default App;