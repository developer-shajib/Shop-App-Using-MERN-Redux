import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Utils {
  /**
   * Create Toastify
   * @param {*} msg
   * @param {*} type
   * @returns error
   */
  static createToastify = (msg = '', type = 'error') => {
    return toast(msg, {
      type,
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
}
