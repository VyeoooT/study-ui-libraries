import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react"
import { Form, redirect } from "react-router-dom"

function ChakraCreate() {
    return (
        <Box maxW={'480px'}>
            <Form method="POST" action="/create">
                <FormControl isRequired mb={10}>
                    <FormLabel>Task name:</FormLabel>
                    <Input type="text" name="title" />
                    <FormHelperText>Enter a descriptive task name.</FormHelperText>
                </FormControl>

                <FormControl mb={3}>
                    <FormLabel>Task description:</FormLabel>
                    <Textarea
                        placeholder="Enter a detailed description for your task..."
                        name="description"
                    />
                </FormControl>

                <FormControl display={'flex'} mb={7} alignItems="center">
                    <Checkbox
                        name="isPriority"
                        size={'lg'}
                        colorScheme={'purple'}
                    />
                    <FormLabel mb="0" ml="10px">Make a priority task</FormLabel>
                </FormControl>

                <Button type="submit">Submit</Button>
            </Form>
        </Box>
    )
}

export default ChakraCreate

export const createAction = async ({ request }: any) => {
    const data = await request.formData()

    const task = {
        title: data.get('title'),
        description: data.get('description'),
        isPriority: data.get('isPriority') === ''
    }

    console.log(task)

    return redirect('/ui/chakra-ui')
}
