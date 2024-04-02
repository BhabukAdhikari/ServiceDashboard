import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setLocalStorage } from 'src/utils/local-storage';

import { api } from 'src/setup/api';


export default function useLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', { email, password });
      const token = res?.data?.token;
      if (token) {
        setLocalStorage('token', token);
        console.log(token);
        navigate('/');
      } else {
        console.log('Token not found in response');
      }
      return res.data;
    } catch (error) {
      console.error('Error occurred during login:', error);
      throw error;
    }
  };

  return { handleEmail, handlePassword, handleFormSubmit, email, password };
}
