import React, { useState } from 'react'
import './style.css'

const Currency = ({ data:currency }) => {
	const [date, setDate] = useState(new Date())

	return (
		<div className="currency">
			<div className="currency__country">{currency.description}</div>
			<div>Price: {currency.rate_float.toFixed(2)}</div>
			<div>{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</div>
		</div>
	)
}

export default Currency;