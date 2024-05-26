import React from 'react';

import {
  IconCalendarEvent,
  IconCar,
  IconMapPinFilled,
} from '@tabler/icons-react';

import './BookCar.scss';

const BookCar = () => {
  return (
    <section className='book-section'>
      <div className='container'>
        <div className='book-content-box'>
          <h3>Book a car</h3>
          <div className='book-content-box-items'>
            <div className='book-content-box-items_type'>
              <label>
                <IconCar className='input-icon' /> &nbsp; Select Your Car Type
                <b>*</b>
              </label>
              <select>
                <option>test</option>
                <option>test</option>
                <option>test</option>
              </select>
            </div>

            <div className='book-content-box-items_type'>
              <label>
                <IconMapPinFilled className='input-icon' /> &nbsp; Pick-up
                <b>*</b>
              </label>
              <select>
                <option>test</option>
                <option>test</option>
                <option>test</option>
              </select>
            </div>

            <div className='book-content-box-items_type'>
              <label>
                <IconMapPinFilled className='input-icon' /> &nbsp; Drop-of
                <b>*</b>
              </label>
              <select>
                <option>test</option>
                <option>test</option>
                <option>test</option>
              </select>
            </div>

            <div className='book-content-box-items_type'>
              <label htmlFor='picktime'>
                <IconCalendarEvent className='input-icon' /> &nbsp; Pick-up
                <b>*</b>
              </label>
              <select>
                <option>test</option>
                <option>test</option>
                <option>test</option>
              </select>
            </div>

            <div className='book-content-box-items_type'>
              <label htmlFor='droptime'>
                <IconCalendarEvent className='input-icon' /> &nbsp; Drop-of
                <b>*</b>
              </label>
              <select>
                <option>test</option>
                <option>test</option>
                <option>test</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCar;
