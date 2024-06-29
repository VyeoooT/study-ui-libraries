import { Segment, Button, Header } from "semantic-ui-react"

function SemanticIntro() {
    return (
        // intro
        <Segment inverted text textAlign="center" className="h-svh flex flex-col justify-center items-center">
            <Header as='h1' size="huge">Imagine-a-Company</Header>
            <Header as='h3'>Do whatever you want when you want to.</Header>

            <Button content='Get Start' icon='arrow right' labelPosition='right' color="blue" />
        </Segment>
    )
}

export default SemanticIntro
