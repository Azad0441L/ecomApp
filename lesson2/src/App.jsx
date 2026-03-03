import Article from "./components/Article";
import Box from "./components/Box";
import "./components/style.css";
const obj = [{
  id:1,
  designation: "PC Gamer MSI lx340",
  famille: "PC Gamer",
  marque: "MSI",
  prix: 7000,
  promo: false,
  description: "PC Gamer HP Omen avec proces",
},
{
  id:2,
  designation: "PC Gamer Asus ROG",
  famille: "PC Gamer",
  marque: "Asus",
  prix: 8500,
  promo: false,
  description: "PC Gamer HP Omen avec proces",
},
{
  id:3,
  designation: "PC Gamer Lenovo Legion",  
  famille: "PC Gamer",
  marque: "Lenovo",
  prix: 9000,
  promo: false,
  description: "PC Gamer HP Omen avec proces",
},
{
  id:4,
  designation: "PC Gamer Dell Alienware",
  famille: "PC Gamer",
  marque: "Dell",
  prix: 12000,
  promo: false,
  description: "PC Gamer HP Omen avec proces",
},
{
  id:5,
  designation: "PC Gamer HP Omen",
  famille: "PC Gamer",
  marque: "HP",
  prix: 9500,
  promo: false,
  description: "PC Gamer HP Omen avec proces",
},
{
  id:6,
  designation: "PC Gamer Acer Predator",
  famille: "PC Gamer",
  marque: "Acer",
  prix: 8000,
  promo: false,
  description: "PC Gamer HP Omen avec proces",
},
{
  id:7,
  designation: "PC Gamer Razer Blade",
  famille: "PC Gamer",
  marque: "Razer",
  prix: 15000,
  promo: true,
  description: "PC Gamer HP Omen avec proces",
},
{
  id:8,
  designation: "PC Gamer Gigabyte Aorus",
  famille: "PC Gamer",
  marque: "Gigabyte",
  prix: 11000,
  promo: false,
  description: "PC Gamer HP Omen avec proces",
}];
function App() {
  return (
    <>
      {/* <Article {...obj}>
        <p>article</p>
      </Article> */}
      {obj.map((article) => (
        <Article key={article.id}{...article}></Article>))
      }
      <hr />
      <hr />
      <hr />
      <Box
        title="Titre 1"
        text="text 1"
        className="class1"
        id="id1"
        onClick={() => {
          alert("test");
        }}
      >
        children text
      </Box>
    </>
  );
}

export default App;

// import { useState } from 'react'; 

// export default function RegisterForm() { 
//   const [form, setForm] = useState({ 
//     firstName: 'Luke', 
//     lastName: 'Jones', 
//     email: 'lukeJones@sculpture.com', 
//   }); 

//   return ( 
//     <> 
//       <label> 
//         First name: 
//         <input 
//           value={form.firstName} 
//           onChange={e => { 
//             setForm({ 
//               ...form, 
//               firstName: e.target.value 
//             }); 
//           }} 
//         /> 
//       </label> 
//       <label> 
//         Last name: 
//         <input 
//           value={form.lastName} 
//           onChange={e => { 
//             setForm({ 
//               ...form, 
//               lastName: e.target.value 
//             }); 
//           }} 
//         /> 
//       </label> 
//       <label> 
//         Email: 
//         <input 
//           value={form.email} 
//           onChange={e => { 
//             setForm({ 
//               ...form, 
//               email: e.target.value 
//             }); 
//           }} 
//         /> 
//       </label> 
//       <p> 
//         {form.firstName}{' '} 
//         {form.lastName}{' '} 
//         ({form.email})
//       </p> 
//     </> 
//   ); 
// } 
// import { useRef } from "react";
// function App() {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     // `current` points to the mounted text input element
//     inputEl.current.focus();
//   };
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>
//   );
// }
// export default App;
// function Main(props) { 
//   return <Header msg={props.msg} />; 
// };

// function Header(props) { 
//   return ( 
//     <div style={{ border: "10px solid whitesmoke" }}> 
//       <h1>Header here</h1> 
//       <Wrapper msg={props.msg} /> 
//     </div> 
//   ); 
// };

// function Wrapper(props) { 
//   return ( 
//     <div style={{ border: "10px solid lightgray" }}> 
//       <h2>Wrapper here</h2> 
//       <Button msg={props.msg} /> 
//     </div> 
//   ); 
// };

// function Button(props) { 
//   return ( 
//     <div style={{ border: "20px solid orange" }}> 
//       <h3>This is the Button component</h3> 
//       <button onClick={() => alert(props.msg)}>Click me!</button> 
//     </div> 
//   ); 
// };

// function App() { 
//   return ( 
//     <Main  
//       msg="I passed through the Header and the Wrapper and I reached the Button component"  
//     /> 
//   ); 
// }; 

// export default App;