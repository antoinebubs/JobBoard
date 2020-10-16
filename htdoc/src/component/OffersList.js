import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "./style/offersList.css"
import useInfiniteScroll from "./useInfiniteScroll"

const OfferList = () => {
    const url = "http://localhost:8000/api/readallAdds";
    const [listOffers, setListOffers] = useState([]);
    const [updatedList, setUpdatedList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setListOffers(result.data);
            setUpdatedList(result.data.slice(0,30));
        }
        fetchData()
    }, [] );

    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
    
    function fetchMoreListItems() {
      setTimeout(() => {
        const tempList = listOffers.results.slice(updatedList.length, updatedList.length + 30);
        setUpdatedList(updatedList.concat(tempList));
        setIsFetching(false);
      }, 2000);
    }

    console.log(listOffers)

    return (
        <div className="offerList">
             {updatedList.map(list =>
                <div key={list.id} className="Offers">
                    <div id="offerText">
                        <div id="offersTitle">{list.Titre} {list.EmployeurID}</div>
                        <div id="offersDescription">{list.Description}</div>
                    </div>
                </div>
            )}
            {isFetching && 'Fetching more list items...'}
        </div>
    )
};

export default OfferList; 