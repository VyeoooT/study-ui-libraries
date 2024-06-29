import { Button, Divider } from "@mantine/core"
import MantineHeader from "./header"
import MantineIntro from "./intro"
import MantineFeatureGrid from "./features/featureGrid"
import MantineFeatureCard from "./features/featureCard"
import MantineFqa from "./faq"
import MantineContact from "./contact"

import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'

function MantineUIPage() {
    return (
        // mantine ui page
        <MantineProvider>
            <div className="py-5">
                <MantineHeader />
            </div>
            
            <div className="flex justify-center items-center gap-10 h-svh">
                <h1 className="text-4xl font-bold">Mantine UI</h1>

                <Button variant="filled" color="yellow" radius={'xl'} size="lg">Mantine UI</Button>
            </div>
            <Divider my={'sm'} variant="dotted" />

            <div className="flex justify-center items-center h-screen">
                <MantineIntro />
            </div>
            <Divider my={'sm'} variant="dotted" />
            
            <MantineFeatureGrid />
            <MantineFeatureCard />
            <MantineFqa />
            <MantineContact />
        </MantineProvider>
    )
}

export default MantineUIPage
