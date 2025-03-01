import { ErrorType, FormData } from "..";

const Interests = ({
  data,
  setData,
  error,
}: {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
  error: ErrorType;
}) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const finalArr = checked
      ? [...data.interests, name]
      : data.interests.filter((i) => i != name);
    setData((prev) => {
      return {
        ...prev,
        interests: finalArr,
      };
    });
  };

  return (
    <div>
      <div>
        <input
          name="JavaScript"
          type="checkbox"
          onChange={(e) => handleValueChange(e)}
          checked={data.interests.includes("JavaScript")}
        />
        <label>JavaScript</label>
      </div>
      <div>
        <input
          name="TypScript"
          type="checkbox"
          onChange={(e) => handleValueChange(e)}
          checked={data.interests.includes("TypScript")}
        />
        <label>TypScript</label>
      </div>
      <div>
        <input
          name="Python"
          type="checkbox"
          onChange={(e) => handleValueChange(e)}
          checked={data.interests.includes("Python")}
        />
        <label>Python</label>
      </div>
      <div className="error">{error.interests}</div>
    </div>
  );
};

export default Interests;
