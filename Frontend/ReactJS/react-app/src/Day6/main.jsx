// import React from "react";
// import ReactDom from "react-dom/client";

// console.log(ReactDom);

// //!To create a React Element we  need to use the createElement method which is present in the react.
// //! Syntax: CreateElement(tagname, attribute, content/message/element)

// let reactH1 = React.createElement("h1", null, "I am a h1 tag created by react");
// //let p= docuemnt.createElement("p")
// // p.innerHTML = "I am a Para tag"

// let reactP = React.createElement("p",{id: "para"}, "I am a para tag");
// let article = React.createElement("article", null, reactH1, reactP);

// ReactDom.createRoot(document.getElementById("root")).render(article);

// import React from  
// import ReactDom from "react-dom/client";
// let username="charan";
// let greeting=()=>{
//     return <>hello {username}.haave a nice day</>;
// };
// let personalDEtails={
//     address:"HYD"
//     skill:"Python"
// };
// let names=["charan","kaif","usha"];

// ReactDom.createRoot(document.getElementById("Root")).render(
//     {/*<React.Fragment>
//     <article>
//         <h1>i am React</h1>
//         <p>i am JS</p>
//     </article>
//     <section>
//         <h1>product name:mobile</h1>
//         <p>
//             Discription:qwertyuiopsdfghjklzxcvbnm

//         </p>
//         <p>product price:10K</p>
//         <p>product rate: 4.9</p>
//         <button>add to cart</button>
//     </section>
//     <h1>welcome charan</h1>
//     <h1>welcome kaif</h1>
//     <h1>welcome usha</h1>
    
//     <h2>hello {username}</h2>
//     <h2>{gretting()}</h2>
//     <p>address:personDetails.address</p>
//     <p>skills:personDetails["skill"]</p>
// */}
// )


let username = "charan";
let greeting = () => {
  return <>hello {username}. have a nice day</>;
};
let personalDetails = {
  address: "HYD",
  skill: "Python",
};
let names = ["charan", "kaif", "usha"];

export default function App() {
  return (
    <>
      <article>
        <h1>i am React</h1>
        <p>i am JS</p>
      </article>
      <section>
        <h1>product name: mobile</h1>
        <p>Description: qwertyuiopsdfghjklzxcvbnm</p>
        <p>product price: 10K</p>
        <p>product rate: 4.9</p>
        <button>add to cart</button>
      </section>

      {names.map((n) => (
        <h1 key={n}>welcome {n}</h1>
      ))}

      <h2>hello {username}</h2>
      <h2>{greeting()}</h2>
      <p>address: {personalDetails.address}</p>
      <p>skill: {personalDetails["skill"]}</p>
    </>
  );
}