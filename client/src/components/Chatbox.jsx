import { Box } from "@chakra-ui/react";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
    const { selectedChat } = ChatState();

    return (
        <Box
            display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
            flexDirection="column"
            alignItems="center"
            padding={3}
            backgroundColor="white"
            width={{ base: "100%", md: "68%" }}
            borderRadius="lg"
            borderWidth="1px"
            overflow="hidden"  // Ensures that all contents stay within the box
        >
            {/* <Box flex="1" display="flex" flexDirection="column-reverse" minHeight="0"></Box> */}
            <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        </Box>
    );
};

export default Chatbox;
