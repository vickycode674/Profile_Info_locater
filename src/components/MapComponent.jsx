import { useEffect, useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const MapComponent = ({ location }) => {
  const mapStyles = { height: "400px", width: "100%" };
  const [mapKey, setMapKey] = useState(0); // This forces re-render

  useEffect(() => {
    setMapKey((prevKey) => prevKey + 1); // Change key to re-render map
  }, [location]);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}  key={mapKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={location}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
