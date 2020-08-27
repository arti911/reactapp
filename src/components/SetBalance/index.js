import React, { useState } from "react";

const SetBalance = ({ isHideFirstScreen, saveBalance }) => {
    const [balance, setBalance] = useState("");

    const onSubmit = (e) => {
        console.log("isHideFirstScreen", isHideFirstScreen);
        e.preventDefault();
        localStorage.setItem("balance", balance);
        isHideFirstScreen(false);
        saveBalance(Number(balance));
    };

    return (
        <form className={"set-balance-form"} onSubmit={onSubmit}>
            <label className={"label"}>
                <input
                    type="number"
                    step="any"
                    min="0"
                    required={true}
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                />
                <span>Ваш баланс</span>
            </label>
            <button
                className={"btn"}
                disabled={balance === "" || Number(balance) === 0}
            >
                Save
            </button>
        </form>
    );
};

export default SetBalance;
