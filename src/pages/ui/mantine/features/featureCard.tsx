import { Badge, Card, Container, Divider, Group, SimpleGrid, Text, Title, rem, useMantineTheme } from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react'
import classes from '../module/FeaturesCards.module.css'

const mockdataCard = [
    {
        title: 'Extreme performance',
        description:
            'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
        icon: IconGauge,
    },
    {
        title: 'Privacy focused',
        description:
            'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
        icon: IconUser,
    },
    {
        title: 'No third parties',
        description:
            'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        icon: IconCookie,
    },
];

function MantineFeatureCard() {
    const theme = useMantineTheme()

    // map data
    const features = mockdataCard.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.blue[6]}
            />

            <Text fz={'lg'} fw={500} mt='md' className={classes.cardTitle}>
                {feature.title}
            </Text>

            <Text fz={'sm'} c={'dimmed'} mt='sm' className={classes.cardTitle}>
                {feature.description}
            </Text>
        </Card>
    ))

    return (
        // feature 
        <>
            <Container size={'lg'} py={60}>
                <Group justify='center'>
                    <Badge variant='filled' size='lg'>
                        Best company ever
                    </Badge>
                </Group>

                <Title order={2} className={classes.title} ta={'center'} mt={'sm'}>
                    Integrate effortlessly with any technology stack
                </Title>

                <Text c={'dimmed'} className={classes.description} ta={'center'} mt={'md'}>
                    Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.
                </Text>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing={'xl'} mt={50}>
                    {features}
                </SimpleGrid>
            </Container>

            <Divider my={'sm'} variant='dotted' />
        </>
    )
}

export default MantineFeatureCard
