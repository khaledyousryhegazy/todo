import { useRef, useState } from "react";
import { useTask } from "./taskReducer";

export const Inputs = () => {
  const { dispatch } = useTask();
  const inputRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch({ type: "ADD_TASK", payload: task });
      inputRef.current.value = ""; // Clear input after sending
      setErrorMessage(""); // Clear error message
    } else {
      setErrorMessage("Please enter a task first.");
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 w-full">
        <input
          type="text"
          className="outline-none border w-full border-active py-1.5 px-3 bg-transparent text-gray-400 rounded-lg"
          placeholder="Add Task"
          ref={inputRef}
        />
        <button
          className="bg-primary rounded-lg border border-primary p-1.5"
          onClick={handleClick}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.25 11C19.25 11.1823 19.1776 11.3572 19.0486 11.4861C18.9197 11.6151 18.7448 11.6875 18.5625 11.6875H11.6875V18.5625C11.6875 18.7448 11.6151 18.9197 11.4861 19.0486C11.3572 19.1776 11.1823 19.25 11 19.25C10.8177 19.25 10.6428 19.1776 10.5139 19.0486C10.3849 18.9197 10.3125 18.7448 10.3125 18.5625V11.6875H3.4375C3.25516 11.6875 3.0803 11.6151 2.95136 11.4861C2.82243 11.3572 2.75 11.1823 2.75 11C2.75 10.8177 2.82243 10.6428 2.95136 10.5139C3.0803 10.3849 3.25516 10.3125 3.4375 10.3125H10.3125V3.4375C10.3125 3.25516 10.3849 3.0803 10.5139 2.95136C10.6428 2.82243 10.8177 2.75 11 2.75C11.1823 2.75 11.3572 2.82243 11.4861 2.95136C11.6151 3.0803 11.6875 3.25516 11.6875 3.4375V10.3125H18.5625C18.7448 10.3125 18.9197 10.3849 19.0486 10.5139C19.1776 10.6428 19.25 10.8177 19.25 11Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {errorMessage && (
        <span className="text-red-500 text-sm my-3">{errorMessage}</span>
      )}
    </div>
  );
};
