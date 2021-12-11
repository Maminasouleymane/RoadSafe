import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function DeclareAccident() {
  const [coordinate, setCoordinates] = useState([0, 0]);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCoordinates([
        parseInt(pos.coords.latitude),
        parseInt(pos.coords.longitude),
      ]);
    });
  }, []);
  console.log(coordinate);
  const onSubmit = (data) => {
    // console.log(data);

    const accidentDetails = new FormData();
    accidentDetails.append("coordinate", JSON.stringify(coordinate));
    accidentDetails.append("danger", data.danger);
    // accidentDetails.append("vehiculeType", coordinates.vehiculeType);
    // accidentDetails.append("blessure", coordinates.blessure);
    // accidentDetails.append("genre", coordinates.genre);
    accidentDetails.append("commmentaire", data.commentaire);
    // accidentDetails.append("confirmed", coordinates.confirmed);
    accidentDetails.append("photo", data.photo[0]);
    console.log(accidentDetails);
    axios({
      method: "post",
      url: "http://localhost:3004/accident",
      data: accidentDetails,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        alert(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(data.photo[0]);
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="textarea" {...register("commentaire")} />
        <select {...register("danger")}>
          <option value="accident">Accident</option>
          <option value="innondation">Innondation</option>
          <option value="incendie">Incendie</option>
          <option value="incident">Incident</option>
        </select>
        <input type="file" {...register("photo")} />
        <input type="submit" />
      </form>
      <Footer />
    </div>
  );
}
// export default DeclareAccident;
