import React, { useState } from 'react';
import Sketch from 'react-p5'
import { setup, draw } from './p5/poncelet'

const scaleX = 200
const scaleY = 200

export default function Poncelet() {
	const [exportData, setExportData] = useState()
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
				setup={(cx, parentRef) => setup(cx, parentRef, { params: data, exportData: d => setExportData(d) })}
				draw={cx => draw(cx, { params: data, exportData: d => setExportData(d) })}
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
			{exportData && (
				<div style={{ display: 'flex' }}>
					<pre style={{width: 250, padding: 24, border: '1px solid #ddd'}}>ponceletOrbit: {JSON.stringify(exportData.ponceletOrbit, null, 2)}</pre>
					<pre style={{width: 250, padding: 24, border: '1px solid #ddd'}}>angularDurations: {JSON.stringify(exportData.angularDurations, null, 2)}</pre>
					<pre style={{width: 250, padding: 24, border: '1px solid #ddd'}}>euclideanDurations: {JSON.stringify(exportData.euclideanDurations, null, 2)}</pre>
				</div>
			)}
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
