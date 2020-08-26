import React, {useState} from 'react';
import Position from './Position';
import {useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup';
import {string, number} from 'yup';

const FormData = ({positions, errors, touched, validateForm, ...props}) => {
  console.log(positions);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedPositionId, setSelectedId] = useState('')

  useEffect(() => {
    if (positions.length) {
        setSelectedPosition(positions[0].name);
        setSelectedId(positions[0].id)
    };
  }, [positions]);

  const radioHandler = (e) => {
    const positionData=JSON.parse(e.target.value);
    setSelectedPosition(positionData.name);
    setSelectedId(positionData.id)
  };

  return (
    <div>
      <Form className="form">
        <Field className="field" name="name" placeholder="enter name"></Field>
        {errors.name && touched.name ? <div>{errors.name}</div> : null}
        <Field
          className="field"
          name="email"
          placeholder="enter email"
        />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
        <Field
          className="field"
          name="phone"
          placeholder="enter phone number"
        />
        {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
        <button disabled={!props.isValid}>Send</button>
        {positions.map(({id, name, defaultChecked}) => (
            <Position
              key={id}
              nameAndId={{name,id}}
              selectedPosition={selectedPosition}
              selectedPositionId = {selectedPositionId}
              defaultChecked={defaultChecked}
              radioHandler={radioHandler}
            />
          ))}
          {selectedPositionId}
      </Form>

    </div>
  );
};

const Registration = withFormik({
  mapPropsToValues() {
    return {
      name: '',
      email: '',
      phone: '',
    };
  },
  isInitialValid: false,
  validationSchema: yup.object().shape({
    name: string().required(),
    email: string().required(),
    phone: number().required().positive().integer(),
    // phone: string().matches(/^[0-9]\d{9}$/, {
    //     message: 'Please enter valid number.',
    //     excludeEmptyString: false,
    //   }),
  }),
  handleSubmit(values) {
    console.log('submited data ', values);
  },
})(FormData);

export default Registration;
