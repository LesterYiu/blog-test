import { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

const Home = ({isAuth}) => {

    const [postLists, setPostLists] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    // In order to get all the information within a collection, we will utilize the getDocs function from firebase auth.

    useEffect( () => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostLists(data.docs.map( (doc) => ({...doc.data(), id: doc.id})));
        }

        getPosts();
    });
    // without an empty dependency array, it will just reload everytime there is a change in the collection.

    const deletePost = async (id) => {
        // we need to be able to delete our posts, first we need the correct location of the post in our collection, which is why we will use doc. doc will take in our database location and the name of the collection, and the id of the document.

        // since we need the unique id, we can grab the specific id from the document when the user clicks the delete butotn
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    }

    return (
        <div className="homePage">
            {postLists.map( (post) => {
                return (
                <div className="post" key={post.id}>
                    <div className="postHeader">
                        <div className="title">
                            <h1>{post.title}</h1>
                        </div>
                    </div>
                    <div className="deletePost">
                        {isAuth && post.author.id === auth.currentUser.uid ? <button onClick={() => {deletePost(post.id)}}>&#128465;</button> : null}
                    </div>
                    <div className="postTextContainer">
                        <p>{post.postText}</p>
                    </div>
                    <h3>@{post.author.name}</h3>
                </div>)
            })}
        </div>
    )
}

export default Home;