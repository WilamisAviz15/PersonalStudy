import React, { useState } from "react";
import { ResponseAPIInterface } from "./Interfaces/response-api.interface";

const useResponseAPI = (): [
  responseAPI: ResponseAPIInterface | undefined,
  setResponseAPI: React.Dispatch<React.SetStateAction<ResponseAPIInterface | undefined>>,
  showMessage: boolean,
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [responseAPI, setResponseAPI] = useState<ResponseAPIInterface>();
  const [showMessage, setShowMessage] = useState(false);

  return [responseAPI, setResponseAPI, showMessage, setShowMessage];
};

export default useResponseAPI;
