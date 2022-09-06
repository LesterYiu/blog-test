import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = ({isAuth}) => {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const navigate = useNavigate();

    const postsCollectionRef = collection(db, "posts");
    // We will need to create a reference to the specific collection in Cloud Firestore

    // We can grab user information from the auth variable
    const createPost = async () => {
        await addDoc(postsCollectionRef, {title: title, postText: postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}});
        // uid will generate a unique ID corresponding to the logged in user.

        // we need to ensure we rewrite the cloud firestore rules to allow users to actually update the database.
        navigate('/');
    }

    // To prohibit unauthenticated users to go on create post url
    useEffect( () => {
        if (!isAuth) {
            navigate('/login')
        }
    }, []);

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
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;