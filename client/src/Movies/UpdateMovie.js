import React from 'react';
import { Formik, Form, Field } from "formik";

export default function UpdateMovie({movieList, match, updateMovie}) {
    const movieUpdate = movieList.find(item => {
        return item.id === Number(match.params.id);
    });
              
    debugger;
    return (
        <div>
      <Formik
        initialValues={movieUpdate}
        onSubmit={updateMovie}
        render={props => {
          return (
            <Form>              
              <label>
                Title
                <Field name="title" type="text" />
              </label>
              <label>
                Director
                <Field name="director" type="text" />
              </label>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      />
    </div>
    );
} 