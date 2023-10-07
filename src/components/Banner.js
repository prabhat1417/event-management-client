import React from 'react';
import './Banner.css';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Body = ({ eventList, setFilteredEvents, setSearchQuery }) => {
  const image_url = 'https://artisanproductions.org/wp-content/uploads/2020/02/Lighting1-min-scaled.jpg';

  const uniqueCities = [...new Set(eventList.map(event => event.location))];
  const uniqueCategories = [...new Set(eventList.map(event => event.category))];

  const cityList = uniqueCities.map((city, index) => ({
    id: index + 1,
    name: city
  }));

  const categoryList = uniqueCategories.map((category, index) => ({
    id: index + 1,
    name: category
  }));

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    filterEvents();
  }, [selectedCity, selectedCategory, selectedDate, eventList]);

  const filterEvents = () => {
    const filtered = eventList.filter((event) => {
      const cityMatch = !selectedCity || event.location === selectedCity;
      const categoryMatch = !selectedCategory || event.category === selectedCategory;
  
      const eventDate =
        event.start_time && new Date(event.start_time.split('/').reverse().join('-'));
        
      const dateMatch =
        !selectedDate ||
        (!eventDate && false) ||
        (eventDate && eventDate >= selectedDate);
  
      return cityMatch && categoryMatch && dateMatch;
    });
  
    setFilteredEvents(filtered);
  };
  
  return (
    <div className="homesection" style={{ backgroundImage: `url(${image_url})` }}>
      <div className="content">
      <h1 style={{color:"white",fontSize:"35px"}}>Experience the Best of Your City's Events!</h1>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search events"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="search-options">
        <div className='filter-section'>
          <label htmlFor="city">
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">City</option>
              {cityList.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="category">
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Category</option>
              {categoryList.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

        </div>

        <div className='cal'>

          <label htmlFor="date">
              <DatePicker
                id="date"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="Filter by Date"
              />
            </label>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Body;