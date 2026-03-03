import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { Component } from 'react'

// function <=> composant <=> Component:une partie du app

// function Paragraph(){
//   return (
//     <>
//       <form method="post">
//       <p>This is a paragraph from the Paragraph component.</p>
//       <h1>this is a title</h1>
//       <button>cacher</button>
//       </form>
//   </>
  
//   )
// }

// const Etudiant =()=>{
//   return(<>
//   <ul>
//     <li>prenom: AZAD</li>
//     <li>nom : Gulam hussain</li>
//     <li>Branche : TSDI 2</li>
//   </ul>
//   <hr />
//   </>)
// }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {
    /* <Etudiant></Etudiant>
    <Paragraph></Paragraph> */
    }
  </StrictMode>,
)