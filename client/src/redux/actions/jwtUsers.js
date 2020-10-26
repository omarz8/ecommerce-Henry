import axios from "axios";
import Swal from "sweetalert2";
import deleteDialog from "../../components/alerts/deleteDialog";
import Toast from "../../components/alerts/toast";
import * as actionTypes from "./actionTypes";

const url = `http://localhost:3001`;

//loguin de usuario
export const loguinUser = (email, password) => (dispatch) => {
  try {
    return axios
      .post(`${url}/users/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", JSON.stringify(res.data));
          dispatch({
            type: actionTypes.USER_LOGUIN,
            userLoguin: res.data.user,
          });
        }
      });
  } catch {
    dispatch({
      type: actionTypes.USER_LOGUIN_ERROR,
      message: "Error de loguin",
    });
  }
};

//obtener información actual del usuario
export const getCurretnUser = () => (dispatch) => {
  let token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return dispatch({
      type: actionTypes.CURRENT_USER,
      userDetail: {
        id: token.user.id,
        role: token.user.role,
        name: token.user.name,
      },
    });
  } else {
    return dispatch({
      type: actionTypes.NOT_CURRENT_USER,
      message: "Usuaro no logueado",
    });
  }
};

//logout
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: actionTypes.LOGOUT_USER,
  });
  Toast.fire({
    icon: "info",
    title: `Hasta la proxima`,
  });
};