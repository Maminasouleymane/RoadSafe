import React from "react";
import { useFormik, Form, Formik, Field } from "formik";

// const MyInput = ({ field, form, ...props }) => {
//   return <input {...field} {...props} />;
// };

// const validate = (values) => {
//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

// const DeclareAccident = () => {
//   return (
//     <div>
//       <h1>Accident form</h1>
//       <Formik
//         initialValues={{
//           danger: "accident",
//           vehiculeType: "2roues",
//           blessure: "leger",
//           genre: "homme",
//           commentaire: "",
//           img: "",
//         }}
//         onSubmit={(values, actions, e) => {
//           alert(JSON.stringify(values, null, 2));
//           // console.log(values);
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             actions.setSubmitting(false);
//           }, 1000);
//         }}
//       >
//         {(formProps) => (
//           <form>
//             <Field as="select" name="danger">
//               <option value="accident">Accident</option>
//               <option value="innondation">Innondation</option>
//               <option value="incendie">Incendie</option>
//               <option value="incident">Incident</option>
//             </Field>
//             <Field as="select" name="vehiculeType">
//               <option value="2roues">2 Roues</option>
//               <option value="vehicule">véhicule</option>
//               <option value="bus">Bus</option>
//               <option value="tram">Tram</option>
//               <option value="poidsLourd">poids Lourd</option>
//             </Field>

//             <Field as="select" name="blessure">
//               <option value="leger">Léger</option>
//               <option value="grave">grave</option>
//               <option value="deces">décès</option>
//             </Field>

//             <Field as="select" name="genre">
//               <option value="homme">Homme</option>
//               <option value="femme">Femme</option>
//             </Field>

//             <Field as="textarea" name="commentaire"></Field>

//             <input
//               id="file"
//               name="img"
//               type="file"
//               onChange={(event) =>
//                 formProps.setFieldValue("img", event.target.files[0])
//               }
//             />

//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// };

const DeclareAccident = () => {
  return (
    <div>
      <Formik
        initialValues={{
          img: "",
        }}
        onSubmit={(values) => {
          let data = new FormData();
          data.append("img", values.img);
          // return fetch();
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formProps) => (
          <Form>
            <Field as="select" name="danger">
              <option value="accident">Accident</option>
              <option value="innondation">Innondation</option>
              <option value="incendie">Incendie</option>
              <option value="incident">Incident</option>
            </Field>
            <input
              type="file"
              name="img"
              onChange={(event) =>
                formProps.setFieldValue("img", event.target.files[0])
              }
            />
            <input type="submit" value="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DeclareAccident;
