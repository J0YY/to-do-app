import './App.css';
import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import FlipMove from "react-flip-move";
import Task from "./Task";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection("tasks").orderBy("timestamp").onSnapshot(snapshot =>
      setTasks(snapshot.docs.map(doc => ({ id: doc.id, task: doc.data().task, timestamp: doc.data().timestamp })))
    );
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    db.collection('tasks').add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <div className="feed__header">
        <h1>Get To Work!!</h1>
        <form>
          <input placeholder="to do..." value={input} onChange={e => setInput(e.target.value)} />
          <Button disabled={!input.trim()} type="submit" variant="contained" onClick={addTask}>Add Task</Button>
        </form>
      </div>
      <ul>
        <FlipMove>
          {tasks.map(task => (
            <Task text={task.task} timestamp={new Date(task.timestamp?.toDate()).toUTCString()} id={task.id} />
          ))}
        </FlipMove>
      </ul>


    </div>
  );
}

export default App;
