//evento.service.js
import { authHeader, handleResponse } from '../helpers';
import Fetch from '../helpers/Fetch';

export const eventoService = {
  obtenerUsuario,
  obtenerFiles,
  obtenerToken,
  obtenerFilesv2
  
};

function obtenerToken(dataJson) {
  const options = { headers: authHeader(), body: JSON.stringify(dataJson) };
  const params = {};

  const url = `/api/gescon/auth`;
  return Fetch.postv2(url, params, options).then((res) =>

  
    handleResponse(res, false)
  );
}

function obtenerUsuario(dataJson) {
  const options = { headers: authHeader(), body: JSON.stringify(dataJson) };
  const params = {};

//console.log(dataJson);

  const url = `/api/gescon/sgm_usuarios/auth`;
  return Fetch.postv2(url, params, options).then((res) =>
    handleResponse(res, false)
  );
}


function obtenerFiles(category) {
  try {
    const options = { headers: authHeader() };
    const params = {};
    const encodedCategory = encodeURIComponent(category)
    // Utiliza Fetch.get para realizar una solicitud GET
    const url = `/api/gescon/documents?category=${encodedCategory}`;

    //console.log(url);
    //console.log(category);

    return Fetch.get(url, params, options).then((res) =>
      handleResponse(res, false)
    );
  } catch (error) {
    console.error('Error en la solicitud:', error);
    // Puedes lanzar o devolver un objeto de error personalizado si es necesario.
    throw error;
  }
}

function obtenerFilesv2(category) {
  try {
    const options = { headers: authHeader() };
    const params = {};
    const encodedCategory = encodeURIComponent(category)
    // Utiliza Fetch.get para realizar una solicitud GET
    const url = `/api/gescon/documentos?category=${encodedCategory}`;

    //console.log(url);
    //console.log(category);

    return Fetch.get(url, params, options).then((res) =>
      handleResponse(res, false)
    );
  } catch (error) {
    console.error('Error en la solicitud:', error);
    // Puedes lanzar o devolver un objeto de error personalizado si es necesario.
    throw error;
  }
}