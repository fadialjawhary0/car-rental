const isEmail = email => email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
const isAge = age => age.match(/^(?:1[01][0-9]|120|[1-9]?[0-9])$/);
const isPhoneNumber = phone => phone.match(/^\d{10}$/);

export const ValidationHelper = {
  isEmail,
  isAge,
  isPhoneNumber,
};
