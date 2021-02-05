import React, {useState} from "react";
import NavBar from "../pages/dashboard/components/NavBar";

export default function Layout({children}){
    const [drawer, setDrawer] = useState(false)
    return(
        <>
        <NavBar onDrawerOpen={() => setDrawer(true)}/>
        {/* <Drawer /> */}
        {children}
        </>
    )
}