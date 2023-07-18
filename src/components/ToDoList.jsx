import { useState } from "react";

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [completedList, setCompletedList] = useState([]);

  const handleAdd = () => {
    setList([...list, item]);
  };

  const handleDelete = (index) => {
    list.splice(index, 1);
    completedList.splice(index, 1);
    setList([...list]);
    setCompletedList([...completedList]);
  };

  const completedTask = (el) => {
    setCompletedList([...completedList, el]);
  };
  console.log(completedList);
  return (
    <div>
      <div className="input-main">
        <input
          type="text"
          onChange={(e) => setItem(e.target.value)}
          placeholder="Type here.."
        />
        <button onClick={handleAdd} className="add">
          Add
        </button>
      </div>
      <table className="table">
        <tbody>
          {list.map((el, i) => (
            <tr key={i}>
              <td>{el}</td>
              <td>
                <button className="delete" onClick={() => handleDelete(i)}>
                  Delete
                </button>
                <button className="completed" onClick={() => completedTask(el)}>
                  Completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Completed Task</h4>
      <table className="table">
        <tbody>
          {completedList.map((el, i) => (
            <tr key={i}>
              <td>{el}</td>
              <td>
                <p style={{ color: "green" }}>Completed</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
