import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  IconCalendarEvent,
  IconCar,
  IconMapPinFilled,
  IconX,
} from '@tabler/icons-react';

import './BookCar.scss';
import CarAudi from '../../../assets/book-car/audia1.jpg';
import CarGolf from '../../../assets/book-car/golf6.jpg';
import CarToyota from '../../../assets/book-car/toyotacamry.jpg';
import CarBmw from '../../../assets/book-car/bmw320.jpg';
import CarMercedes from '../../../assets/book-car/benz.jpg';
import CarPassat from '../../../assets/book-car/passatcc.jpg';

// import { ValidationHelper } from '../../../helper/validators';

const BookCar = () => {
  const [bookCar, setBookCar] = useState({
    carType: '',
    pickUp: '',
    dropOff: '',
    pickUpDate: '',
    dropOffDate: '',
  });

  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    age: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const [isValidInputs, setIsValidInputs] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCarUrl, setSelectedCarUrl] = useState('');
  const [bookSubmitted, setBookSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setBookCar(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isValid =
      bookCar?.carType &&
      bookCar?.carType !== 'Select your car type' &&
      bookCar?.pickUp &&
      bookCar?.pickUp !== 'Select pick up location' &&
      bookCar?.dropOff &&
      bookCar?.dropOff !== 'Select drop off location' &&
      bookCar?.pickUpDate &&
      bookCar?.dropOffDate;

    if (isValid) {
      switch (bookCar?.carType) {
        case 'Audi A1 S-Line':
          setSelectedCarUrl(CarAudi);
          break;
        case 'VW Golf 6':
          setSelectedCarUrl(CarGolf);
          break;
        case 'Toyota Camry':
          setSelectedCarUrl(CarToyota);
          break;
        case 'BMW 320 ModernLine':
          setSelectedCarUrl(CarBmw);
          break;
        case 'Mercedes-Benz GLK':
          setSelectedCarUrl(CarMercedes);
          break;
        case 'VW Passat CC':
          setSelectedCarUrl(CarPassat);
          break;
        default:
          setSelectedCarUrl('');
      }
      setShowPopup(true);
      setIsValidInputs(true);
    } else {
      setIsValidInputs(false);
    }
  };

  const closeValidationMessage = () => {
    setIsValidInputs(true);
  };

  const closeCofirmMessage = () => {
    setBookSubmitted(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleCarBooking = e => {
    e.preventDefault();

    // const isValid =
    //   personalInfo?.firstName &&
    //   personalInfo?.lastName &&
    //   personalInfo?.email &&
    //   ValidationHelper?.isEmail(personalInfo?.email) &&
    //   personalInfo?.age &&
    //   ValidationHelper?.isAge(personalInfo?.age) &&
    //   personalInfo?.phone &&
    //   ValidationHelper?.isPhoneNumbere(personalInfo?.phone) &&
    //   personalInfo?.address &&
    //   personalInfo?.zipCode &&
    //   personalInfo?.city;

    setBookSubmitted(true);
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPopup]);

  return (
    <section id='booking-section' className='book-section'>
      <div className='container'>
        <div className='book-content-box'>
          <h3>Book a car</h3>

          {!isValidInputs ? (
            <div className='error-container'>
              <p>All fields are required!</p>
              <IconX className='close-icon' onClick={closeValidationMessage} />
            </div>
          ) : (
            <></>
          )}

          {bookSubmitted ? (
            <div className='book-confirmation'>
              <p>Check your email to confirm an order.</p>
              <IconX className='close-icon' onClick={closeCofirmMessage} />
            </div>
          ) : (
            <></>
          )}

          <form className='book-content-box-items'>
            <div className='book-content-box-items_type'>
              <label>
                <IconCar className='input-icon' /> &nbsp; Select Your Car Type
                <b>*</b>
              </label>
              <select
                onChange={e => handleInputChange('carType', e?.target?.value)}>
                <option>Select your car type</option>
                <option value='Audi A1 S-Line'>Audi A1 S-Line</option>
                <option value='VW Golf 6'>VW Golf 6</option>
                <option value='Toyota Camry'>Toyota Camry</option>
                <option value='BMW 320 ModernLine'>BMW 320 ModernLine</option>
                <option value='Mercedes-Benz GLK'>Mercedes-Benz GLK</option>
                <option value='VW Passat CC'>VW Passat CC</option>
              </select>
            </div>

            <div className='book-content-box-items_type'>
              <label>
                <IconMapPinFilled className='input-icon' /> &nbsp; Pick-up
                <b>*</b>
              </label>
              <select
                onChange={e => handleInputChange('pickUp', e?.target?.value)}>
                <option>Select pick up location</option>
                <option>Belgrade</option>
                <option>Novi Sad</option>
                <option>Nis</option>
                <option>Kragujevac</option>
                <option>Subotica</option>
              </select>
            </div>

            <div className='book-content-box-items_type'>
              <label>
                <IconMapPinFilled className='input-icon' /> &nbsp; Drop-off
                <b>*</b>
              </label>
              <select
                onChange={e => handleInputChange('dropOff', e?.target?.value)}>
                <option>Select drop off location</option>
                <option>Novi Sad</option>
                <option>Belgrade</option>
                <option>Nis</option>
                <option>Kragujevac</option>
                <option>Subotica</option>
              </select>
            </div>

            <div className='book-content-box-items_type'>
              <label htmlFor='picktime'>
                <IconCalendarEvent className='input-icon' /> &nbsp; Pick-up
                <b>*</b>
              </label>
              <input
                type='date'
                onChange={e =>
                  handleInputChange('pickUpDate', e?.target?.value)
                }
              />
            </div>

            <div className='book-content-box-items_type'>
              <label htmlFor='droptime'>
                <IconCalendarEvent className='input-icon' /> &nbsp; Drop-off
                <b>*</b>
              </label>
              <input
                type='date'
                onChange={e =>
                  handleInputChange('dropOffDate', e?.target?.value)
                }
              />
            </div>

            <button type='submit' onClick={handleSubmit}>
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Show popup */}
      {showPopup && (
        <div className='popup-overlay'>
          <div className='popup'>
            <div className='popup-header'>
              <h2>COMPLETE RESERVATION</h2>
              <IconX className='close-popup' onClick={closePopup} />
            </div>

            <div className='popup-header-sub'>
              <h4>
                Upon completing this reservation enquiry, you will receive:
              </h4>
              <p>
                Your rental voucher to produce on arrival at the rental desk and
                a toll-free customer support number.
              </p>
            </div>

            {/* Car information */}
            <div className='popup_car-info'>
              <div className='dates-div'>
                <div className='popup_car-info_dates'>
                  <h5>Location & Date</h5>
                  <span>
                    <IconMapPinFilled />
                    <div>
                      <h6>Pick-Up Date & Time</h6>
                      <p>
                        {bookCar?.pickUpDate} /{' '}
                        <input type='time' className='input-time'></input>
                      </p>
                    </div>
                  </span>
                </div>
                <div className='popup_car-info_dates'>
                  <span>
                    <IconMapPinFilled />
                    <div>
                      <h6>Drop-Off Date & Time</h6>
                      <p>
                        {bookCar?.dropOffDate} /{' '}
                        <input type='time' className='input-time'></input>
                      </p>
                    </div>
                  </span>
                </div>
                <div className='popup_car-info_dates'>
                  <span>
                    <IconMapPinFilled />
                    <div>
                      <h6>Pick-Up Location</h6>
                      <p>{bookCar?.pickUp}</p>
                    </div>
                  </span>
                </div>
                <div className='popup_car-info_dates'>
                  <span>
                    <IconMapPinFilled />
                    <div>
                      <h6>Drop-Off Location</h6>
                      <p>{bookCar?.dropOff}</p>
                    </div>
                  </span>
                </div>
              </div>

              <div className='popup_car-info_model'>
                <h5>
                  Car - <span>{bookCar?.carType}</span>
                </h5>
                <img
                  className='popup_car-info_model_img'
                  src={selectedCarUrl}
                  alt={selectedCarUrl}
                />
              </div>
            </div>
            {/* personal info */}
            <div className='booking-modal_personal-info'>
              <h4>Personal Information</h4>
              <form>
                <div className='booking-modal_personal-info-container'>
                  <div className='booking-modal_personal-info-container_field'>
                    <label>
                      First Name <span>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your first name'
                      onChange={e =>
                        handlePersonalInfoChange('firstName', e?.traget?.value)
                      }
                    />
                    <p>This field is required.</p>
                  </div>
                  <div className='booking-modal_personal-info-container_field'>
                    <label>
                      Last Name <span>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your last name'
                      onChange={e =>
                        handlePersonalInfoChange('lastName', e?.traget?.value)
                      }
                    />
                    <p>This field is required.</p>
                  </div>
                  <div className='booking-modal_personal-info-container_field'>
                    <label>
                      Phone Number <span>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your phone number'
                      onChange={e =>
                        handlePersonalInfoChange('phone', e?.traget?.value)
                      }
                    />
                    <p>This field is required.</p>
                  </div>
                  <div className='booking-modal_personal-info-container_field'>
                    <label>
                      Age <span>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='18'
                      onChange={e =>
                        handlePersonalInfoChange('age', e?.traget?.value)
                      }
                    />
                    <p>This field is required.</p>
                  </div>
                </div>

                <div className='booking-modal_personal-info-container2'>
                  <div className='booking-modal_personal-info-container2_field'>
                    <label>
                      Email <span>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your email address'
                      onChange={e =>
                        handlePersonalInfoChange('email', e?.traget?.value)
                      }
                    />
                    <p>This field is required.</p>
                  </div>
                  <div className='booking-modal_personal-info-container2_field'>
                    <label>
                      Address <span>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your street address'
                      onChange={e =>
                        handlePersonalInfoChange('address', e?.traget?.value)
                      }
                    />
                    <p>This field is required.</p>
                  </div>
                </div>

                <div className='booking-modal_personal-info-container3'>
                  <div className='booking-modal_personal-info-container3_field'>
                    <label>
                      City <span>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your city'
                      onChange={e =>
                        handlePersonalInfoChange('city', e?.traget?.value)
                      }
                    />
                    <p>This field is required.</p>
                  </div>
                  <div className='booking-modal_personal-info-container3_field'>
                    <label>
                      Zip Code <span>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Enter your zip code'
                      onChange={e =>
                        handlePersonalInfoChange('zipCode', e?.traget?.value)
                      }
                    />
                    <p>This field is required.</p>
                  </div>
                </div>

                <div className='checkbox-container'>
                  <input type='checkbox' />
                  <p>Please send me latest news and updates</p>
                </div>
              </form>
            </div>
            {/* Submit button */}
            <div className='submit-container'>
              <Link
                className='submit-btn'
                type='submit'
                onClick={handleCarBooking}>
                Reserve Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookCar;
