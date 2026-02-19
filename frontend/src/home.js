import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Home() {
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState([]);
const [limit] = useState(3);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

  function getStudents() {
  const token = localStorage.getItem("token");

  axios.get(`http://localhost:8081/api/student?page=${page}&limit=${limit}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
.then((d) => {
  setUsers(d.data.students)
  setTotalPages(d.data.totalPages);
    })
      .catch((e) => {
      alert("unable to access api")
    })
  }
  useEffect(() => {
    getStudents();
  }, [page]);
  function renderBody()
  {
    return users?.map((item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.phnumber}</td>
          <td>{item.email}</td>
          <td>{item.university}</td>
          <td>{item.stream}</td>
       </tr>
     )
    })
  }
  return (
    <div>
      <div className='boader p-2 m-2 '>
        <table className='table table-bordered table-hover table-active border-dark'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>PhoneNo</th>
              <th>Email</th>
              <th>University</th>
              <th>Stream</th>
            </tr>
          </thead>
          <tbody>
            {renderBody()}
          </tbody>
        </table>
        
      </div>
      <div className="d-flex justify-content-center mt-3">
  <button 
    className="btn btn-primary me-2"
    disabled={page === 1}
    onClick={() => setPage(page - 1)}
  >
    Previous
  </button>

  <span className="align-self-center">
    Page {page} of {totalPages}
  </span>

  <button 
    className="btn btn-primary ms-2"
    disabled={page === totalPages}
    onClick={() => setPage(page + 1)}
  >
    Next
  </button>
</div>

    </div>
  )
}

export default Home