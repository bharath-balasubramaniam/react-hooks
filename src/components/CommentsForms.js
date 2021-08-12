// import React, { useState, useEffect } from "react";

// function CommentsForms(props) {
//   const [postId, setPostId] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [body, setBody] = useState("");
//   const [id, setId] = useState("");
//   useEffect(() => {
//     console.log(props.info.id);
//     (async function () {
//       let cmntdata = await fetch(
//         `https://jsonplaceholder.typicode.com/comments/${props.info.id}`
//       );
//       let inf = await cmntdata.json();
//       console.log(inf);
//       setId(inf.id);
//       setPostId(inf.postId);
//       setName(inf.name);
//       setEmail(inf.email);
//       setBody(inf.body);
//     })();
//   }, [props.info.id]);
//   async function HandleSubmit(e) {
//     console.log("hii", id);
//     e.preventDefault();
//     await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
//       method: "PUT",
//       body: JSON.stringify({
//         postId,
//         name,
//         email,
//         body,
//       }),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });
//     await console.log("hello");
//   }

//   return (
//     <div>
//       <form>
//         <div className="row">
//           <div className="col">
//             <label htmlFor="postId">PostID:</label>
//             <input
//               type="text"
//               value={postId}
//               id="postId"
//               name="postId"
//               className="form-control"
//               onChange={({ target: { value } }) => setPostId(value)}
//             ></input>
//           </div>
//           <div className="col">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               value={name}
//               name="name"
//               id="name"
//               className="form-control"
//               onChange={({ target: { value } }) => setName(value)}
//             ></input>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col">
//             <label htmlFor="email">E-mail:</label>
//             <input
//               type="text"
//               value={email}
//               id="email"
//               name="email"
//               className="form-control"
//               onChange={({ target: { value } }) => setEmail(value)}
//             ></input>
//           </div>
//         </div>
//         <div className="row">
//           <label htmlFor="body">Body:</label>
//           <textarea
//             value={body}
//             id="body"
//             name="body"
//             className="form-control"
//             onChange={({ target: { value } }) => setBody(value)}
//           ></textarea>
//         </div>
//         <br />
//         <div>
//           <button
//             className="btn btn-primary spacearound"
//             onClick={HandleSubmit}
//           >
//             Submit
//           </button>
//           <button className="btn btn-danger spacearound">Delete</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CommentsForms;
