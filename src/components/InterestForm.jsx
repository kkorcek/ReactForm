import React, { useState } from 'react';
import '../styles/interest-form.css';

const PIN_LENGTH = 16;

// Format the pin ####-####-####-####
const formatPin = (value) => {
  const digitsOnly = value.replace(/\D/g, '').slice(0, PIN_LENGTH);
  return digitsOnly.match(/.{1,4}/g)?.join('-') ?? '';
};

const InterestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    guess: '',
    pin: '',
  });

  const handlePinKeyDown = (e) => {
    // Allow control keys: backspace, delete, arrows, tab
    if (
      ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)
    ) {
      return;
    }
    if (!/^[0-9]$/.test(e.key) || formData.pin.length >= PIN_LENGTH) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'pin') {
      // Remove all non-digit characters and limit length
      const digitsOnly = value.replace(/\D/g, '').slice(0, PIN_LENGTH);
      setFormData((prev) => ({ ...prev, pin: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Submitting prints to the console and clears the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Print in console
    console.log('Submitted data:', formData);
    // Clear form data
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      guess: '',
      pin: '',
    });
  };
  // Format PIN with dashes
  const displayPin = formatPin(formData.pin);

  return (
    <div className="form-wrapper">
      <form
        onSubmit={handleSubmit}
        style={{ fontFamily: 'Raleway, sans-serif' }}
      >
        <h2>Airfryer Interest</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="guess"
          placeholder="Guess the cost of the Air Fryer"
          value={formData.guess}
          onChange={handleChange}
          required
        />

        <div className="pin-input-wrapper">
          <input
            type="text"
            name="pin"
            value={displayPin}
            onChange={handleChange}
            onKeyDown={handlePinKeyDown}
            inputMode="numeric"
            placeholder="Spidr PIN"
            required
          />
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InterestForm;
