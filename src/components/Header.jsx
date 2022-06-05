import { useEffect } from "react";
import {useRef} from "react"

function Header() {

    const setDarkMode = () => {
        document.body.classList = null;
        localStorage.setItem("colorMode", "dark")
    }

    const setLightMode = () => {
        document.body.classList = 'light';
        localStorage.setItem("colorMode", "light")
    }

    const clicker = useRef(null);
    useEffect(() => {
        let colorMode = localStorage.getItem("colorMode");
        if (colorMode === "light") {
            setLightMode();
            clicker.current.click();
        } else {
            setDarkMode();
        }
    }, [])



    return (
        <header className="flex sb">
            <div className="header-texts">
                <h1>Social Media Dashboard</h1>
                <p>Total Followers 23,004</p>
            </div>
            <fieldset
                className="theme-toggler flex"
                aria-label="theme toggler"
                role="radiogroup"
            >
                <label className="light" htmlFor="light">Light Mode</label>
                <label className="dark" htmlFor="dark">Dark Mode</label>

                <div className="inputs-wrapper flex">
                    <input onClick={setDarkMode} type="radio" name="theme" id="dark" />
                    <input onClick={setLightMode}  ref={clicker} type="radio" name="theme" id="light" />
                    <div className="toggle-bg"></div>
                    <div className="toggle-switch"></div>
                </div>
            </fieldset>
        </header>
    )
}

export default Header;