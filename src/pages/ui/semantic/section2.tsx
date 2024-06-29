import {Grid, GridColumn, GridRow, Header, HeaderSubheader, Image, Segment } from "semantic-ui-react"

function SemanticSection2() {
    return (
        // section 2
        <>
            <Segment basic vertical padded>
                <Grid container stackable celled='internally' padded="vertically" columns={"equal"}>
                    <GridRow textAlign="center">
                        <GridColumn>
                            <Header
                                as='h3'
                                content={`"What a Company"`}
                                subheader="That is what they all say about us"
                            />
                        </GridColumn>

                        <GridColumn>
                            <Header as='h3'>
                                "I shouldn't have gone with their competitor."
                                <HeaderSubheader>
                                    <Image src="https://react.semantic-ui.com/images/avatar/large/nan.jpg" avatar />
                                    <b>Nan</b> Chief Fun Officer Acme Toys
                                </HeaderSubheader>
                            </Header>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Segment>
        </>
    )
}

export default SemanticSection2
