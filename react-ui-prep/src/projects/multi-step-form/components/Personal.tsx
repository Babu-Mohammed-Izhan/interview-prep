import { ErrorType, FormData } from "..";

const Personal = ({
  data,
  setData,
  error,
}: {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
  error: ErrorType;
}) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return {
        ...prev,
        personal: {
          ...prev.personal,
          [e.target.name]: e.target.value,
        },
      };
    });
  };
  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={data.personal.name}
          onChange={(e) => handleValueChange(e)}
        />
        <div className="error">{error.name}</div>
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={data.personal.age}
          onChange={(e) => handleValueChange(e)}
        />
        <div className="error">{error.age}</div>
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={data.personal.email}
          onChange={(e) => handleValueChange(e)}
        />
        <div className="error">{error.email}</div>
      </div>
    </div>
  );
};

export default Personal;
