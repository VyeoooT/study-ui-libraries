import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home"

import SemanticUIPage from "./pages/ui/semantic"
import MantineUIPage from "./pages/ui/mantine"

// import ChakraUIPage from "./pages/ui/chakra/indexxxx"
import ChakraRootLayout from "./pages/ui/chakra/layouts/rootLayout"
import ChakraDashboard, { tasksLoader } from "./pages/ui/chakra/dashboard"
import ChakraCreate, { createAction } from "./pages/ui/chakra/create"
import ChakraProfile from "./pages/ui/chakra/profile"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/ui/semantic-ui",
        element: <SemanticUIPage />
    },
    {
        path: "/ui/mantine-ui",
        element: <MantineUIPage />
    },
    {
        path: "/ui/chakra-ui",
        element: <ChakraRootLayout />,
        children: [
            {
                index: true,
                element: <ChakraDashboard />,
                loader: tasksLoader,
            },
            {
                path: "create",
                element: <ChakraCreate />,
                action: createAction,
            },
            {
                path: "profile",
                element: <ChakraProfile />,
            },
        ],
    },
])

export const RouterFile = () => {
    return <RouterProvider router={router} />
}
