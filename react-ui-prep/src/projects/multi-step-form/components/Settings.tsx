import { FormData } from "..";

const Settings = ({
  data,
  setData,
}: {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
}) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return {
        ...prev,
        settings: {
          theme: e.target.name,
        },
      };
    });
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          name="dark"
          checked={data.settings.theme === "dark"}
          onChange={(e) => handleValueChange(e)}
        />
        <label>Dark</label>
      </div>
      <div>
        <input
          type="radio"
          name="light"
          checked={data.settings.theme === "light"}
          onChange={(e) => handleValueChange(e)}
        />
        <label>Light</label>
      </div>
    </div>
  );
};

export default Settings;
