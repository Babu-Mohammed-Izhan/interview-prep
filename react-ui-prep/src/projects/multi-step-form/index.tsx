import { useState } from "react";
import Tab from "./components/Tab";
import { formConfig } from "./config";
import "./form.css";

export type FormData = {
  personal: {
    name: string;
    age: string;
    email: string;
  };
  interests: string[];
  settings: {
    theme: string;
  };
};

export type ErrorType = {
  name?: string;
  age?: string;
  email?: string;
  interests?: string;
};

const MultiStepForm = () => {
  const [data, setData] = useState<FormData>({
    personal: {
      name: "",
      age: "",
      email: "",
    },
    interests: [],
    settings: {
      theme: "light",
    },
  });
  const [errors, setErrors] = useState<ErrorType>({
    name: "",
    age: "",
    email: "",
    interests: "",
  });

  const [activeTab, setActiveTab] = useState(0);

  const ActiveForm = formConfig[activeTab].component;

  const handlePrevPageClick = () => {
    setActiveTab((prev) => prev - 1);
  };
  const handleNextPageClick = () => {
    const errors = formConfig[activeTab].validate(data);
    console.log(errors);
    if (Object.keys(errors).length == 0) {
      setActiveTab((prev) => prev + 1);
    } else {
      setErrors(errors);
    }
  };
  const handleSubmitClick = () => {
    // API CALL
    console.log(data);
  };
  return (
    <div>
      <div>Multi Step Form</div>
      <div style={{ display: "flex" }}>
        {formConfig.map((c, index) => {
          return (
            <Tab
              tabName={c.name}
              isActive={index === activeTab}
              onClick={() => {
                setActiveTab(index);
              }}
            />
          );
        })}
      </div>

      <div>
        <ActiveForm data={data} setData={setData} error={errors} />
      </div>

      <div className="footer">
        {activeTab > 0 ? (
          <button onClick={() => handlePrevPageClick()}>Prev</button>
        ) : (
          ""
        )}
        {activeTab === formConfig.length - 1 ? (
          ""
        ) : (
          <button onClick={() => handleNextPageClick()}>Next</button>
        )}
        {activeTab === formConfig.length - 1 ? (
          <button onClick={() => handleSubmitClick()}>Submit</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
