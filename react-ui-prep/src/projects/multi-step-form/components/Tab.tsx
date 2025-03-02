const Tab = ({ tabName, isActive }: { tabName: string; isActive: boolean }) => {
  return <div className={isActive ? "active_tab" : "tab"}>{tabName}</div>;
};

export default Tab;
