const Tab = ({
  tabName,
  isActive,
  onClick,
}: {
  tabName: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div className={isActive ? "active_tab" : "tab"} onClick={onClick}>
      {tabName}
    </div>
  );
};

export default Tab;
