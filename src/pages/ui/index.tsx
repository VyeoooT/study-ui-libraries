import { Button, Stack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

function UiIntro() {
    const buttonStyles = {
        bg: "purple.400",
        color: "white",
        textAlign: 'center',
        ':hover': {
            color: 'purple.700',
            bg: 'blue.200',
        },
    }

    return (
        // root/intro select button
        <ChakraProvider>
            <Stack width={'100%'} height={'100vh'} bgGradient='linear(to-r, #ffbead, #ffc4a0, #ffcc92, #ffd784, #ffe47a, #ffdc80, #ffd587, #ffce8e, #ffbca9, #e8b5c1, #c4b3c3, #aeaeb0)' spacing={4} direction='row' justify='center' align='center'>
                <NavLink to={'semantic-ui'}>
                    <Button sx={buttonStyles} size='lg'>
                        Semantic UI
                    </Button>
                </NavLink>

                <NavLink to={'mantine-ui'}>
                    <Button sx={buttonStyles} size='lg'>
                        Mantine UI
                    </Button>
                </NavLink>

                <NavLink to={'chakra-ui'}>
                    <Button sx={buttonStyles} size='lg'>
                        Chakra UI
                    </Button>
                </NavLink>
            </Stack>
        </ChakraProvider>
    )
}

export default UiIntro
