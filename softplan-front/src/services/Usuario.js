import axios from "axios";
import {getApiResponse, getNetworkError} from "../utils/utils";
import {alertDanger} from "../utils/alerts";

// Em situação real, utilizar .env e usuário autenticado
const url = "http://localhost:80/api";
const authorization = "Basic dXN1YXJpbzpzZW5oYQ==";

export const getUsuarioListar = async () => {

  try {
    const response = await axios.get(`${url}/usuario/listar`,
        {
          headers: {
            authorization
          }
        });

    return getApiResponse(response);
  } catch (e) {
    getNetworkError(e);
    throw (e);
  }

};

export const postUsuarioCadastrar = async usuario => {
  try {
    const response = await axios.post(`${url}/usuario/cadastrar`,
        usuario,
        {
          headers: {
            authorization
          },
          validateStatus: function (status) {
            return status >= 200 && status <= 500;
          }
        });

    return getApiResponse(response);
  } catch (e) {
    getNetworkError(e);
    throw (e);
  }
};

export const putUsuarioAlterar = async usuario => {
  try {
    const response = await axios.put(`${url}/usuario/atualizar/${usuario.id}`,
        usuario,
        {
          headers: {
            authorization
          },
          validateStatus: function (status) {
            return status >= 200 && status <= 500;
          }
        });

    return getApiResponse(response);
  } catch (e) {
    getNetworkError(e);
    throw (e);
  }
};


export const deleteUsuarioRemover = async id => {
  try {
    const response = await axios.delete(`${url}/usuario/deletar/${id}`,
        {
          headers: {
            authorization
          },
          validateStatus: function (status) {
            return status >= 200 && status <= 500;
          }
        });

    return getApiResponse(response);
  } catch (e) {
    getNetworkError(e);
    throw (e);
  }
};
