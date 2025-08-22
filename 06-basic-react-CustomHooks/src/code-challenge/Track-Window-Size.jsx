import { useState, useEffect } from "react";

function useWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize(){
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return width;
}

function MyComponent(){
    const width = useWindowWidth();

    return <h1>Window with: {width}</h1>
}


export default MyComponent;

