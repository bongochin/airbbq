import React from 'react';
import './SearchResult.css';
import EcoIcon from '@material-ui/icons/Eco';
import StarIcon from "@material-ui/icons/Star";
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';

function SearchResult({
    id,
    img,
    borough,
    name,
    description,
    rating,
    cleanliness,
    numOfPits,
    bench,
    garbageCan,
}) {
  const history = useHistory();

    return (
        <div className='searchResult' onClick={() => history.push(`../reserve/${id}`)}>
            <img src={img} alt="" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{borough}</p>
                    <h3>{name}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="rating">
                        <StarIcon className="fiveStarRating" />
                        <p>
                            <strong>{rating}</strong>
                        </p>
                    </div>
                    <div className="cleanliness">
                        <EcoIcon className="fiveStarRating" />
                        <p>
                            <strong>{cleanliness}</strong>
                        </p>
                    </div>
                    <div className="numOfPits">
                        <OutdoorGrillIcon className="fiveStarRating" />
                        <p>
                            <strong>{numOfPits}</strong>
                        </p>
                    </div>
                    <div className="bench">
                        <LocalDiningIcon className="fiveStarRating" />
                        <p>
                            <strong>{bench}</strong>
                        </p>
                    </div>
                    <div className="garbageCan">
                        <DeleteIcon className="fiveStarRating" />
                        <p>
                            <strong>{garbageCan}</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
