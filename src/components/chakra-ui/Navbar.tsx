import { LockIcon } from "@chakra-ui/icons"
import { Avatar, AvatarBadge, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react"

function ChakraNavbar() {
    const logout = useToast()

    const showNotiLogout = () => {
        logout({
            title: "Logge out",
            description: "Successfully logged out",
            duration: 5000,
            isClosable: true,
            position: 'top',
            status: 'success',
            icon: <LockIcon />,
            colorScheme: "purple",
        })
    }

    return (
        // navbar
        <Flex as={'nav'} p={'1rem'} alignItems={'center'} mb={'40px'}>
            <Heading as={'h1'} fontSize={{ base: '16px' , lg: '20px', xl: '36px' }}>Dojo Tasks</Heading>

            <Spacer />

            <HStack spacing={'12px'} wrap={'wrap'}>
                {/* avt and badge for avt */}
                <Avatar src="../../img/mario.png">
                {/* <Avatar name="mario" bg='purple.200' color='white' src="./img/mari.png"> */}
                    <AvatarBadge width={'1.3em'} bg={'teal.500'}>
                        <Text fontSize={'xs'} color={'white'}>3</Text>
                    </AvatarBadge>
                </Avatar>

                <Text>vlinh52000@gmail.com</Text>

                <Button colorScheme={"purple"} onClick={showNotiLogout}>Logout</Button>
            </HStack>
        </Flex>
    )
}

export default ChakraNavbar
