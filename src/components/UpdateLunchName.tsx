import { FC, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Props {
    id: number;
}

const UpdateLunch: FC<Props> = ({ id }) => {
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState("");

    const submit = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/lunches/${id}`, { withCredentials: true });
            console.log(res.data);
            console.log(id);
            navigate(`/updatelunch/${id}`);
        } catch (error) {
            setErrorText("An error occurred while fetching the data.");
            console.error(error);
        }
    };

    return (
        <>
            <button onClick={submit} type="button" className="btn btn-sm btn-outline-secondary">
                Update
            </button>
        </>
    );
};

export default UpdateLunch;