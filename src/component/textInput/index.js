import classNames from "classnames";
import React from "react";
import "./index.scss"
import { searchIcon } from "../../assets/images";

const TextInput = ({
    onChange,
    id,
    label,
    type,
    value,
    classname,
    placeholder,
    showSearchIcon
}) => {
    return (
        <div className="position-relative">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={classNames("form-control", classname)}
            />
            {
                showSearchIcon &&
                <img src={searchIcon} alt="" className="search-icon"/>
            }
        </div>
    )
}

export default TextInput;