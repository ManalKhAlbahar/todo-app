import React, { useState } from 'react'

export const contextSettings = React.createContext()
const Settings = (props) => {
    const [show, setShow] = useState(true)
    const state = {
        itemsPerPage: 3,
        sort: 'asc',
        showCompleted: show,
        updateShow: function () {setShow(!show)}
    }
    return (
        <contextSettings.Provider value={state}>
            {props.children}
        </contextSettings.Provider>
    )
}

export default Settings