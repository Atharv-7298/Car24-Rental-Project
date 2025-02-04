import React, { useContext, useEffect, useState, useRef } from "react";
import "./CarView.css";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext.jsx";

const CarView = () => {
  const { id } = useParams();
  const { all } = useContext(StoreContext);
  const { addToCart } = useContext(StoreContext);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    adharNumber: "",
    contact: "",
    pickUpDate: "",
    pickUpTime: "",
    dropDate: "",
    dropTime: "",
    withDriver: false,
    driverDays: 0,
  });

  const formRef = useRef(null); // Create a ref for the form section

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const item = all.find((item) => item.id === parseInt(id));
  if (!item) {
    return <div className="car-view">Item not found!</div>;
  }

  const pricePerWeek = Math.round(item.price * 7 * 0.9);
  const pricePerMonth = Math.round(item.price * 30 * 0.8);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRentNowClick = () => {
    setShowForm(true); // Show the form
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to form if it exists
      }
    }, 100); // Ensure form is rendered before scrolling
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Booking Details Submitted!");
  };

  return (
    <div className={`car-view ${showForm ? "expanded" : ""}`}>
      <div className="car-container">
        {/* Left Section */}
        <div className="car-left">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
        </div>

        {/* Right Section */}
        <div className="car-right">
          <h3>Details:</h3>
          <div className="details-row">
            {item.category === "Car" && <p>Seats: {item.seat}</p>}
            {item.category === "Bike" && <p>Type: {item.type}</p>}
          </div>

          <div className="price-labels">
            <div className="price-label-container">
              <div className="price-row">
                <div className="price-label1">
                  <span className="price-text">${item.price}</span>
                  <span className="duration-text">/day</span>
                </div>
                <div className="price-label2">
                  <span className="price-text">${pricePerWeek}</span>
                  <span className="duration-text">/week</span>
                </div>
              </div>
              <div className="price-label3">
                <span className="price-text">${pricePerMonth}</span>
                <span className="duration-text">/month</span>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="rent-now" onClick={handleRentNowClick}>
              Rent Now
            </button>
            <button onClick={() => addToCart(item.id)} className="add-to-cart">
              Add to Cart
            </button>
          </div>
        </div>
      </div>


      {/* Booking Details and Advertisement */}
      {showForm && (
            <div className="booking-details" ref={formRef}>
                  <h2>Book Your Ride Here</h2>
                  <form onSubmit={handleSubmit}>
                    {/* Customer Info */}
                    <div className="form-row">
                      <label>Customer Name: <input type="text" name="name" value={formData.name} onChange={handleFormChange} required /></label>
                      <label>Aadhar Number: <input type="text" name="adharNumber" value={formData.adharNumber} onChange={handleFormChange} required /></label>
                      <label>Contact Number: <input type="text" name="contact" value={formData.contact} onChange={handleFormChange} required /></label>
                    </div>
                    <div className="form-row">
                      <label className="pick">Pick-Up Date: <input type="date" name="pickUpDate" value={formData.pickUpDate} onChange={handleFormChange} required /></label>
                      <label>Pick-Up Time: <div className="time-input"><input type="number" name="pickUpHour" value={formData.pickUpHour} onChange={handleFormChange} min="1" max="12" required /><select name="pickUpAMPM" value={formData.pickUpAMPM} onChange={handleFormChange} required><option value="AM">AM</option><option value="PM">PM</option></select></div></label>
                      </div>
                    <div className="form-row">
                      <label className="drop">Drop Date: <input type="date" name="dropDate" value={formData.dropDate} onChange={handleFormChange} required /></label>
                      <label>Drop Time: <div className="time-input"><input type="number" name="dropHour" value={formData.dropHour} onChange={handleFormChange} min="1" max="12" required /><select name="dropAMPM" value={formData.dropAMPM} onChange={handleFormChange} required><option value="AM">AM</option><option value="PM">PM</option></select></div></label>
                    </div>
                    <div className="form-row">
                      <div className="driver-option">
                        <input type="checkbox" name="withDriver" checked={formData.withDriver} onChange={handleFormChange} />
                        <p>With Driver ($1000/day):</p>
                        {formData.withDriver && (
                          <>
                            <p>Driver Days:</p>
                            <input type="number" name="driverDays" value={formData.driverDays} onChange={handleFormChange} min="1" required />
                          </>
                        )}
                      </div>
                    </div>


                    <button type="submit">Book Now</button>
                  </form>
                  <p className="advertisement">
                    Get 10% discount on weekly and 20% discount on monthly rentals!
                  </p>
                </div>

                      
                      )}
                </div>
  );
};

export default CarView;
