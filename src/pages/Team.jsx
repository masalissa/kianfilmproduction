import React, { Fragment } from 'react'
import Cart from '../components/Cart'

const persons = [
    {id:1,work:"Director",name:"Ali",img:"public/images/1.png",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident sapiente reprehenderit eaque voluptatem dicta deserunt distinctio sequi cumque."},
    {id:2,work:"Co-Director",name:"Marwa",img:"public/images/2.png",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident sapiente reprehenderit eaque voluptatem dicta deserunt distinctio sequi cumque."},
    {id:3,work:"Promotional Matters",name:"Haneen",img:"public/images/3.png",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident sapiente reprehenderit eaque voluptatem dicta deserunt distinctio sequi cumque."},
    {id:4,work:"Marketing Director",name:"Hussin",img:"public/images/4.png",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident sapiente reprehenderit eaque voluptatem dicta deserunt distinctio sequi cumque."},
    {id:5,work:"Coordinator",name:"Adnan",img:"public/images/5.png",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident sapiente reprehenderit eaque voluptatem dicta deserunt distinctio sequi cumque."},
    {id:6,work:"Director Of Photography",name:"Abdallah",img:"public/images/6.png",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut provident sapiente reprehenderit eaque voluptatem dicta deserunt distinctio sequi cumque."}
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
