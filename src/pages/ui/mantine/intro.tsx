import { Button, Container, Group, Image, List, Text, ThemeIcon, Title, rem } from "@mantine/core"
import classes from './module/HeroBullets.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import image from './image.9a65bd94.svg'

function MantineIntro() {
    return (
        // mantine intro (hero header section)
        <Container size={'md'}>
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        A <span className={classes.hightlight}>modern</span> React <br /> components library
                    </Title>

                    <Text c={'dimmed'} mt={'md'}>
                        Build fully functional accessible web applications faster than ever – Mantine includes
                        more than 120 customizable components and hooks to cover you in any situation
                    </Text>

                    <List
                        mt={30}
                        spacing={'sm'}
                        size="md"
                        icon={
                            <ThemeIcon size={25} radius={'xl'}>
                                <FontAwesomeIcon icon={faCheck} size="xs"/>
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>TypeScript based</b> – build type safe applications, all components and hooks export types
                        </List.Item>

                        <List.Item>
                            <b>Free and open source</b> – all packages have MIT license, you can use Mantine in any project
                        </List.Item>

                        <List.Item>
                            <b>No annoying focus ring</b> – focus ring will appear only when user navigates with keyboard
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button radius={'xl'} size="md" className={classes.control}>Get started</Button>
                        <Button variant="default" radius="xl" size="md" className={classes.control}>Source Code</Button>
                    </Group>    
                </div>

                <Image w={rem(376)} h={rem(356)} src={image} visibleFrom="md"/>
            </div>
        </Container>
    )
}

export default MantineIntro
