import { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    
  },[])
  const [form, setForm ] = useState({ name: "", address: "", phnumber: "", email: "", university: "", stream: "", fees: "", password: "" });
  const [error, setError] = useState({ name: "", address: "", phnumber: "", email: "", university: "", stream: "", fees: "", password: "" });
  const changeHandler = ((e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  });
  function save()
  {
    axios.post("http://localhost:8081/api/student/register", form)
      .then((d) => {
        alert(d.data.message);
        navigate("/login");
        resetForm();
      })
      .catch((error) => {
        alert(error);
    })
  };
  function onSubmit() {
    let Errors = false;
    let error = { name: "", address: "", phnumber: "", email: "", university: "", stream: "", fees: "", password: "" }
    if (form.name.trim().length === 0) {
      Errors = true;
      error = { ...error, name: "Name Field is Empty!!!" };
    };
    if (form.address.trim().length === 0) {
      Errors = true;
      error = { ...error, address: "Address Field is Empty!!!" }
    }
    if (form.phnumber.trim().length === 0) {
      Errors = true;
      error = { ...error, phnumber: "PhoneNumber Field is Empty!!!" }
    }
    if (form.email.trim().length === 0) {
      Errors = true;
      error = { ...error, email: "Email Field is Empty!!!" }
    }
    if (form.university.trim().length === 0) {
      Errors = true;
      error = { ...error, university: "University Field is Empty!!!" }
    }
    if (form.stream.trim().length === 0) {
      Errors = true;
      error = { ...error, stream: "Strem Field is Empty!!!" }
    }
    if (form.fees.trim().length === 0) {
      Errors = true;
      error = { ...error, fees: "Fees Field is Empty!!!" }
    }
    if (form.password.trim().length === 0)
    {
      Errors = true;
      error = {...error,password:"Password Field is Empty!!!"}
    }
    if (Errors)
    {
      setError(error);
    }
    else {
      setError(error);
      
      save();
    }
  }
  function resetForm()
  {
    setForm({ name: "", address: "", phnumber: "", email: "", university: "", stream: "", fees: "", password: "" });
  }
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header className='bg-primary text-white'>
          <h4 className='center'>Register Here</h4>
        </Modal.Header>

        <Modal.Body>
          <div className='form-group row'>
            <label className='col-4'> Name:</label>
            <div className='col-8'>
              <input type="text" name='name' className='form-control' value={form.name} onChange={changeHandler} />
              <p className='text-danger'>{error.name}</p>
            </div>
          </div>&nbsp;
          <div className='form-group row'>
            <label className='col-4'> Address:</label>
            <div className='col-8'>
              <input type="text" name='address' className='form-control' value={form.address} onChange={changeHandler} />
              <p className='text-danger'>{error.address}</p>
            </div>
          </div>&nbsp;
          <div className='form-group row'>
            <label className='col-4'> PhoneNumber:</label>
            <div className='col-8'>
              <input type="text" name='phnumber' className='form-control' value={form.phnumber} onChange={changeHandler} />
              <p className='text-danger'>{error.phnumber}</p>
            </div>
          </div>&nbsp;
          <div className='form-group row'>  
            <label className='col-4'>Email:</label>
            <div className='col-8'>
              <input type='email' name='email' className='form-control' value={form.email} onChange={changeHandler} />
              
              <p className='text-danger'>{error.email}</p>
            </div>
          </div> &nbsp;
            <div className='form-group row'>
            <label className='col-4'> University:</label>
            <div className='col-8'>
              <input type="text" name='university' className='form-control' value={form.university} onChange={changeHandler} />
              <p className='text-danger'>{error.university}</p>
            </div>
          </div>&nbsp;
            <div className='form-group row'>
            <label className='col-4'> Stream:</label>
            <div className='col-8'>
              <input type="text" name='stream' className='form-control' value={form.stream} onChange={changeHandler} />
              <p className='text-danger'>{error.stream}</p>
            </div>
          </div>&nbsp;
            <div className='form-group row'>
            <label className='col-4'> Fees:</label>
            <div className='col-8'>
              <input type="text" name='fees' className='form-control' value={form.fees} onChange={changeHandler} />
              <p className='text-danger'>{error.fees}</p>
            </div>
          </div>&nbsp;
          <div className='form-group row'>
            <lable className="col-4">Password</lable>
            <div className='col-8'>
              <input className='form-control' type="password" name="password" value={form.password} onChange={changeHandler} />
              <p className='text-danger'>{error.password}</p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          
          <Button variant="primary" onClick={(() => {
            onSubmit();
          })}>Register</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Register;