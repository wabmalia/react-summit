import React, { createContext, useContext, useState, useEffect } from "react"

const TabsContext = createContext()


const useTabs = (defaultState) => {
    const [selectedTab, selectTab] = useState(defaultState)
    const [Content, setContent] = useState(null)

    return {
        selectedTab,
        selectTab,
        Content,
        setContent,
    }
}

const Tabs = ({ initialValue, value, onChange, children }) => {
    const { selectedTab, Content, selectTab, setContent } = useTabs(initialValue)
    return (
        <TabsContext.Provider value={{
            selectedTab: value || selectedTab,
            selectTab: onChange || selectTab,
            setContent
        }}>
            <div className="tab-header">
                {children}
            </div>
            <div className="tab-content">
                {Content}
            </div>
        </TabsContext.Provider>
    )
}

export const Tab = ({ children, value, Content = null }) => {
    const { selectedTab, selectTab, setContent } = useContext(TabsContext);

    const isSelected = value === selectedTab
    useEffect(() => {
        isSelected && setContent(Content)
    }, [isSelected])

    return (
        <div
            onClick={() => selectTab(value)}
            style={{
                cursor: "pointer",
                backgroundColor: isSelected ? "purple" : "rgba(0,0,0,0)"
            }}
        >
            {children}
        </div>
    )
}


export default Tabs