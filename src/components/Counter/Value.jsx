import React from "react";
import css from "./Counter.module.css"

const Value = ({onValue}) => (
    <span className={css.Counter_value}>{onValue}</span>
)

export default Value;