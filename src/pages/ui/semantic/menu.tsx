import { useState } from "react"
import { Button, Container, Menu, MenuItem } from "semantic-ui-react"

function SemanticMenu() {
    const [isActive, setIsActive] = useState('home')

    const handleActive = (_e: any, { name }: any) => {
        setIsActive(name)
    }

    return (
        // semantic Menu
        <>
            <Container>
                <Menu inverted pointing secondary size="large">
                    <MenuItem
                        as='a'
                        name="home"
                        active={isActive === 'home'}
                        onClick={handleActive}
                    />
                    <MenuItem
                        as='a'
                        name="work"
                        active={isActive === 'work'}
                        onClick={handleActive}
                    />
                    <MenuItem
                        as='a'
                        name="company"
                        active={isActive === 'company'}
                        onClick={handleActive}
                    />
                    <MenuItem
                        as='a'
                        name="careers"
                        active={isActive === 'careers'}
                        onClick={handleActive}
                    />

                    {/* button */}
                    <MenuItem position="right" className="gap-2">
                        <Button inverted>Login</Button>
                        <Button inverted>Sign up</Button>
                    </MenuItem>
                </Menu>
            </Container>
        </>
    )
}

export default SemanticMenu
