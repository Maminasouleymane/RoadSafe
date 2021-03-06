import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import mapboxgl from "mapbox-gl";
import ReactMapGL, {
  Marker,
  Popup,
  MapController,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: "10px",
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: "10px",
};

const navStyle = {
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: "10px",
};

const MapCurrentState = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 10,
    width: "100vw",
    height: "100vh",
  });

  const [selectedDng, setSelectedDng] = useState(null);
  const [accidentInfo, setAccidentInfo] = useState([]);

  const populateMap = async () => {
    await axios
      .get("http://localhost:3004/accidents")
      .then((response) => setAccidentInfo(response.data));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
    populateMap();
  }, []);

  console.log(accidentInfo);

  return (
    <div>
      <Header />
      <h3> this page should contains the map current Statet </h3>
      <button onClick={() => console.log("clicked")}>add marker</button>
      <h3>Map conatiner</h3>
      {/* */}
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/mamina99/ckv7x2plt908w14p8x8ha0xe6"
      >
        {accidentInfo.map((dng, index) => (
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
              <img src={`images/${dng.danger}.png`} alt="accident" />
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
              <h2>{selectedDng.danger}</h2>
              <h2>{selectedDng.commentaire}</h2>
              <h3>{selectedDng.blessure}</h3>
              <h2>{selectedDng.commentaire}</h2>
              <img
                src={`uploads/${selectedDng.images}`}
                style={{ height: "40px" }}
              />
            </div>
          </Popup>
        ) : null}
        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </ReactMapGL>
      <Footer />
    </div>
  );
};

export default MapCurrentState;
