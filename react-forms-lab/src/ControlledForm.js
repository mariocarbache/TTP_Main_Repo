import React, { useState} from "react";
import axios from "axios";

function ControlledForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (Event) => {
        Event.preventDefault();
        console.log(name, email);
        const response = await axios.post("http://localhost:3000/users",{ 
            name, 
            email
        });
        console.log(response.data);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        const response = await axios.put(`http://localhost:3000/users/${id}`, {
          name,
          email,
        });
        console.log(response.data);
      };

    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await axios.delete(`http://localhost:3000/users/${id}`);
        console.log(response.data);
      };
      return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Email:
                <input type="text" value={email} on onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}



export default ControlledForm;
