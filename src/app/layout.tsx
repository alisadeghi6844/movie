import {ReactNode} from 'react';

import "./globals.css";
import SecondaryLayout from "@/app/structure/layout/SecondaryLayout";
import MainLayout from "@/app/structure/layout/MainLayout";
interface LayoutProps {
    children: ReactNode;
}

const MyApp = ({children}: { children: ReactNode }) => {
    const layout = children?.type?.layout;

    const getLayout = () => {
        if (layout === 'secondary') {
            return <html>
            <body><SecondaryLayout>{children}</SecondaryLayout></body>
            </html>;
        }
        return <html>
        <body><MainLayout>{children}</MainLayout></body>
        </html>;
    };

    return getLayout();
};

export default MyApp;
