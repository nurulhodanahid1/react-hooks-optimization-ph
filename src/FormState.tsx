import React, { useState } from 'react';

const FormState = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    
    // const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log({name, email})
    // }
    const [user, setUser] = useState({name:"", email:""});
    // const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>)=>{
    //     e.preventDefault();
    //     console.log(user)
    // }
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        const value = e.target.value;
        setUser({...user, [inputName]: value})
        console.log(user)
    }
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            onChange={handleChange}
            // onChange={(e)=>setUser({...user, name: e.target.value})} 
            // onChange={(e)=>{setName(e.target.value) }}
            type="text" name="name" id="name" />
            <input
            onChange={handleChange}
            // onChange={(e)=>setUser({...user, email: e.target.value})}
            // onChange={(e)=>{setName(e.target.value) }}
            type="email" name="email" id="email" />
            <button type="submit">Submit</button>
        </form>

        
            
    );
};

export default FormState;