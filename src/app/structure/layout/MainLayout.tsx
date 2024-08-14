import React from 'react';
import Header from "@/app/structure/organism/header/Header";

const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    );
};

export default MainLayout;
