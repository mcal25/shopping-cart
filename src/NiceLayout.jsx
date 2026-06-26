import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

const NiceLayout = () => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export { NiceLayout };