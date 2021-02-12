import React from 'react'
import "./Task.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function Task(props) {

    const complete = (e) => {
        e.preventDefault();
        alert("Congrats on completing \"" + props.text + "\", task now marked for deletion! Please reload the page to save changes.")
        db.collection("tasks").doc(props.id).delete();
        window.location.href = "https://joy-td.web.app";
    }

    return (
        <div className="task">
            <div className="post__avatar">
                <Avatar src="https://www.how-to-study.com/images/study-skills-assessments.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            You
                            <span className="timestamp">
                                <p>Task created on {props.timestamp}</p>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{props.text}</p>
                    </div>
                    <div className="butt">
                        <Button onClick={complete}>complete task</Button>
                    </div>
                </div>
                {/* <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
    */}
            </div>
        </div>
    )
}

export default Task
