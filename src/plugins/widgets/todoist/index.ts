import { Config } from "../../types";
import Todo from "./Todo";
import TodoSettings from "./TodoSettings";

const config: Config = {
  key: "widget/todoist",
  name: "Todoist",
  description: "Get your Todoist items on Tabliss.",
  dashboardComponent: Todo,
  settingsComponent: TodoSettings,
};

export default config;
