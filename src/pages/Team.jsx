import React, { Fragment } from 'react'
import Cart from '../components/Cart'
import imgOne from "../../public/images/1.png"
import imgTwo from "../../public/images/2.png"
import imgThree from "../../public/images/3.png"
import imgFour from "../../public/images/4.png"
import imgFive from "../../public/images/5.png"
import imgSix from "../../public/images/6.png"

const persons = [
    {id:1,work:"Director",name:"Ali",img:imgOne,about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident sapiente reprehenderit eaque voluptatem dicta deserunt distinctio sequi cumque."},
    {id:2,work:"Co-Director",name:"Marwa",img:imgTwo,about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident sapiente reprehenderit eaque voluptatem dicta deserunt distinctio sequi cumque."},
    {id:3,work:"Promotional Matters",name:"Haneen",img:imgThree,about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident sapiente reprehenderit eaque voluptatem dicta deserunt distinctio sequi cumque."},
    {id:4,work:"Marketing Director",name:"Hussin",img:imgFour,about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident sapiente reprehenderit eaque voluptatem dicta deserunt distinctio sequi cumque."},
    {id:5,work:"Coordinator",name:"Adnan",img:imgFive,about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident sapiente reprehenderit eaque voluptatem dicta deserunt distinctio sequi cumque."},
    {id:6,work:"Director Of Photography",name:"Abdallah",img:imgSix,about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident sapiente reprehenderit eaque voluptatem dicta deserunt distinctio sequi cumque."}
]
export default function Team() {
  return (

     <div className="w-75 mx-auto p-5">
        <div className="row justify-content-center">
    {persons.map(person => {
     return  (
     
        <div className="col-12 col-sm-6 col-md-4  text-white">
          <Cart key={person.id} work={person.work} name={person.name} about={person.about} img={person.img}  />
        </div>
     

     )
    })}
    
    </div>
     </div>
   
  )
}
