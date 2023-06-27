import {useEffect, useState} from "react";
import axios from "axios";
import Card from "../components/CardNoVote.tsx";

const MostVotes = () => {

    const [cards, setCards] = useState();

    const mostVotedLunch = async () => {
        let res = await axios.get('http://localhost:3000/vote/mostvotedtoday');

        res = await axios.get(`http://localhost:3000/lunches/${res.data.lunch_id}`);
        setCards(res.data.name);
    }

    useEffect(() =>{mostVotedLunch()}, []);

    return(
        <>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <Card cardData={cards}/>;
                    </div>
                </div>
            </div>
        </>
    )
}

export default MostVotes;
