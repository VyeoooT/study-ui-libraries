import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

function ChakraSidebar() {
    return (
        // sidebar
        <List color={'white'} fontSize={'1.2em'} spacing={6}>
            <ListItem>
                <NavLink to={'/ui/chakra-ui'}>
                    <ListIcon as={CalendarIcon} color={'white'} />
                    Dashboard
                </NavLink>
            </ListItem>

            <ListItem>
                <NavLink to={'create'}>
                    <ListIcon as={EditIcon} color={'white'} />
                    Create
                </NavLink>
            </ListItem>

            <ListItem>
                <NavLink to={'profile'}>
                    <ListIcon as={AtSignIcon} color={'white'} />
                    Profile
                </NavLink>
            </ListItem>
        </List>
    )
}

export default ChakraSidebar
