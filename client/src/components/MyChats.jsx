import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { getSender } from "../config/ChatLogic";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./miscellaneous/GroupChatModal";
import { ChatState } from "../Context/ChatProvider";

const MyChats = ({ fetchAgain }) => {
    const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
    const toast = useToast();
    const [loggedUser, setLoggedUser] = useState();

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                };
                const response = await axios.get("/api/chat", config);
                const data = response.data;
                setChats(data);
            } catch (error) {
                toast({
                    title: "Error Occurred!",
                    description: "Failed to Load the chats",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom-left",
                });
            }
        };
        
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
        fetchChats();
    }, [fetchAgain, setChats, user.token]);

    return (
        <Box
            display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
            flexDirection="column"
            alignItems="center"
            padding={3}
            backgroundColor="white"
            width={{ base: "100%", md: "31%" }}
            borderRadius="lg"
            borderWidth="1px"
            overflowY="auto" // Ensure the entire box is scrollable if content exceeds
        >
            <Box
                paddingBottom={3}
                width="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                My Chats
                <GroupChatModal>
                    <Button display="flex" fontSize={{ base: "17px", md: "10px", lg: "17px" }} rightIcon={<AddIcon />}>
                        New Group Chat
                    </Button>
                </GroupChatModal>
            </Box>
            <Stack spacing={4} width="100%">
                {chats ? chats.map((chat) => (
                    <Box
                        key={chat._id}
                        onClick={() => setSelectedChat(chat)}
                        cursor="pointer"
                        backgroundColor={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                        color={selectedChat === chat ? "white" : "black"}
                        padding={3}
                        borderRadius="lg"
                    >
                        <Text fontWeight="bold">
                            {!chat.isGroupChat ? getSender(loggedUser, chat.users) : chat.chatName}
                        </Text>
                        {chat.latestMessage && (
                            <Text fontSize="xs">
                                <b>{chat.latestMessage.sender.name}:</b> {chat.latestMessage.content.length > 50 ? chat.latestMessage.content.substring(0, 51) + "..." : chat.latestMessage.content}
                            </Text>
                        )}
                    </Box>
                )) : <ChatLoading />}
            </Stack>
        </Box>
    );
};

export default MyChats;
