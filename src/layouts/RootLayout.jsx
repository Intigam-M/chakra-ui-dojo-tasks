import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

// components
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
    const textColor = useColorModeValue("gray.50", "gray.800");
    const sidebarColor = useColorModeValue("purple.400", "purple.800");

    return (
        <Grid templateColumns="repeat(6, 1fr)" bg={textColor}>
            {/* sidebar */}
            <GridItem
                as="aside"
                colSpan={{ base: 6, lg: 2, xl: 1 }}
                bg={sidebarColor}
                minHeight={{ lg: '100vh' }}
                p={{ base: '20px', lg: '30px' }}
            >
                <Sidebar />
            </GridItem>

            {/* main content & navbar */}
            <GridItem
                as="main"
                colSpan={{ base: 6, lg: 4, xl: 5 }}
                p="40px"
            >
                <Navbar />
                <Outlet />
            </GridItem>
        </Grid>
    )
}