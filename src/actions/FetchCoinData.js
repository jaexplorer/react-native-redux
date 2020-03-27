import axios from "axios";
import { apiBaseURL } from "../utils/Constants";
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from "../utils/ActionTypes";

export default FetchCoinData = () => {
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DATA });

    return axios
      .get(`${apiBaseURL}/v1/cryptocurrency/listings/latest?`, {
        params: {
          start: "1",
          sort: "market_cap",
          limit: "20"
        },
        headers: {
          "X-CMC_PRO_API_KEY": "fa9614ad-dae4-4df8-871c-5b831f95b726"
        }
      })
      .then(res => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
        console.log(err);
      });
  };
};
