import './Register.css';
import {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate, useParams} from "react-router-dom";
const UpdateLunch = () => {
    const { id } = useParams();

    const[name, setName] = useState('');

    const[redirect, setRedirect] = useState(false);
    const[errorText, setErrorText] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const data = {
            name,
        };
        console.log(data);
        const res = await axios.patch(`http://localhost:3000/lunches/${id}`, data, {withCredentials: true});
        console.log(res);

        if(res.status == 200) {
            setRedirect(true);
        }
        if(res.status != 200){
            setErrorText('Napaka v podatkih');
        }
    }

    if(redirect) {
        return <Navigate to={'/'}/>;
    }

    return(
        <>
            <main className="form-signin w-100 m-auto">
                <h2 className={"error"}>{errorText}</h2>
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Update lunch</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="Updated lunch name"
                               onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Update</button>
                </form>
            </main>
        </>
    )
}

export default UpdateLunch;