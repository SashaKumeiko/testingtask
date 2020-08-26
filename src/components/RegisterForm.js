import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Position from './Position';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Enter valid email'),

  name: Yup.string()
    .required('First name is required')
    .matches(/^[a-zA-Zа-яА-Я]+$/, {
      message: 'Allowed characters for is a-z, A-Z, а-я, А-Я.',
    }),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, {
      message: 'Enter phone in format +380XXXXXXXXX',
    }),
});

const RegisterForm = ({positions}) => {
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedPositionId, setSelectedId] = useState('');
  const [file, setFile] = useState(null)

  useEffect(() => {
    if (positions.length) {
      setSelectedPosition(positions[0].name);
      setSelectedId(positions[0].id);
    }
  }, [positions]);

  const radioHandler = (e) => {
    const positionData = JSON.parse(e.target.value);
    setSelectedPosition(positionData.name);
    setSelectedId(positionData.id);
  };

  const onChangeFiles=(e)=>{
    setFile(e.target.files[0])
  }
  console.log(file)

  return (
    <div>
    <form >
    <h1>File Upload</h1>
    <input type="file" onChange={onChangeFiles} />
    <button type="submit">Upload</button>
    </form>
      {positions.map(({id, name}) => (
        <Position
          key={id}
          nameAndId={{name, id}}
          selectedPosition={selectedPosition}
          selectedPositionId={selectedPositionId}
          radioHandler={radioHandler}
        />
      ))}
      <Formik
        positions={positions}
        file
        selectedPosition
        setSelectedId
        initialValues={{
          email: '',
          name: '',
          phone: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          console.log(values, selectedPosition, selectedPositionId, file);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          onSubmit,
        }) => (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="name"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={errors.name}
                touched={touched.name}
                target="form"
                label="First Name"
                required
              />
              <input
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email}
                touched={touched.email}
                placeholder="example@mail.com"
                target="form"
                label="Email"
                required
              />

              <input
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telephone}
                error={errors.telephone}
                touched={touched.telephone}
                placeholder="+380XXXXXXXXXXX"
                target="form"
                label="Phone number"
                required
              />

              <button type="submit" onClick={onSubmit}>
                Submit
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
