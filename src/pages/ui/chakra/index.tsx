import { ChakraProvider } from "@chakra-ui/react"
import ChakraTheme from "../../../themes/themeChakra"
import ChakraRootLayout from "./layouts/rootLayout"

function ChakraUIPage() {
    return (
        <ChakraProvider theme={ChakraTheme}>
            <ChakraRootLayout />
        </ChakraProvider>
    )
}

export default ChakraUIPage
