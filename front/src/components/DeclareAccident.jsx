import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Form, Formik, Field } from "formik";

const DeclareAccident = () => {
  const handleSubmit = (values) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <div>
      <Header />
      <Formik
        initialValues={{
          danger: "accident",
          vehiculeType: "2roues",
          blessure: "leger",
          genre: "homme",
          commentaire: "",
          photo: "",
        }}
        onSubmit={handleSubmit}
      >
        {(formProps) => (
          <Form>
            <Field as="select" name="danger">
              <option value="accident">Accident</option>
              <option value="innondation">Innondation</option>
              <option value="incendie">Incendie</option>
              <option value="incident">Incident</option>
            </Field>
            <Field as="select" name="vehiculeType">
              <option value="2roues">2 Roues</option>
              <option value="vehicule">véhicule</option>
              <option value="bus">Bus</option>
              <option value="tram">Tram</option>
              <option value="poidsLourd">poids Lourd</option>
            </Field>

            <Field as="select" name="blessure">
              <option value="leger">Léger</option>
              <option value="grave">grave</option>
              <option value="deces">décès</option>
            </Field>

            <Field as="select" name="genre">
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
            </Field>

            <Field as="textarea" name="commentaire"></Field>
            <input
              type="file"
              name="file"
              onChange={(event) => {
                formProps.setFieldValue("photo", event.target.files[0]);
              }}
            />
            <button type="Submit">Submit</button>
          </Form>
        )}
      </Formik>
      <Footer />
    </div>
  );
};

export default DeclareAccident;
