import React, {useEffect, useState} from 'react';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Position from '../Position/Position';
import signUp from '../../requests/signUp';
import {useStateValue} from '../../contexts/stateProvider';
import {RESET_QUANTITY} from '../../contexts/reducer';
import Button from '../Buttons/Button';
import {Modal} from 'react-bootstrap';

import './registerForm.scss';

const RegisterSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
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

const RegisterForm = ({positions, setUsers}) => {
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedPositionId, setSelectedId] = useState('');
  const [photo, setFile] = useState(null);
  const [show, setShow] = useState(false);

  const [state, dispatch] = useStateValue();

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

  const onChangeFiles = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="registration" className="registerForm">
      <h2 className="registerForm__title">Register to get a work</h2>
      <p className="registerForm__attention">
        Attention! After successful registration and alert, update the list of
        users in the block from the top
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulatiions</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfuly passed the registration</Modal.Body>
        <Modal.Footer>
          <Button text="Great" onClick={handleClose}></Button>
        </Modal.Footer>
      </Modal>
      <Formik
        handleShow={handleShow}
        setUsers={setUsers}
        positions={positions}
        photo
        setSelectedId
        initialValues={{
          email: '',
          name: '',
          phone: '',
          photo: null,
        }}
        validationSchema={RegisterSchema}
        onSubmit={async (values) => {
          if (!photo) {
            alert('select the file!');
            return;
          }
          values.position_id = selectedPositionId;
          values.photo = photo;
          if (await signUp(values)) {
            dispatch({type: RESET_QUANTITY});
            handleShow();
          }
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
          <div className="w-100">
            <form onSubmit={handleSubmit}>
              <div className="registerForm__inputsContainer">
                <div className="registerForm__inputName">
                  <span>Name</span>
                </div>
                <input
                  className="registerForm__input"
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
                <div className="error-container">
                  <ErrorMessage name="name" />
                </div>
                <div className="registerForm__inputName">
                  <span>Email</span>
                </div>
                <input
                  className="registerForm__input"
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
                <div className="error-container">
                  <ErrorMessage name="email" />
                </div>
                <div className="registerForm__inputName">
                  <span>Phone number</span>
                </div>
                <input
                  className="registerForm__input"
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
                <span className="registerForm__textUnderPhone">
                  Enter phone number in open format
                </span>
                <div className="error-container">
                  <ErrorMessage name="phone" />
                </div>
              </div>
              <div></div>
              <div className="registerForm__positionsContainer">
                <h6 className='registerForm__positionsTitle'>Select your position</h6>
                <form className="registerForm__positions">
                  {positions.map(({id, name}) => (
                    <Position
                      key={id}
                      nameAndId={{name, id}}
                      selectedPosition={selectedPosition}
                      selectedPositionId={selectedPositionId}
                      radioHandler={radioHandler}
                    />
                  ))}

                  <h6 className="registerForm__uploadTitle">Photo</h6>
                  <label className="registerForm__upload" for="upload">
                    <div>
                      {' '}
                      Upload your photo <span className="browse">
                        Browse
                      </span>{' '}
                    </div>
                  </label>
                  <span>{photo?.name}</span>
                  <input
                    type="file"
                    onChange={onChangeFiles}
                    id="upload"
                    className="d-none"
                  />
                </form>
                <Button
                  text="Sign up now"
                  type="submit"
                  onClick={onSubmit}
                  additionalClass="button--regPos"
                />
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
