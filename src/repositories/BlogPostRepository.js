import database from '../firebase.js';

class BlogPostRepository {
    databaseCollection = database.collection("Posts");
    PostToFirestore = (post) => {
      console.log(post.title + " " + post.body + " " + post.id);
      this.databaseCollection.doc(post.id).set({
        title: post.title,
        body: post.body
       })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    };
    DeleteFromFirestore = (title) => {
      this.databaseCollection.doc(title).delete()
      .then(() => {
        console.log("Successfully deleted");
      })
      .catch(() => {
        console.log("Error when deleting");
      });
    }
    GetByTitle = (title) => {
      this.databaseCollection.doc(title).get()
      .then((doc) => {
        if(doc.exists){
          console.log("Successfully retrieved " + doc.data().title + " " + doc.data().body);
        }
        else{
          console.log("Could not retrieve document " + title);
        }
      })
    }
}

export default BlogPostRepository;