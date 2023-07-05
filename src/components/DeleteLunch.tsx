import {FC, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

interface Props {
    id: number;
}
const DeleteLunch:FC<Props> = ({id}) => {

    const[errorText, setErrorText] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (lunch_id: number) => {
        const res1 = await axios.delete(`http://localhost:3000/lunches/${lunch_id}`, {withCredentials: true});
        if(res1.status != 201) {
            setErrorText('Napaka pri brisanju malice');
            console.log(res1.data);
            console.log("Error text: " + errorText);
        }

        if(res1.status == 201) {
            setRedirect(true);
        }
    }

    if(redirect){
        return <Navigate to={'/'}/>;
    }

    return(
        <>
            <button onClick={()=>submit(id)} type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
        </>
    )

}

export default DeleteLunch