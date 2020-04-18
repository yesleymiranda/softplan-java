import {alertDanger, alertSuccess} from "./alerts";

export const getApiResponse = (response) => {

  if (response.status === 201 || response.status === 200) {
    alertSuccess("Sucesso");
    return response.data;
  } else if (response.status === 401 || response.status === 400) {
    if (response.data['errors'] && response.data['errors'].length > 0) {
      response.data['errors'].forEach(m => alertDanger(m["defaultMessage"]));
      throw ({message: response.data, type: 'danger'});
    } else {
      alertDanger(response.data.message || "Retorno inesperado! Tente novamente mais tarde");
      throw ({message: response.data, type: 'danger'});
    }
  } else {
    const message = "Serviço indisponivel! Tente novamente mais tarde.";
    alertDanger(message);
    throw ({message, type: 'danger'});
  }
};

export const getNetworkError = (e) => {
  if (e.message === "Network Error")
    alertDanger("Serviço indisponivel! Tente novamente mais tarde.");
};


