/* Description:
Create an object that represents a motel customer
Date: March 20th - 23rd 2024
Author: Brandon Shea
*/

const motelCustomer = {
  firstName: "Marshall",
  lastName: "Mathers",
  birtDate: "1972-10-17",
  gender: "male",
  roomPreference: ["Penthouse", "Suite", "On-suite Recording Studio"],
  paymentMethod: "Credit Card",
  mailingAddress: {
    streetAddress: "8 Mile Road",
    city: "Detroit",
    State: "Michigan",
    zipCode: "48201",
    country: "USA",
  },
  phoneNumber: "313-555-1234",
  checkInDate: "2021-10-17",
  checkOutDate: {
    year: 2021,
    month: 11,
    day: 10,
  },

  calculateAge: function () {
    const today = new Date();
    const birthDate = new Date(this.birtDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  },

  calculateDurationOfStay: function () {
    const checkInDate = new Date(this.checkInDate);
    const checkOutDate = new Date(
      this.checkOutDate.year,
      this.checkOutDate.month - 1,
      this.checkOutDate.day
    );
    const duration = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
    return duration.toFixed(0);
  },

  motelCustomerDescription: function () {
    const age = this.calculateAge();
    const duration = this.calculateDurationOfStay();
    return `
    Customer Name: ${this.firstName} ${this.lastName}
    Birth Date: ${this.birtDate}
    Age: ${age}
    Gender: ${this.gender}
    Room Preference: ${this.roomPreference.join(", ")}
    Payment Method: ${this.paymentMethod}
    Mailing Address: ${this.mailingAddress.streetAddress}, ${
      this.mailingAddress.city
    }, ${this.mailingAddress.State}, ${this.mailingAddress.zipCode}, ${
      this.mailingAddress.country
    }
    Phone Number: ${this.phoneNumber}
    Check In Date: ${this.checkInDate}
    Check Out Date: ${this.checkOutDate.year}-${this.checkOutDate.month}-${
      this.checkOutDate.day
    }
    Duration of Stay: ${duration} days



${this.firstName} ${
      this.lastName
    } is ${age} years old and will be staying for ${duration} days. They will be staying in a ${this.roomPreference.join(
      ", "
    )} room. They will be paying with a ${
      this.paymentMethod
    } and can be reached at ${this.phoneNumber}. They will be staying at ${
      this.mailingAddress.streetAddress
    }, ${this.mailingAddress.city}, ${this.mailingAddress.State}, ${
      this.mailingAddress.zipCode
    }, ${this.mailingAddress.country}.

    `;
  },
};

const customerDescription = motelCustomer.motelCustomerDescription();
console.log(customerDescription);
