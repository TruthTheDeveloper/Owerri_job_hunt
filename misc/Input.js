import React, { useState } from "react";

const Input = ({
    label,
    onChange,
    value,
    secured,
    textArea,
    seePasswordRequest,
}) => {
    const [securedState, setSecuredState] = useState(secured);
    return textArea ? (
        <div className=" flex flex-col">
            <label className="text-black ml-5  mt-1 text-xs">{label}</label>
            <textarea
                rows="5"
                onChange={onChange}
                className="w-full outline-none border-2  mx-5 my-2"
                style={{backgroundColor: "#E8EEF3" }}
            />
        </div>
    ) : (
        <div className=" flex flex-col ">
            <label className="text-black ml-5  mt-1 text-xs ml-12">{label}</label>
            {secured ? (
                <div
                    className="mx-5 my-2 flex"
                >
                    <input
                        style={{  backgroundColor: "#E8EEF3" }}
                        type={securedState ? "password" : "text"}
                        value={value}
                        onChange={onChange}
                        className=" p-2  rounded-sm text-black outline-none bg-yellow-300 w-full"
                    />
                    <div
                        className="pr-2 pt-2"
                        style={{ backgroundColor: "#E8EEF3" }}
                        onClick={() => setSecuredState(!securedState)}
                    >
                        {securedState ? (
                            // <i class="fa-solid fa-eye"></i>
                            <i
                                className="fas fa-eye-slash  cursor-pointer "
                                style={{ color: "#666AF6" }}
                            ></i>
                        ) : (
                            <i
                                className="fas fa-eye cursor-pointer"
                                style={{ color: "#666AF6" }}
                            ></i>
                        )}
                    </div>
                </div>
            ) : (
                <input
                    style={{ backgroundColor: "#E8EEF3" }}
                    type={secured ? "password" : "text"}
                    value={value}
                    onChange={onChange}
                    className=" p-2 my-2 mx-5 rounded-sm text-black outline-none"
                />
            )}
        </div>
    );
};

export default Input;
