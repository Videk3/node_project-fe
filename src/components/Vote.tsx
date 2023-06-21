import {FC, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

interface Props {
    id: number;
}
const Vote:FC<Props> = ({id}) => {

    const[errorText, setErrorText] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (lunch_id: number) => {
            const res = await axios.post(`http://localhost:3000/vote/upvote/${lunch_id}`, lunch_id, {withCredentials: true});
            if(res.status != 201) {
                setErrorText('Napaka pri glasovanju');
                console.log(res.data);
                console.log("Error text: " + errorText);
            }

            if(res.status == 201) {
                setRedirect(true);
            }
        }

    if(redirect){
        return <Navigate to={'/'}/>;
    }

    return(
        <>
                <button onClick={()=>submit(id)} type="button" className="btn btn-sm btn-outline-secondary">Vote</button>
        </>
    )

    }

export default Vote;