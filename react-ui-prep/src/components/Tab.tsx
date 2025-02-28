type Props = {
  name: string;
  onClick: () => void;
  isActive: boolean;
};

const Tab = ({ name, onClick, isActive }: Props) => {
  return (
    <div onClick={() => onClick()} className={isActive ? "active_tab" : "tab"}>
      {name}
    </div>
  );
};

export default Tab;
