import { Button, Grid, GridColumn, GridRow, Header, Image, Segment } from "semantic-ui-react"

function SemanticSection1() {
    return (
        // section 1
        <>
            <Segment basic>
                <Grid container stackable padded='vertically' columns={2}>
                    <GridRow verticalAlign="middle">
                        <GridColumn>
                            <Header
                                as='h3'
                                content="We Help Companies and Companions"
                                subheader="We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."
                            />

                            <Header
                                as='h3'
                                content="We Make Bananas That Can Dance"
                                subheader="Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered."
                            />
                        </GridColumn>

                        <GridColumn>
                            <Image src='https://react.semantic-ui.com/images/wireframe/white-image.png' size='medium' bordered centered />
                        </GridColumn>
                    </GridRow>

                    <GridRow centered>
                        <Button>Check Them Out</Button>
                    </GridRow>
                </Grid>
            </Segment>
        </>
    )
}

export default SemanticSection1
