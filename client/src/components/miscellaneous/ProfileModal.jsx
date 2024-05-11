import { ViewIcon } from "@chakra-ui/icons";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    IconButton,
    Text,
    Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const defaultImage = 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'; // Provide a valid default image path
    //this is also linked in the userModel.js, for the time being this will hold the default.

    const handleImageError = (e) => {
        e.target.src = defaultImage;
    };

    return (
        <>
            {children ? (
                <span onClick={onOpen}>{children}</span>
            ) : (
                <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
            )}
            <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent h="auto">
                    <ModalHeader
                        fontSize="40px"
                        fontFamily="Work sans"
                        d="flex"
                        justifyContent="center"
                    >
                        {user.name || 'No Name Available'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        d="flex"
                        flexDir="column"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            src={user.pic || defaultImage}
                            alt={user.name || 'Profile Picture'}
                            onError={handleImageError}
                        />
                        <Text
                            fontSize={{ base: "28px", md: "30px" }}
                            fontFamily="Work sans"
                            mt="20px"
                        >
                            Email: {user.email || 'No Email Available'}
                        </Text>
                        <Text
                            fontSize={{ base: "24px", md: "26px" }}
                            fontFamily="Work sans"
                            mt="10px"
                        >
                            Username: {user.username || 'No Username'}
                        </Text>
                        <Text
                            fontSize={{ base: "20px", md: "22px" }}
                            fontFamily="Work sans"
                            mt="5px"
                        >
                            Role: {user.role || 'No Role Defined'}
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProfileModal;
