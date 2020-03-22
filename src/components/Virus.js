import React from "react";
import { Link } from 'react-router-dom'

const Virus = ({
        confirmed,
        deaths,
        recovered,
        update,
        country,
        country_code,
        location, id
    }) => {
	return (
        <div>
            <Link to={`/details/${id}`}>
                    <h1>{country}</h1>
				<h2>
					{update} -{deaths} - {location}
				</h2>
			</Link>
		</div>
	);
};
export default Virus;