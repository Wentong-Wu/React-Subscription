import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'

const PostForm = () => {
    const [email_address, setEmail] = useState("");
    const sourceRef = "recruit2022_tom";
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const res = await fetch('http://localhost:8080/subscribe',{
            method: 'POST',
            body: JSON.stringify({
                sourceRef: sourceRef,
                email_address: email_address
            }),
            headers: {
                "Content-Type" : "application/json"
            }
        });
        if (res.status===200){
            navigate(`/subscribe/${email_address}`,{replace: true});
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Email: <input type="text" name="email_address" value={email_address} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Subscribe"/>
                </div>
            </form>
        </div>
    )    
}

export default PostForm