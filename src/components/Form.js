import React, { useState,useEffect } from 'react';
import './Form.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../Axios';

const Form = () => {
  const [data, setData] = useState({
    event_name: '',
    start_time: '',
    end_time: '',
    location: '',
    description: '',
    category: '',
    banner_image: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.data) {
      setData(location.state.data);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...data,
      start_time: new Date(data.start_time).toLocaleDateString('en-GB'),
      end_time: new Date(data.end_time).toLocaleDateString('en-GB'),
    };

      const queryParams = Object.keys(formattedData)
        .map((key) => `${key}=${encodeURIComponent(formattedData[key])}`)
        .join('&');

      axios.get(`/add_events.php?${queryParams}`)
        .then((response) => {
          navigate('/');
        })
        .catch((error) => {
          console.log('error ' + error);
        });
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className='event-form'>
      <div className='form-container'>
        <h1>Create Event</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='event_name' className='label-inline'>
              Event Name:
            </label>
            <input
              type='text'
              id='event_name'
              name='event_name'
              placeholder='Event Name'
              value={data.event_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='start_time' className='label-inline'>
              Start Date:
            </label>
            <input
              type='date'
              id='start_time'
              name='start_time'
              value={data.start_time}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='end_time' className='label-inline'>
              End Date:
            </label>
            <input
              type='date'
              id='end_time'
              name='end_time'
              value={data.end_time}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='location' className='label-inline'>
              Location:
            </label>
            <input
              type='text'
              id='location'
              name='location'
              placeholder='Location'
              value={data.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='description' className='label-inline'>
              Description:
            </label>
            <textarea
              id='description'
              name='description'
              placeholder='Description'
              value={data.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='category' className='label-inline'>
              Category:
            </label>
            <input
              type='text'
              id='category'
              name='category'
              placeholder='Category'
              value={data.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='banner_image' className='label-inline'>
              Image Link:
            </label>
            <input
              type='text'
              id='banner_image'
              name='banner_image'
              placeholder='Your image link'
              value={data.banner_image}
              onChange={handleChange}
            />
          </div>

          <button style={{backgroundColor:"blue"}} onClick={handleSubmit} type='submit'>Create Event</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
