import React, { useState, useEffect } from "react";
import * as myData from "../data/dummy.json";
import mapboxgl from "mapbox-gl";
import ReactMapGL, {
  Markers,
  Popup,
  NavigationControl,
  MapController,
  Marker,
} from "react-map-gl";

const navControlStyle = {
  right: 10,
  top: 10,
};

console.log(myData.danger);
const Landing = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 10,
    width: "100vw",
    height: "100vh",
  });

  const [selectedDng, setSelectedDng] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  return (
    <div>
      <button onClick={() => console.log("clicked")}>add marker</button>
      <h3>Map conatiner</h3>
      {/* */}
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/mamina99/ckv7x2plt908w14p8x8ha0xe6"
      >
        {myData.danger.map((dng, index) => (
          <Marker
            key={index}
            latitude={dng.coordinates[0]}
            longitude={dng.coordinates[1]}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedDng(dng);
              }}
            >
              <img src={`images/${dng.type}.png`} alt="accident" />
            </button>
          </Marker>
        ))}
        {selectedDng ? (
          <Popup
            latitude={selectedDng.coordinates[0]}
            longitude={selectedDng.coordinates[1]}
            onClose={() => {
              setSelectedDng(null);
            }}
          >
            <div>
              <h2>{selectedDng.type}</h2>
              <h2>{selectedDng.nbresVehicule}</h2>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default Landing;
