import { useTask } from "./taskReducer";

export const Tasks = () => {
  const { state, dispatch } = useTask();

  const handleToggleComplete = (task) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: task });
  };
  const handleDelete = (task) => {
    dispatch({ type: "DELETE_TASK", payload: task });
  };
  const incompleteTasks = state.tasks.filter((task) => !task.completed);
  const completedTasks = state.tasks.filter((task) => task.completed);

  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="text-white">
      <h1 className="my-5">Tasks to do - {incompleteTasks.length}</h1>
      {incompleteTasks.map((task, index) => (
        <div
          key={index}
          className="bg-secondary mb-2  flex items-center justify-between p-5 capitalize text-primary rounded-lg"
        >
          <h1>{task.text}</h1>

          <div className="options flex items-center gap-3">
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleToggleComplete(task.text)}
            >
              <path
                d="M17.7851 1.67391L6.7851 12.6739C6.72125 12.7378 6.64542 12.7885 6.56196 12.8231C6.4785 12.8577 6.38904 12.8755 6.29869 12.8755C6.20834 12.8755 6.11888 12.8577 6.03542 12.8231C5.95196 12.7885 5.87614 12.7378 5.81229 12.6739L0.999785 7.86141C0.870782 7.7324 0.798309 7.55744 0.798309 7.375C0.798309 7.19256 0.870782 7.0176 0.999785 6.88859C1.12879 6.75959 1.30375 6.68712 1.48619 6.68712C1.66863 6.68712 1.84359 6.75959 1.9726 6.88859L6.29869 11.2155L16.8123 0.701094C16.9413 0.572091 17.1163 0.499619 17.2987 0.499619C17.4811 0.499619 17.6561 0.572091 17.7851 0.701094C17.9141 0.830097 17.9866 1.00506 17.9866 1.1875C17.9866 1.36994 17.9141 1.5449 17.7851 1.67391Z"
                fill="#9E78CF"
              />
            </svg>

            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                handleDelete(task.text);
              }}
            >
              <path
                d="M16.6112 3.125H1.48621C1.30387 3.125 1.129 3.19743 1.00007 3.32636C0.871139 3.4553 0.798706 3.63016 0.798706 3.8125C0.798706 3.99484 0.871139 4.1697 1.00007 4.29864C1.129 4.42757 1.30387 4.5 1.48621 4.5H2.17371V16.875C2.17371 17.2397 2.31857 17.5894 2.57643 17.8473C2.8343 18.1051 3.18403 18.25 3.54871 18.25H14.5487C14.9134 18.25 15.2631 18.1051 15.521 17.8473C15.7788 17.5894 15.9237 17.2397 15.9237 16.875V4.5H16.6112C16.7935 4.5 16.9684 4.42757 17.0973 4.29864C17.2263 4.1697 17.2987 3.99484 17.2987 3.8125C17.2987 3.63016 17.2263 3.4553 17.0973 3.32636C16.9684 3.19743 16.7935 3.125 16.6112 3.125ZM14.5487 16.875H3.54871V4.5H14.5487V16.875ZM4.92371 1.0625C4.92371 0.880164 4.99614 0.705295 5.12507 0.576364C5.254 0.447433 5.42887 0.375 5.61121 0.375H12.4862C12.6685 0.375 12.8434 0.447433 12.9723 0.576364C13.1013 0.705295 13.1737 0.880164 13.1737 1.0625C13.1737 1.24484 13.1013 1.4197 12.9723 1.54864C12.8434 1.67757 12.6685 1.75 12.4862 1.75H5.61121C5.42887 1.75 5.254 1.67757 5.12507 1.54864C4.99614 1.4197 4.92371 1.24484 4.92371 1.0625Z"
                fill="#9E78CF"
              />
            </svg>
          </div>
        </div>
      ))}

      <h1 className="my-5">Done - {completedTasks.length}</h1>
      {completedTasks.map((task, index) => (
        <div
          key={index}
          className="bg-secondary opacity-50 mb-2  flex items-center justify-between p-5 capitalize line-through text-ended rounded-lg"
        >
          <h1>{task.text}</h1>
        </div>
      ))}
      {completedTasks.length > 0 && (
        <button onClick={handleClearCompleted} className="py-2 px-4 bg-primary my-5 rounded-lg hover:bg-active transition-all duration-200">Clear Completed Tasks</button>
      )}
    </div>
  );
};
