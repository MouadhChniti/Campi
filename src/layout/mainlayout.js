
import Footerb from '../components/footer';
import { useState, useEffect } from "react"
import Navb from '../components/navbar';





const layout = (props) => {

    return (
        <>
            <Navb />
            {props.children}
            <Footerb />
        </>
    );
}

export default layout;
