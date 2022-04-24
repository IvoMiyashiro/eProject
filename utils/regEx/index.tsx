export const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const fullNameRegEx = /(^[A-Za-z]{1,16})([ ]{0,1})([A-Za-z]{1,16})?([ ]{0,1})?([A-Za-z]{1,16})?([ ]{0,1})?([A-Za-z]{1,16})/;

export const addressRegEx = /^[#.0-9a-zA-Z\s,-]+$/;

export const creditCardDateRegEx = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

export const visaNumberRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;

export const dniRegEx = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/;
