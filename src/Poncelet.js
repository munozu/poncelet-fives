import React, { useState } from 'react';
import Sketch from 'react-p5'
import { setup, draw } from './p5/poncelet'

const scaleX = 200
const scaleY = 200

export default function Poncelet() {
	const [data, setData] = useState({
			// Scaling variables
			scaleX,
			scaleY,
			sW1 : 2/scaleX,
			sW2 : 0.5/scaleX,
			// Ellipse parameters (for testing) 
			pVal : 0.4,
			qVal : -0.2,
			wVal : 0.5,
			hVal : 0.25,
			tVal : Math.PI/5.0,
			// Initial iterate (for testing)
			xInitial : 0.0,
			yInitial : 1.0,
			// Number of points in orbit (for testing)
			nVal : 17
	});

	const onChange = d => setData(p => ({ ...p, ...d }))

	return (
		<>
			<Sketch
				setup={(cx, parentRef) => setup(cx, parentRef, data)}
				draw={cx => draw(cx, data)}
			/>
			{Object.entries(data)
					.filter(([key]) => [ 'pVal', 'qVal', 'wVal', 'hVal', 'tVal', ].includes(key))
					.map(d => {
						const[k, v] = d
						return (
							<Input 
								name={k}
								value={v}
								onChange={onChange}
							/>
						)
					})}
			<Input 
				name="nVal"
				min={1}
				step={1}
				max={100}
				value={data.nVal}
				onChange={onChange}
			/>
		</>
	)
}

function Input({ name, min = -1, max =1, step = 0.01, value, onChange }){
	const [inputValue = '', setInputValue] = useState(value)
	const onInputChange = e => {
		const value = Number(e.target.value)
		setInputValue(value)
		onChange({[name]: value})
	}
	return (
		<div>
			<label style={{ width: 500 }}>
				<span style={{ display: 'inline-block', width: 60 }}>{name}</span>
				<input 
					style={{width: 160}}
					type="number" 
					min={min} 
					max={max} 
					step={step} 
					value={inputValue} 
					onChange={onInputChange}
				/>
				<input 
					style={{width: 160}}
					type="range" 
					min={min} 
					max={max} 
					step={step} 
					value={inputValue} 
					onChange={onInputChange}
				/>
			</label>
		</div>
	)
}
