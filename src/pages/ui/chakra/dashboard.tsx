import { ChatIcon, ViewIcon } from "@chakra-ui/icons"
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"

function ChakraDashboard() {
    const tasksData = useLoaderData()

    // Check if tasksData is an array and not undefined or null
    if (!Array.isArray(tasksData)) {
        return <div>No tasksData found</div>
    }

    return (
        <SimpleGrid minChildWidth={'300px'} spacing={8}>
            {tasksData && tasksData.map((item: any) => (
                <Card key={item.id} borderTop='4px' borderColor={'purple.400'} bg={'white'}>
                    <CardHeader>
                        <Flex gap={5}>
                            <Avatar src={item.img} />

                            <Box>
                                <Heading as={'h3'} size={'sm'}>{item.title}</Heading>
                                <Text>By {item.author}</Text>
                            </Box>
                        </Flex>
                    </CardHeader>

                    <CardBody color={'gray.500'}>
                        <Text>{item.description}</Text>
                    </CardBody>

                    <Divider borderColor={'gray.200'} />

                    <CardFooter>
                        <HStack width={'100%'} justifyContent={{ base: 'center', md: 'flex-end', xl: 'center' }}>
                            <Button variant={'ghost'} leftIcon={<ViewIcon />}>Watch</Button>
                            <Button variant={'ghost'} leftIcon={<ChatIcon />}>Comment</Button>
                        </HStack>
                    </CardFooter>
                </Card>
            ))}
        </SimpleGrid>
    )
}

export default ChakraDashboard

// cai nay lam giong nhu dang lay api, nhung that chat dang chay json-server duoi local de fake
export const tasksLoader = async () => {
    const res = await fetch('http://localhost:3000/tasks')

    return res.json()
}
