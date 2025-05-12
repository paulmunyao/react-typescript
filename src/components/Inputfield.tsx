import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const Inputfield = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a new task"
        className="input_box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default Inputfield;
