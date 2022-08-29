import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Inventory from "./inventory/inventory";

export default function Layout({children}: {children: React.ReactNode}){
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}