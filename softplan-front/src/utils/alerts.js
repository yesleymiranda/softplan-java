import {toast} from 'react-toastify';

export const alertDanger = message => {
  toast(message, {type: "error"});
};

export const alertSuccess = message => {
  toast(message || "Sucesso", {type: "success", autoClose: 1200});
};
