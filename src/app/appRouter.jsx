import { createBrowserRouter } from "react-router-dom";
import { baseLayout } from "./layouts/baseLayout";
import { MainPage } from "@/pages/main";
import { AboutPage } from "@/pages/about";
import { NewsPage } from "@/pages/news";
import { ContactPage } from "@/pages/contact";

export function appRouter() {
    return createBrowserRouter([
        {
            element: baseLayout,
            errorElement: <div>Error happened</div>,
            children: [
                {
                    path: "/",
                    element: <MainPage />,
                },
                {
                    path: "/about",
                    element: <AboutPage />,
                },
                {
                    path: "/news",
                    element: <NewsPage />,
                },
                {
                    path: "/contact",
                    element: <ContactPage />,
                },
            ],
        },
    ]);
}
