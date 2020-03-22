import React from "react";
import { Link } from 'react-router-dom'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const Data = ({ ids, location, hotconfir, hotdeath, hotcoved, lprovince, longitude, latitude, lastupdate }) => {
    const position = [latitude, longitude];

    return (
      <div>
        <div>
        <Map center={position} zoom={14}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
          </Map>
          </div>
        <div key={ids}>
          <h1>{ids}</h1>
          <span>{location}</span> - <small>{hotconfir}</small>
          <h1>{hotdeath}</h1>
          <h2>{hotcoved}</h2>
          <h2>{lprovince}</h2>
          <h5>{lastupdate}</h5>
          <ul></ul>
        </div>
      </div>
    );
};
export default Data;