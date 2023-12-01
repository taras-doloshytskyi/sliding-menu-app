import { setButtons } from './actions';

export const fetchButtons = () => async (dispatch) => {
  try {
    const response = await fetch('http://192.168.0.200:3001/api/buttons');
    if (!response.ok) {
      throw new Error('Failed to fetch buttons');
    }

    const data = await response.json();
    dispatch(setButtons(data.buttons));
  } catch (error) {
    console.error('Error fetching buttons:', error.message);
  }
};