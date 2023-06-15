import React, { useState } from "react";

export default function Post(props){

    let[userId,setuserid] = useState(1)
    let[id,setid] = useState(1001)
    let[title,settitle] = useState("Lokesh")
    let[body,setboby] = useState("good boy")

    return(
        <div>
       <div className="text-success">{props.userId}</div> 
       <div>{props.id}</div> 
       <div>{props.title}</div>
       <div>{props.body}</div> 
       </div>

    )
}