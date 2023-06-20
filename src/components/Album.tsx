import Card from "./Card.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

const Album = () => {

    const [cards, setCards] = useState([]);

    const loadLunches = async () => {
        const res = await axios.get('http://localhost:3000/lunches');
        setCards(res.data);
    }

    useEffect(() =>{loadLunches()}, []);


    return(
        <>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            cards.map((card:never, i) =>{
                                return <Card cardData={card} key={i}/>;
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Album;
