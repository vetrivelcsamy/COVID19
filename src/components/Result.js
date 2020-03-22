import React from "react";
import Data from "./Data";

const Result = ({coronadatas}) => {
	return (
		<div>
			{coronadatas.length === 0 ? (
				<h1>No virus to show</h1>
			) : (
				(
                        < Data ids={
                            coronadatas.location.id
                        }
                            location={
                                coronadatas.location.country
                            }
                            hotconfir={
                                coronadatas.location.latest.confirmed
                            }
                            hotdeath={
                                coronadatas.location.latest.deaths
                            }
                            hotcoved={
                                coronadatas.location.latest.recovered
                            }
                            lprovince={
                                coronadatas.location.province
                            }
                            lastupdate = {
                                coronadatas.location.last_updated
                            }
                            latitude={
                               coronadatas.location.coordinates.latitude
                           }
                            longitude = {
                                coronadatas.location.coordinates.longitude
                            }
                            code = {
                              coronadatas.location.country_code
                            }
                            />
				)
			)}
		</div>
	);
};

export default Result;