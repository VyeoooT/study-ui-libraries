import { Outlet } from "react-router-dom"
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react"
import ChakraNavbar from "../../../../components/chakra-ui/Navbar"
import ChakraSidebar from "../../../../components/chakra-ui/Sidebar"
import ChakraTheme from "../../../../themes/themeChakra"

function ChakraRootLayout() {
    return (
        <ChakraProvider theme={ChakraTheme}>
            <Grid templateColumns="repeat(6, 1fr)" bg={"gray.50"}>
                <GridItem
                    as={'aside'}
                    colSpan={{ base: 6, lg: 2, xl: 1 }}
                    bg={'purple.400'}
                    minHeight={{ lg: '100vh' }}
                    p={{ base: '20px', lg: '30px' }}
                >
                    <ChakraSidebar />
                </GridItem>

                <GridItem as={'main'} colSpan={{ base: 6, lg: 4, xl: 5 }} p={'40px'}>
                    <ChakraNavbar />
                    <Outlet />
                </GridItem>
            </Grid>
        </ChakraProvider>
    )
}

export default ChakraRootLayout
