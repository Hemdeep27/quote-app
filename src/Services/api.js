import axios from 'axios';

// Set the base URL for your API
const BASE_URL = 'https://assignment.stage.crafto.app';
const UPLOAD_URL = 'https://crafto.app/crafto/v1.0/media/assignment'

const getAuthToken = () => localStorage.getItem('authToken')

// Login API
export const login = async (username, otp) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, otp });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Login error', error);
    throw error;
  }
};

// Get Quotes API
export const getQuotes = async (limit, offset) => {
  try {
    const response = await axios.get(`${BASE_URL}/getQuotes`, {
        params: { limit, offset },
        headers: {
            'Authorization': `${getAuthToken()}`,
        }
    });
    return response.data; 
  } catch (error) {
    console.error('Get quotes error', error);
    throw error;
  }
};

// Upload Media API
export const uploadMedia = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${UPLOAD_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `${getAuthToken()}`
      },
    });

    return response.data; 
  } catch (error) {
    console.error('Upload media error', error);
    throw error;
  }
};

// Create Quote API
export const createQuote = async (text, mediaUrl) => {
  try {
    const response = await axios.post(`${BASE_URL}/postQuote`, { text, mediaUrl }, {
        headers: {
            'Authorization': `${getAuthToken()}`,
          }
    });
    return response.data;
  } catch (error) {
    console.error('Create quote error', error);
    throw error;
  }
};
