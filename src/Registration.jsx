import React, { useEffect, useRef, useState } from 'react'
import Data from './Apidata'
import axios from 'axios';
import "./App.css";
function Registration() {
  //empty fields
  let clearPicField = useRef(null)
  let empty = {
    name: '',
    age: '',
    city: '',
    email: '',
    phone: '',
    pic: '',
    address: ''
  }
  //id increment hook
  let [incId, setincId] = useState([])
  let Increment = (person) => {
    person.id = incId.length + 1;
    setincId([...incId, person])
  }

  //input field hook
  let [handle, sethandle] = useState(empty)
  let handlechange = (e) => {
    let { name, value, type, files } = e.target;

    if (type === "file") {
      sethandle({
        ...handle,
        [name]: URL.createObjectURL(files[0])   // create a preview URL
      });
    } else {
      sethandle({
        ...handle,
        [name]: value
      });
    }
  };
  //backend attachment
  let fetchData = async () => {
    try {
      let res = await axios.get("http://localhost:4000/show")
      setincId(res.data)
    } catch (err) {
      console.log('error fetching data', err);

    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  // ...........................................
  let [editData, Seteditdata] = useState(null);
  // ...........................................
  let handlesubmit = async (e) => {
    e.preventDefault();

    try {
      if (editData) {
        await axios.put(`http://localhost:4000/update/${editData}`, handle)
        alert(
          `you data has been submitted susseccfuly !
    Name: ${handle.name}
    Age:${handle.age}
    City:${handle.city}
    Email:${handle.email}
    phone:${handle.phone} 
    Pic:${handle.pic} 
    Address:${handle.address}
`
        )
        Seteditdata(null)
      } else {
        await axios.post("http://localhost:4000/post", handle)
        alert(
          `you data has been submitted susseccfuly !!!!
          <br>
    Name:  ${handle.name}
    Age:   ${handle.age}
    City:   ${handle.city}
    Email:   ${handle.email}
    phone:   ${handle.phone} 
    Pic:   ${handle.pic} 
    Address:   ${handle.address}
`
        )
      }
      sethandle(empty)
      clearPicField.current.value = ""
      fetchData()
    } catch (err) {
      console.log('error posting data', err);

    }
  }
  // .................................................
  let handledelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/del/${id}`)
      fetchData()
    } catch (err) {
      console.log('error dleting data', err);

    }
  }

  // ..................................................
  let handleEdit = (pro) => {
    sethandle({
      name: pro.name,
      age: pro.age,
      city: pro.city,
      email: pro.email,
      phone: pro.phone,
      pic: pro.pic,
      address: pro.address
    })
    Seteditdata(pro._id)
    //...................................................

  }
  return (
    //user form
    <div>
      <div className='container w-50 mt-5 mb-5' id='a14'>
        <h1 className='text-center text-decoration-underline'>Register Yourself</h1>
        <form action=""
          onSubmit={handlesubmit}
        >
          <label htmlFor="">Name</label>
          <input name="name" onChange={handlechange} value={handle.name} type="text" className='form-control' placeholder='Enter Your Name' id='a15' />
          <label htmlFor="">Age</label>
          <input name="age" onChange={handlechange} value={handle.age} type="text" className='form-control' placeholder='Enter Your Age' id='a15' />
          <label htmlFor="">City</label>
          <input name="city" onChange={handlechange} value={handle.city} type="text" className='form-control' placeholder='Enter Your City' id='a15' />
          <label htmlFor="">Email</label>
          <input name="email" onChange={handlechange} value={handle.email} type="email" className='form-control' placeholder='Enter Your Email' id='a15' />
          <label htmlFor="">Phone</label>
          <input name="phone" onChange={handlechange} value={handle.phone} type="number" className='form-control' placeholder='Enter Your Number' id='a15' />
          <label htmlFor="">Pic</label>
          <input name="pic" type="file" onChange={handlechange} ref={clearPicField} className='form-control' id='a15' />
          <label htmlFor="">Address</label>
          <input name='address' onChange={handlechange} value={handle.address} type="text " className='form-control' placeholder='Enter Your Address' id='a15' />
          <input type="submit" className='btn btn-primary w-100 mt-3 text-dark mb-3 a15' id='a15' />
        </form>
      </div>

      {/* ............................table.............. */}
      <center>
        <div className='w-75 mt-5 mb-5'>
          <table className='table table-bordered table-hover table-striped'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Pic</th>
                <th>Address</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                incId.map((pro, index) => (
                  <tr key={pro._id}>
                    <td>{index + 1}</td>
                    <td>{pro.name}</td>
                    <td>{pro.age}</td>
                    <td>{pro.city}</td>
                    <td>{pro.email}</td>
                    <td>{pro.phone}</td>
                    <td>
                      {pro.pic && <img src={pro.pic} alt="pic" width="60" />}</td>
                    <td>{pro.address}</td>
                    <td><button onClick={() => handledelete(pro._id)}>Del</button></td>
                    <td><button onClick={() => handleEdit(pro)}>Update</button></td>

                  </tr>
                ))

              }
            </tbody>
          </table>
        </div>
      </center>
    </div>
  )
}

export default Registration