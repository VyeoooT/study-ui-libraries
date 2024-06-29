import { Button, Container, Group, SimpleGrid, TextInput, Textarea, Title } from "@mantine/core"
import { useForm } from '@mantine/form'

function MantineContact() {
    const form = useForm({
        initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
    },
        validate: {
            name: (value) => value.trim().length < 2,
            email: (value) => !/^\S+@\S+$/.test(value),
            subject: (value) => value.trim().length === 0,
        },
    })

    return (
        // get in touch
        <Container px={0} size={'30rem'} py={40}>
            <form onSubmit={form.onSubmit(() => {})}>
                <Title order={2} size={'h1'} style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }} fw={900} ta={'center'}>
                    Get in touch
                </Title>

                <SimpleGrid cols={{ base: 1, sm: 2 }} mt={'xl'}>
                    <TextInput
                        label="Name"
                        placeholder="Your Name"
                        name="name"
                        variant="filled"
                        {...form.getInputProps('name')}
                    />

                    <TextInput
                        label="Email"
                        placeholder="Your Email"
                        name="email"
                        variant="filled"
                        {...form.getInputProps('email')}
                    />
                </SimpleGrid>
            
                <TextInput
                    label="Subject"
                    placeholder="Your subject"
                    name="subject"
                    variant="filled"
                    {...form.getInputProps('subject')}
                />

                <Textarea
                    mt={'md'}
                    label="Message"
                    placeholder="Your Message"
                    name="message"
                    variant="filled"
                    maxRows={10}
                    minRows={5}
                    autosize
                    {...form.getInputProps('message')}
                />

                <Group justify="center" mt={'xl'}>
                    <Button type="submit" size="md">Send message</Button>
                </Group>
            </form>
        </Container>
    )
}

export default MantineContact
