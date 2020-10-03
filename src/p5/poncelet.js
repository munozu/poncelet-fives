const scaleX = 200
const scaleY = 200

const DEFAULT_PARAMS = {
	scaleX,
	scaleY,
	sW1 : 2/scaleX,
	sW2 : 0.5/scaleX,
	pVal : 0.4,
	qVal : -0.2,
	wVal : 0.5,
	hVal : 0.25,
	tVal : Math.PI / 5.0,
	xInitial : 0.0,
	yInitial : 1.0,
	nVal : 17,
}

// Orbit in global space
let ponceletOrbit = [];

// Use this to export orbit data 
let dataExport = false;

export function setup(cx, ref, params = DEFAULT_PARAMS) {
	const { 
		// Ellipse parameters (for testing) 
		pVal, 
		qVal, 
		wVal, 
		hVal, 
		tVal,
		// Initial iterate (for testing)
		xInitial,
		yInitial,
		// Number of points in orbit (for testing)
		nVal,
	} = params;

	cx.createCanvas(500, 500).parent(ref);

	ponceletOrbit = computeOrbit(cx, xInitial, yInitial, pVal, qVal, wVal, hVal, tVal, nVal);

	if (dataExport) {
		cx.saveJSON(ponceletOrbit, 'data.json');
	}
}

export function draw(cx, params = DEFAULT_PARAMS) {
	const { 
		// Scaling variables
		sW1 = 2 / params.scaleX, 
		sW2 = 2 / params.scaleX, 
		// Ellipse parameters (for testing) 
		pVal, 
		qVal, 
		wVal, 
		hVal, 
		tVal,
		// Initial iterate (for testing)
		xInitial,
		yInitial,
		// Number of points in orbit (for testing)
		nVal,
	} = params;

	function drawUnitCircle() {
		cx.push();
		cx.stroke(0,0,255);
		cx.noFill();
		cx.strokeWeight(sW1);
		cx.circle(0, 0, 2);
		cx.pop();
	}

	// See comment above definition of ponceletIterate function
	// for explanation of p, q, w, h, t
	function drawEllipse(p,q,w,h,t) {
		cx.push();
		cx.stroke(255,0,0);
		cx.noFill();
		cx.translate(p,q);
		cx.rotate(t);
		cx.strokeWeight(sW1);
		cx.ellipse(0,0,2*w,2*h);
		cx.pop();	
	}

	function drawOrbit(orbit) {
		let orbitLength = orbit.length;
		cx.push();
		for (let i=0; i<orbitLength; i++) {
			cx.stroke(0,0,0);
			cx.fill(0,0,0);
			cx.strokeWeight(sW2);
			if (i<orbitLength-1) {
				cx.line(orbit[i][0],orbit[i][1],orbit[i+1][0],orbit[i+1][1]);
			}
			cx.strokeWeight(sW1);		
			cx.circle(orbit[i][0],orbit[i][1],0.02);
		}
		cx.pop();
	}

	cx.background(230);

	cx.scale(scaleX,-scaleY);
	cx.translate((cx.width/2)/scaleX,-(cx.height/2)/scaleY);

	drawUnitCircle();
	drawEllipse(pVal,qVal,wVal,hVal,tVal);

	cx.push();
	cx.fill(0,0,0);
	cx.strokeWeight(sW1);	
	cx.pop();

	ponceletOrbit = computeOrbit(cx, xInitial, yInitial, pVal, qVal, wVal, hVal, tVal, nVal);

	drawOrbit(ponceletOrbit);
}


// See comment above definition of ponceletIterate function
// for explanation of p, q, w, h, t
// n is the number of points in the orbit
function computeOrbit(context, x, y, p, q, w, h, t, n) {
	let orbit = [];
	let iterate = [];
	let iterateOld = [];
	let iterateNew = [];
	iterateOld[0] = x;
	iterateOld[1] = y;
	orbit[0] = [];
	orbit[0][0] = iterateOld[0];
	orbit[0][1] = iterateOld[1];
	for (let i=1; i<n; i++) {
		orbit[i] = [];
		iterate = ponceletIterate(context, iterateOld[0], iterateOld[1], p, q, w, h, t);
		iterateNew[0] = iterate[0];
		iterateNew[1] = iterate[1];
		orbit[i][0] = iterateNew[0];
		orbit[i][1] = iterateNew[1];
		iterateOld[0] = iterateNew[0];
		iterateOld[1] = iterateNew[1];
	}
	return orbit;
}


// Given a point (x,y) on the the unit circle, generate it's 
// Poncelet iterate (x',y') on the unit circle. 
// (p,q) is the centre of the ellipse
// w and h are the semi major and semi minor axes of the ellipse 
// respectively
// t is the angle of rotation of the ellipse (in radians) 
function ponceletIterate(cx, x, y, p, q, w, h, t) {
	let iterate = [];
	iterate[0] = (-(cx.pow(p,4)*cx.pow(w,2)*cx.pow(h,2)*x)+cx.pow(q,4)*cx.pow(w,2)*cx.pow(h,2)*x+cx.pow(p,2)*cx.pow(w,4)*cx.pow(h,2)*x-cx.pow(q,2)*cx.pow(w,4)*cx.pow(h,2)*x+cx.pow(p,2)*cx.pow(w,2)*cx.pow(h,4)*x-cx.pow(q,2)*cx.pow(w,2)*cx.pow(h,4)*x+4*cx.pow(p,3)*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,2)-2*p*cx.pow(w,4)*cx.pow(h,2)*cx.pow(x,2)-2*p*cx.pow(w,2)*cx.pow(h,4)*cx.pow(x,2)-6*cx.pow(p,2)*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,3)+cx.pow(w,4)*cx.pow(h,2)*cx.pow(x,3)+cx.pow(w,2)*cx.pow(h,4)*cx.pow(x,3)+4*p*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,4)-cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,5)-2*cx.pow(p,3)*q*cx.pow(w,2)*cx.pow(h,2)*y-2*p*cx.pow(q,3)*cx.pow(w,2)*cx.pow(h,2)*y+2*p*q*cx.pow(w,4)*cx.pow(h,2)*y+2*p*q*cx.pow(w,2)*cx.pow(h,4)*y+6*cx.pow(p,2)*q*cx.pow(w,2)*cx.pow(h,2)*x*y-2*cx.pow(q,3)*cx.pow(w,2)*cx.pow(h,2)*x*y-6*p*q*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,2)*y+2*q*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,3)*y+2*cx.pow(p,3)*cx.pow(w,2)*cx.pow(h,2)*cx.pow(y,2)+6*p*cx.pow(q,2)*cx.pow(w,2)*cx.pow(h,2)*cx.pow(y,2)-2*p*cx.pow(w,4)*cx.pow(h,2)*cx.pow(y,2)-2*p*cx.pow(w,2)*cx.pow(h,4)*cx.pow(y,2)-6*cx.pow(p,2)*cx.pow(w,2)*cx.pow(h,2)*x*cx.pow(y,2)+cx.pow(w,4)*cx.pow(h,2)*x*cx.pow(y,2)+cx.pow(w,2)*cx.pow(h,4)*x*cx.pow(y,2)+6*p*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,2)*cx.pow(y,2)-2*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,3)*cx.pow(y,2)-6*p*q*cx.pow(w,2)*cx.pow(h,2)*cx.pow(y,3)+2*q*cx.pow(w,2)*cx.pow(h,2)*x*cx.pow(y,3)+2*p*cx.pow(w,2)*cx.pow(h,2)*cx.pow(y,4)-cx.pow(w,2)*cx.pow(h,2)*x*cx.pow(y,4)-4*p*q*x*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))+4*q*cx.pow(x,2)*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))+2*cx.pow(p,2)*y*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))-2*cx.pow(q,2)*y*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))-2*cx.pow(x,2)*y*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))+4*q*cx.pow(y,2)*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))-2*cx.pow(y,3)*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))+(cx.pow(w,2)-cx.pow(h,2))*cx.sin(2*t)*(cx.pow(p,2)*cx.pow(w,2)*cx.pow(h,2)*y+cx.pow(q,2)*cx.pow(w,2)*cx.pow(h,2)*y-cx.pow(w,4)*cx.pow(h,2)*y-cx.pow(w,2)*cx.pow(h,4)*y-2*p*cx.pow(w,2)*cx.pow(h,2)*x*y+cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,2)*y-2*q*cx.pow(w,2)*cx.pow(h,2)*cx.pow(y,2)+cx.pow(w,2)*cx.pow(h,2)*cx.pow(y,3)+2*x*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t)))))+(cx.pow(w,2)-cx.pow(h,2))*cx.cos(2*t)*(cx.pow(p,2)*cx.pow(w,2)*cx.pow(h,2)*x+cx.pow(q,2)*cx.pow(w,2)*cx.pow(h,2)*x-cx.pow(w,4)*cx.pow(h,2)*x-cx.pow(w,2)*cx.pow(h,4)*x-2*p*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,2)+cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,3)-2*q*cx.pow(w,2)*cx.pow(h,2)*x*y+cx.pow(w,2)*cx.pow(h,2)*x*cx.pow(y,2)-2*y*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))))/(cx.pow(w,2)*cx.pow(h,2)*(cx.pow(p,4)+2*cx.pow(p,2)*cx.pow(q,2)+cx.pow(q,4)+cx.pow(w,4)-2*cx.pow(w,2)*cx.pow(h,2)+cx.pow(h,4)-4*cx.pow(p,3)*x-4*p*cx.pow(q,2)*x+6*cx.pow(p,2)*cx.pow(x,2)+2*cx.pow(q,2)*cx.pow(x,2)-4*p*cx.pow(x,3)+cx.pow(x,4)-4*cx.pow(p,2)*q*y-4*cx.pow(q,3)*y+8*p*q*x*y-4*q*cx.pow(x,2)*y+2*cx.pow(p,2)*cx.pow(y,2)+6*cx.pow(q,2)*cx.pow(y,2)-4*p*x*cx.pow(y,2)+2*cx.pow(x,2)*cx.pow(y,2)-4*q*cx.pow(y,3)+cx.pow(y,4)-2*(cx.pow(w,2)-cx.pow(h,2))*(cx.pow(p,2)-cx.pow(q,2)-2*p*x+cx.pow(x,2)+2*q*y-cx.pow(y,2))*cx.cos(2*t)-4*(cx.pow(w,2)-cx.pow(h,2))*(p-x)*(q-y)*cx.sin(2*t)));
	iterate[1] = (-2*cx.pow(p,3)*q*cx.pow(w,2)*cx.pow(h,2)*x-2*p*cx.pow(q,3)*cx.pow(w,2)*cx.pow(h,2)*x+2*p*q*cx.pow(w,4)*cx.pow(h,2)*x+2*p*q*cx.pow(w,2)*cx.pow(h,4)*x+6*cx.pow(p,2)*q*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,2)+2*cx.pow(q,3)*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,4)*cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*cx.pow(h,4)*cx.pow(x,2)-6*p*q*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,3)+2*q*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,4)+cx.pow(p,4)*cx.pow(w,2)*cx.pow(h,2)*y-cx.pow(q,4)*cx.pow(w,2)*cx.pow(h,2)*y-cx.pow(p,2)*cx.pow(w,4)*cx.pow(h,2)*y+cx.pow(q,2)*cx.pow(w,4)*cx.pow(h,2)*y-cx.pow(p,2)*cx.pow(w,2)*cx.pow(h,4)*y+cx.pow(q,2)*cx.pow(w,2)*cx.pow(h,4)*y-2*cx.pow(p,3)*cx.pow(w,2)*cx.pow(h,2)*x*y+6*p*cx.pow(q,2)*cx.pow(w,2)*cx.pow(h,2)*x*y-6*cx.pow(q,2)*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,2)*y+cx.pow(w,4)*cx.pow(h,2)*cx.pow(x,2)*y+cx.pow(w,2)*cx.pow(h,4)*cx.pow(x,2)*y+2*p*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,3)*y-cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,4)*y+4*cx.pow(q,3)*cx.pow(w,2)*cx.pow(h,2)*cx.pow(y,2)-2*q*cx.pow(w,4)*cx.pow(h,2)*cx.pow(y,2)-2*q*cx.pow(w,2)*cx.pow(h,4)*cx.pow(y,2)-6*p*q*cx.pow(w,2)*cx.pow(h,2)*x*cx.pow(y,2)+6*q*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,2)*cx.pow(y,2)-6*cx.pow(q,2)*cx.pow(w,2)*cx.pow(h,2)*cx.pow(y,3)+cx.pow(w,4)*cx.pow(h,2)*cx.pow(y,3)+cx.pow(w,2)*cx.pow(h,4)*cx.pow(y,3)+2*p*cx.pow(w,2)*cx.pow(h,2)*x*cx.pow(y,3)-2*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,2)*cx.pow(y,3)+4*q*cx.pow(w,2)*cx.pow(h,2)*cx.pow(y,4)-cx.pow(w,2)*cx.pow(h,2)*cx.pow(y,5)+2*cx.pow(p,2)*x*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))-2*cx.pow(q,2)*x*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))-4*p*cx.pow(x,2)*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))+2*cx.pow(x,3)*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))+4*p*q*y*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))-4*p*cx.pow(y,2)*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))+2*x*cx.pow(y,2)*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))-(cx.pow(w,2)-cx.pow(h,2))*cx.cos(2*t)*(cx.pow(p,2)*cx.pow(w,2)*cx.pow(h,2)*y+cx.pow(q,2)*cx.pow(w,2)*cx.pow(h,2)*y-cx.pow(w,4)*cx.pow(h,2)*y-cx.pow(w,2)*cx.pow(h,4)*y-2*p*cx.pow(w,2)*cx.pow(h,2)*x*y+cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,2)*y-2*q*cx.pow(w,2)*cx.pow(h,2)*cx.pow(y,2)+cx.pow(w,2)*cx.pow(h,2)*cx.pow(y,3)+2*x*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t)))))+(cx.pow(w,2)-cx.pow(h,2))*cx.sin(2*t)*(cx.pow(p,2)*cx.pow(w,2)*cx.pow(h,2)*x+cx.pow(q,2)*cx.pow(w,2)*cx.pow(h,2)*x-cx.pow(w,4)*cx.pow(h,2)*x-cx.pow(w,2)*cx.pow(h,4)*x-2*p*cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,2)+cx.pow(w,2)*cx.pow(h,2)*cx.pow(x,3)-2*q*cx.pow(w,2)*cx.pow(h,2)*x*y+cx.pow(w,2)*cx.pow(h,2)*x*cx.pow(y,2)-2*y*cx.sqrt(-(cx.pow(w,4)*cx.pow(h,4)*(cx.pow(w,2)*cx.pow(h,2)-(cx.pow(q,2)*cx.pow(w,2)+cx.pow(p,2)*cx.pow(h,2)-2*p*cx.pow(h,2)*x+cx.pow(h,2)*cx.pow(x,2)-2*q*cx.pow(w,2)*y+cx.pow(w,2)*cx.pow(y,2))*cx.pow(cx.cos(t),2)-(cx.pow(p,2)*cx.pow(w,2)+cx.pow(q,2)*cx.pow(h,2)-2*p*cx.pow(w,2)*x+cx.pow(w,2)*cx.pow(x,2)-2*q*cx.pow(h,2)*y+cx.pow(h,2)*cx.pow(y,2))*cx.pow(cx.sin(t),2)+p*q*cx.pow(w,2)*cx.sin(2*t)-p*q*cx.pow(h,2)*cx.sin(2*t)-q*cx.pow(w,2)*x*cx.sin(2*t)+q*cx.pow(h,2)*x*cx.sin(2*t)-p*cx.pow(w,2)*y*cx.sin(2*t)+p*cx.pow(h,2)*y*cx.sin(2*t)+cx.pow(w,2)*x*y*cx.sin(2*t)-cx.pow(h,2)*x*y*cx.sin(2*t))))))/(cx.pow(w,2)*cx.pow(h,2)*(cx.pow(p,4)+2*cx.pow(p,2)*cx.pow(q,2)+cx.pow(q,4)+cx.pow(w,4)-2*cx.pow(w,2)*cx.pow(h,2)+cx.pow(h,4)-4*cx.pow(p,3)*x-4*p*cx.pow(q,2)*x+6*cx.pow(p,2)*cx.pow(x,2)+2*cx.pow(q,2)*cx.pow(x,2)-4*p*cx.pow(x,3)+cx.pow(x,4)-4*cx.pow(p,2)*q*y-4*cx.pow(q,3)*y+8*p*q*x*y-4*q*cx.pow(x,2)*y+2*cx.pow(p,2)*cx.pow(y,2)+6*cx.pow(q,2)*cx.pow(y,2)-4*p*x*cx.pow(y,2)+2*cx.pow(x,2)*cx.pow(y,2)-4*q*cx.pow(y,3)+cx.pow(y,4)-2*(cx.pow(w,2)-cx.pow(h,2))*(cx.pow(p,2)-cx.pow(q,2)-2*p*x+cx.pow(x,2)+2*q*y-cx.pow(y,2))*cx.cos(2*t)-4*(cx.pow(w,2)-cx.pow(h,2))*(p-x)*(q-y)*cx.sin(2*t)));
	return iterate;
}



