import React, { useState } from "react"
import { useParams } from "react-router-dom"

const PatchForm = () =>{
    const { email } = useParams();
    const sourceRef = "recruit2022_tom";
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [postcode, setPostcode] = useState("");
    const handleSave = async (e) =>{
        const res = await fetch(`http://localhost:8080/subscribe/${email}`,{
            method: 'PATCH',
            body: JSON.stringify({
                sourceRef: sourceRef,
                c_name: name,
                phone: phone,
                postcode: postcode
            }),
            headers: {
                "Content-Type" : "application/json"
            }
        });
        if(res.status===200){
            console.log("Detail Saved")
        }
    }
    return(
        <div>
            <form onSubmit={handleSave}>
                <div>
                    Name: <input type="text" name="Name" value={name} onChange={e => setName(e.target.value)}/>
                    Phone: <input type="text" name="Phone" value={phone} onChange={e => setPhone(e.target.value)}/>
                    Postcode: <input type="text" name="Postcode" value={postcode} onChange={e => setPostcode(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Save Details"/>
                </div>
            </form>
        </div>
    )
}
export default PatchForm