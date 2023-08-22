import App from "../App"
import Home from "../pages/Home"
import About from "../pages/About"
import Profile from "../pages/Profile"

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
            },
            {
                path: "profile",
                component: Profile,
            },
        ]
    },
]

export default ROUTES