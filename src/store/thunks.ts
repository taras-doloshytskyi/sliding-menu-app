import axios from 'axios';
import { setButtons } from './actions';

export const fetchButtons = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/api/buttons');

    dispatch(setButtons(response.data.buttons));
  } catch (error) {
    console.error('Error fetching buttons:', error.message);
  }
};