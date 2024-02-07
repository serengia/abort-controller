import { useReducer, useRef } from "react";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "add-todo":
      console.log("ACTION::", action);
      if (action.payload.length <= 1) return state;
      return [...state, newTodo(action.payload)];

    case "toggle":
      return state;

    default:
      return state;
  }
};

function newTodo(val) {
  return { id: `${Date.now()}${Math.random()}`, text: val };
}

export default function Reducer() {
  const [state, dispatch] = useReducer(reducerFn, []);

  const nameRef = useRef();

  const submitTodo = (e) => {
    e.preventDefault();
    const inputVal = nameRef.current.value;
    console.log("INPUT VAL>>", inputVal);
    dispatch({ type: "add-todo", payload: inputVal });
    // reset
    nameRef.current.value = "";
  };

  console.log("STATE>", state);
  return (
    <div>
      <h2>Reducer</h2>
      <div>
        <form onSubmit={submitTodo}>
          <input type="text" ref={nameRef} aria-label="Todo input box" />
        </form>
      </div>
      <ul>
        {state.map((td) => (
          <li key={td.id}>{td.text}</li>
        ))}
      </ul>
    </div>
  );
}
