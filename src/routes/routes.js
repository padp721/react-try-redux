import App from "../App"
import Home from "../pages/Home"
import About from "../pages/About"

const ROUTES = [
    {
        path: "/",
        component: App,
        children: [
            {
                path: "",
                component: Home,
            },
            {
                path: "about",
                component: About,
            }
        ]
    },
]

export default ROUTES