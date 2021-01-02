import React, { useState, useEffect } from 'react';
import { FaCalendarTimes, FaMap, FaPhone } from 'react-icons/fa';
import { BsFillLockFill, BsFillPersonFill } from 'react-icons/bs';
import { HiMailOpen } from 'react-icons/hi';

function App() {
  const url = 'https://randomuser.me/api/'
  const defaultImg = 'https://randomuser.me/api/portraits/men/75.jpg'
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    id : 'default',
    img: defaultImg,
    name : 'Default Name',
    email : 'no value',
    age : 'no value',
    address : 'no value',
    phone : 'no value',
    password : 'no value',
  });
  const [focus, setFocus] = useState('name')

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    const info = data.results[0];
    setUser({
      id: info.id.value,
      img: info.picture.large,
      name : info.name.last + ' ' + info.name.first,
      email : info.email,
      age : info.dob.age,
      address : info.location.street.name + ' ' + info.location.street.number,
      phone : info.phone,
      password : info.login.password,
    })
    setFocus('name');
    setLoading(false);
  }

  const handleHover = (val) => {
    setFocus(val)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="App">
      <div className="user-container">
        <header>
          <div className="user-img-container">
            <img alt="user-img" src={user.img} className="user-img" />
          </div>
        </header>
        <footer>
          <p>My {focus} is</p>
          <h2>{user[focus]}</h2>
          <div className="btn-container">
            <button onMouseEnter={(e) => handleHover('name')}><BsFillPersonFill /></button>
            <button onMouseEnter={(e) => handleHover('email')}><HiMailOpen /></button>
            <button onMouseEnter={(e) => handleHover('age')}><FaCalendarTimes /></button>
            <button onMouseEnter={(e) => handleHover('address')}><FaMap /></button>
            <button onMouseEnter={(e) => handleHover('phone')}><FaPhone /></button>
            <button onMouseEnter={(e) => handleHover('password')}><BsFillLockFill /></button>
          </div>
          <button className="random-btn" onClick={fetchData}>
            {loading ? 'Loading...' : 'Random User'}
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;