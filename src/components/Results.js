import React from "react";
import Virus from "./Virus";

const Results = ({ coronavius }) => {
	return (
		<div>
			{coronavius.length === 0 ? (
				<h1>No virus to show</h1>
			) : (
				coronavius.map(virus => {
					return (
						<Virus
                            confirmed={virus.latest.confirmed}
                            deaths={virus.latest.deaths}
                            recovered={virus.latest.recovered}
							key={virus.id}
							update={virus.last_updated}
							country={virus.country}
							country_code={virus.country_code}
							location={virus.province}
							id={virus.id}
						/>
					);
				})
			)}
		</div>
	);
};

export default Results;