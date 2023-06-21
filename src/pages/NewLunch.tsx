import './Register.css';
import {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
const Lunch = () => {

    const[name, setName] = useState('');

    const[redirect, setRedirect] = useState(false);
    const[errorText, setErrorText] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const data = {
            name,
        };
        console.log(data);
        const res = await axios.post('http://localhost:3000/lunches', data, {withCredentials: true});
        console.log(res);

        if(res.status == 201) {
            setRedirect(true);
        }
        if(res.status != 201){
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
                    <h1 className="h3 mb-3 fw-normal">New lunch</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="kebab"
                               onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Add</button>
                </form>
            </main>
        </>
    )
}

export default Lunch;