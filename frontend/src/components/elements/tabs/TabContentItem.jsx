const TabContentItem = ({children,tabIndex,currentTab}) => {
    return (
        <div className={`tab-pane ${tabIndex === currentTab ?'active':''}`} id="tabs-home-12">
            {children}
        </div>
    );
}

export default TabContentItem;