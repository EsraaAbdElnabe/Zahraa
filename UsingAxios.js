const axios = require("axios");

//OrangeHRM REST API Example

//Assuming the OrangeHRM REST API is available at http://your-orangehrm-instance/api, and you want to retrieve a list of employees:

async function fetchEmployees() {
  try {
    const response = await axios.get(
      "http://your-orangehrm-instance/api/employees"
    );
    const employees = response.data;
    console.log("Employees:", employees);
  } catch (error) {
    console.error("Error fetching employees:", error.message);
  }
}

fetchEmployees();


//OpenCRX REST API Example

//Assuming the OpenCRX REST API is available at http://your-opencrx-instance/rest, and you want to create a new contact:

const axios = require('axios');

async function createContact() {
  try {
    const contactData = {
      firstName: 'Zahraa',
      lastName: 'Zahraa',
      email: 'Zahraa@example.com',
    };

    const response = await axios.post('http://your-opencrx-instance/rest/contacts', contactData);
    const createdContact = response.data;
    console.log('Created Contact:', createdContact);
  } catch (error) {
    console.error('Error creating contact:', error.message);
  }
}

createContact();