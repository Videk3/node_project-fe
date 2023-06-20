import {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate, redirect} from "react-router-dom";
const Vote = () => {

    const[lunchName, setLunchName] = useState('');

    const[errorText, setErrorText] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

            const data = {
                "name": lunchName,
            };
            const res = await axios.post('http://localhost:3000/vote', data);
            if(res.status != 201) {
                setErrorText('Napaka pri glasovanju');
                console.log(res.data);
            }

            if(res.status == 201) {
                setRedirect(true);
            }
        }
    }
        return <Navigate to={'/'}/>;
}

export default Vote;