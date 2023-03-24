import React from "react";
import style from "./Error.module.scss";

const ErrorPage = () => {
  return (
    <div className={style.container_text}>
      <p className={style.text}>
        The dark side of the force has won. We cannot display data. Come back when we fix everything
      </p>
    </div>
  );
};

export default ErrorPage;
