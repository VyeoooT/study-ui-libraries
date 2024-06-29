import { faBell, faBook, faChartPie, faChevronDown, faCode, faCoins, faFingerprint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Anchor, Box, Burger, Button, Center, Collapse, Divider, Drawer, Group, HoverCard, ScrollArea, SimpleGrid, Text, ThemeIcon, UnstyledButton, rem } from "@mantine/core"
import { MantineLogo } from '@mantinex/mantine-logo'
import classes from './module/HeaderMegaMenu.module.css'
import { useDisclosure } from "@mantine/hooks"

const mockdata = [
    {
        icon: faCode,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: faCoins,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: faBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: faFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: faChartPie,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: faBell,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
]

function MantineHeader() {
    // hook
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)

    // item header
    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius={'md'}>
                    <FontAwesomeIcon icon={item.icon} style={{ width: rem(22), height: rem(22) }} color={'#228be6'} />
                </ThemeIcon>

                <div>
                    <Text size="sm" fw={600}>
                        {item.title}
                    </Text>

                    <Text size="sm" fw={400}>
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ))

    return (
        // mantine header
        <Box pb={0}>
            <header className={classes.header}>
                <Group justify="space-between" h={"100%"}>
                    <MantineLogo size={30} />

                    <Group h={'100%'} gap={40} visibleFrom="sm">
                        <a href="#" className={classes.link}>
                            Home
                        </a>

                        <HoverCard width={600} position="bottom" radius={'md'} shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Features
                                        </Box>

                                        <FontAwesomeIcon icon={faChevronDown} size="xs" color="#228be6" />
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                <Group justify="space-between" px={'md'}>
                                    <Text fw={500}>Features</Text>

                                    <Anchor href="#" fz={'xs'}>View all</Anchor>
                                </Group>

                                <Divider my={'sm'} />

                                <SimpleGrid cols={2} spacing={20}>
                                    {links}
                                </SimpleGrid>

                                <div className={classes.dropdownFooter}>
                                    <Group justify="space-between">
                                        <div>
                                            <Text fw={500} fz="sm">
                                                Get started
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                Their food sources have decreased, and their numbers
                                            </Text>
                                        </div>

                                        <Button variant="default">Get started</Button>
                                    </Group>
                                </div>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        
                        <a href="#" className={classes.link}>
                            Learn
                        </a>
                        <a href="#" className={classes.link}>
                            Academy
                        </a>
                    </Group>

                    <Group visibleFrom="sm">
                        <Button variant="default">Login</Button>
                        <Button>Sign up</Button>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Divider my="sm" variant="dotted" />

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size={'100%'}
                padding={'md'}
                title='Navigation'
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`cacl(100vh - ${rem(80)})`} mx={'-md'}>
                    <a href="#" className={classes.link}>
                        Home
                    </a>

                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>

                            <FontAwesomeIcon
                                icon={faChevronDown}
                                style={{ width: rem(16), height: rem(16) }}
                                color={'#228be6'}
                            />
                        </Center>
                    </UnstyledButton>

                    <Collapse in={linksOpened}>{links}</Collapse>

                    <a href="#" className={classes.link}>
                        Learn
                    </a>
                    <a href="#" className={classes.link}>
                        Academy
                    </a>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Login</Button>
                        <Button>Signup</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    )
}

export default MantineHeader
