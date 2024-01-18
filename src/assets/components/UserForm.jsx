import React, { useState } from 'react';

const UserForm = ()=>{
    const [UserName,SetUserName] = useState("")
    const [LastName,SetLastName] = useState("")
    const [User,SetUser] = useState({})

    // var UserName = ""
// function SetUserName(value){
//         userName = value
    // }
    // SetUserName("flogert")
    const HandeSubmit =(e)=>{
        e.preventDefault();
        SetUser({UserName,LastName});
        SetUserName("")
        SetLastName("")
    }

   

    return (
        <>
        <form onSubmit={HandeSubmit}>

       
        <h2>User Form</h2>
        <input type="text" placeholder="UserName" value={UserName}  onChange={(input)=> SetUserName(input.target.value)}/>
        <input type="text" placeholder=" LastName"  value={LastName} onChange={(e)=> SetLastName(e.target.value)  }/>
        
        <button type='submit'> Submit </button>
        </form>
        {

            User ?
           <div> <p>UserName: { User.UserName}</p>
            <p>LastName:{User.LastName} </p>
            </div> : ""

        }
            
        </>

        
    )
}

export default UserForm