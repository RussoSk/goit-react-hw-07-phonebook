import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Loading } from 'notiflix';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://64d8d7725f9bf5b879ce9c6e.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      Loading.pulse();
      const response = await axios.get('/contacts');
      Loading.remove();
      return response.data;
    } catch (e) {
      Loading.remove();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const toastPromise = axios.post('/contacts', contact);
      const response = await toastPromise;
      toast.promise(toastPromise, {
        loading: 'Loading',
        success: `${response.data.name} added successfully`,
        error: `Something went wrong. Please try again later!`,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const toastPromise = axios.delete(`/contacts/${id}`);
      const response = await toastPromise;
      toast.promise(toastPromise, {
        loading: 'Loading',
        success: `${response.data.name} was removed.❌`,
        error: `Something went wrong. Please try again later!`,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
