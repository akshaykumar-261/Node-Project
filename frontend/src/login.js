import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const changeHandler = ((e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  });
  function save()
  {
    axios.post("http://localhost:8081/api/student/login", form)
      .then((d) => {
        localStorage.setItem("id", d.data._id);
        localStorage.setItem("email", d.data.email);
        localStorage.setItem("token", d.data.token);
        sessionStorage.setItem("token", d.data.token);
        alert(d.data.message);
        
        resetForm();
        navigate("/home");
    })
  }
  function onSubmit()
  {
    const Errors = false;
    const error = {email: "", password: ""};
    if (form.email.trim().length === 0) {
      Errors = true;
      error = { ...error, email: "Email Field is Empty!!!" }
    }
     if (form.password.trim().length === 0)
    {
      Errors = true;
      error = {...error,password:"Password Field is Empty!!!"}
     }
    if(Errors)
    {
      setError(error);
    }
    else
    {
      setError(error);
      save();
    }
  }
  function resetForm()
  {
    setForm({ email: "", password: "" });
  }
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header className='bg-primary text-white' >
         <h4>Login Here</h4>
        </Modal.Header>

        <Modal.Body>
          
            <div className='form-group row p-2 m-2'>
              <label className='col-4'>UserName:</label>
               <div className='col-8'>
                <input className='form-control' type='email' name="email" value={form.email} onChange={changeHandler} />
                </div>
           </div>
          <div className='form-group row p-2 m-2'>
            <label className='col-4'>Password:</label>
            <div className='col-8'>
             <input className='form-control' type='password' name="password" value={form.password} onChange={changeHandler}/>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => {
            onSubmit();
          }}>Login</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Login;