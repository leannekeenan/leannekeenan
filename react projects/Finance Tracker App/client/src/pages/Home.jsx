import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [formData, setFormData] = useState({
    what: '',
    where: '',
    category: '',
    price: '',
    when: '',
  });

  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/purchases');
      setPurchases(response.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/purchases', formData);
    setPurchases([...purchases, response.data]);
    setFormData({ what: '', where: '', category: '', price: '', when: '' });
  };
  
  return (
    <>
      <div className="data">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="what">What was purchased:</label>
            <input
              id="what"
              name="what"
              type="text"
              value={formData.what}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="where">Where was it purchased from:</label>
            <input
              id="where"
              name="where"
              type="text"
              value={formData.where}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="category">This can be categorized as:</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Choose an option</option>
              <option value="Gas">Gas</option>
              <option value="Car Payment">Car Payment</option>
              <option value="Vehicle Maintenance">Vehicle Maintenance</option>
              <option value="Parking">Parking</option>
              <option value="Toll">Toll</option>
              <option value="Rent">Rent</option>
              <option value="Groceries">Groceries</option>
              <option value="Appliances">Appliances</option>
              <option value="Decor">Decor</option>
              <option value="Office Supplies">Office Supplies</option>
              <option value="Restaurants">Restaurants</option>
              <option value="Coffee">Coffee</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Movies">Movies</option>
              <option value="Events">Events</option>
              <option value="Games">Games</option>
              <option value="Streaming Services">Streaming Services</option>
              <option value="Subscriptions">Subscriptions</option>
              <option value="Medical Insurance">Medical Insurance</option>
              <option value="Dental Insurance">Dental Insurance</option>
              <option value="Vision Insurance">Vision Insurance</option>
              <option value="Life Insurance">Life Insurance</option>
              <option value="Health Insurance">Health Insurance</option>
              <option value="Perscriptions">Perscriptions</option>
              <option value="Personal Care Product">Personal Care Product</option>
              <option value="Personal Care Service">Personal Care Service</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Educational Loans">Educational Loans</option>
              <option value="Online Courses">Online Courses</option>
              <option value="Travel Rental">Travel Rental</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="price">How much was it: </label>
            <input
              id="price"
              name="price"
              type="text"
              value={formData.price}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="when">When was it purchased: </label>
            <input
              id="when"
              name="when"
              type="date"
              value={formData.when}
              onChange={handleChange}
            />
          </fieldset>

          <button type="submit">Add Purchase</button>
        </form>
      </div>

      <div className='analysis'>
        <h2>Purchase List</h2>
        <table>
          <thead>
            <tr>
              <th>What</th>
              <th>Where</th>
              <th>Category</th>
              <th>Price</th>
              <th>When</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase, index) => (
              <tr key={index}>
                <td>{purchase.what}</td>
                <td>{purchase.where}</td>
                <td>{purchase.category}</td>
                <td>{purchase.price}</td>
                <td>{purchase.when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
