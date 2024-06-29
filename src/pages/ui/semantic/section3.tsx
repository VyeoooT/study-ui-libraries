import { Button, Container, Divider, Header, Segment } from "semantic-ui-react"

function SemanticSection3() {
    return (
        // section 3
        <>
            <Segment basic vertical padded>
                <Container text>
                    <Header
                        as="h3"
                        content="Breaking The Grid, Grabs Your Attention"
                        subheader="Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention."                    
                    />
                    <Button>Read More</Button>

                    <Divider horizontal>
                        <Header as='h4' color="blue">Case Studies</Header>
                    </Divider>

                    <Header
                        as="h3"
                        content="Did We Tell You About Our Bananas?"
                        subheader="Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance."
                    />
                    <Button>I'm Still Quite Interested</Button>
                </Container>
            </Segment>
        </>
    )
}

export default SemanticSection3
