import { FormData } from ".";
import Interests from "./components/Interests";
import Personal from "./components/Personal";
import Settings from "./components/Settings";

const formConfig = [
  {
    name: "Personal",
    component: Personal,
    validate: function (data: FormData) {
      if (!data.personal.name || data.personal.name.length < 2) {
        return {
          name: "Name is not valid",
        };
      }
      if (!data.personal.age || Number(data.personal.age) < 18) {
        return {
          age: "Age is not valid",
        };
      }
      if (!data.personal.email || data.personal.email.length < 2) {
        return {
          email: "Email is not valid",
        };
      }

      return {};
    },
  },
  {
    name: "Interests",
    component: Interests,
    validate: function (data: FormData) {
      if (data.interests.length === 0) {
        return {
          interests: "Interests must not be empty",
        };
      }
      return {};
    },
  },
  {
    name: "Settings",
    component: Settings,
    validate: function () {
      return {};
    },
  },
];

export { formConfig };
