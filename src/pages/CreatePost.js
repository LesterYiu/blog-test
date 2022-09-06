import { addDoc } from "firebase/firestore";
import { useState } from "react";

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const createPost = async () => {

    }

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create A Post</h1>
                <div className="inputGp">
                    <label>Title:</label>
                    <input placeholder="Title..." onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div className="inputGp">
                    <label>Post:</label>
                    <textarea placeholder="Post..." onChange={(e) => {setPostText(e.target.value)}}></textarea>
                </div>
                <button>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;