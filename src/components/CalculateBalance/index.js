import React, { useState, useEffect } from "react";
import SetBalance from "../SetBalance";

const CalculateBalance = () => {
    const [balance, setBalance] = useState(localStorage.getItem("balance"));
    const [disabled, setDisabled] = useState(true);
    const [qq, setQq] = useState(0);
    const [val, setVal] = useState("");
    const [firstScreen, setFirstScreen] = useState(true);

    const calculate = (operation) => {
        operation === "+"
            ? setBalance((Number(balance) + Number(qq)).toFixed(2))
            : setBalance((Number(balance) - Number(qq)).toFixed(2));
    };

    const onChange = (event) => {
        const { value } = event.target;
        value ? setDisabled(false) : setDisabled(true);
        setVal(value);
    };

    const onBlur = (event) => setQq(Math.abs(event.target.value));

    const onClick = (event) => {
        calculate(event.target.id);
        setVal("");
        setDisabled(true);
    };

    useEffect(() => {
        if (localStorage.getItem("balance")) {
            setFirstScreen(false);
        }
    }, []);
    return (
        <>
            {firstScreen ? (
                <SetBalance
                    isHideFirstScreen={setFirstScreen}
                    saveBalance={setBalance}
                />
            ) : (
                <>
                    <div className={"balance"}>{balance}</div>
                    <div className={"actions"}>
                        <label className={"label"}>
                            <input
                                type="number"
                                min="0"
                                autoFocus={false}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={val}
                                required={true}
                            />
                            <span>Сумма</span>
                        </label>
                        <div className={"operations"}>
                            <button
                                className={
                                    "operations__btn operations__btn--plus"
                                }
                                disabled={disabled}
                                onClick={onClick}
                                id="+"
                            >
                                Заработано
                            </button>
                            <button
                                className={
                                    "operations__btn operations__btn--minus"
                                }
                                disabled={disabled}
                                onClick={onClick}
                                id="-"
                            >
                                Потрачено
                            </button>
                            <button
                                className={"operations__btn btn"}
                                onClick={() =>
                                    localStorage.setItem("balance", balance)
                                }
                            >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CalculateBalance;
