// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import { useEffect } from 'react';

const ErrorMessage = ({ error }) => {
  console.log('ErrorMessage received error:', error);
  if (!error) return null;
  return <p>Whoops, something went wrong! Please try reloading this page!</p>;
};
// useEffect(() => {
// if (error) {
//   iziToast.warning({
//     title: 'Caution',
//     message: 'Something went wrong! Please try again.',
//     position: 'topRight',
//     timeout: 5000,
//   });

// }, [error]);

//return null;

export default ErrorMessage;
