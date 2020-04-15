import React from "react"
import { useBoolean } from "./hooks"

const Collapsable = ({ title, children }) => {
    const [show, { toggle }] = useBoolean()
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <button type="button" onClick={toggle}>
                    {show ? "Hide" : "Show"}
                </button>
            </div>
            <br />
            {show && children}
        </div >
    )
}

export default Collapsable