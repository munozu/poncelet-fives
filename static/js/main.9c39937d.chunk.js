(this["webpackJsonpponcelet-fives"]=this["webpackJsonpponcelet-fives"]||[]).push([[0],{12:function(o,p,w){"use strict";w.r(p);var n=w(0),i=w.n(n),s=w(5),e=w.n(s),t=w(2),a=w(3),r=w(1),l=w(6),c=w.n(l),u={scaleX:200,scaleY:200,sW1:.01,sW2:.0025,pVal:.4,qVal:-.2,wVal:.5,hVal:.25,tVal:Math.PI/5,xInitial:0,yInitial:1,nVal:17},d=[],m=[],h=[];function v(o,p){for(var w=p.length,n=[],i=0;i<w;i++)n[i]=i<w-1?g(o,p[i][0],p[i][1],p[i+1][0],p[i+1][1]):g(o,p[0][0],p[0][1],p[w-1][0],p[w-1][1]);return n}function f(o,p){for(var w=p.length,n=[],i=0;i<w;i++)n[i]=i<w-1?V(o,p[i][0],p[i][1],p[i+1][0],p[i+1][1]):V(o,p[0][0],p[0][1],p[w-1][0],p[w-1][1]);return n}function g(o,p,w,n,i){return o.abs(o.atan2(w,p)-o.atan2(i,n))}function V(o,p,w,n,i){return o.sqrt(o.pow(n-p,2)+o.pow(i-w,2))}function b(o,p,w,n,i,s,e,t,a){var r=[],l=[],c=[],u=[];c[0]=p,c[1]=w,r[0]=[],r[0][0]=c[0],r[0][1]=c[1];for(var d=1;d<a;d++)r[d]=[],l=q(o,c[0],c[1],n,i,s,e,t),u[0]=l[0],u[1]=l[1],r[d][0]=u[0],r[d][1]=u[1],c[0]=u[0],c[1]=u[1];return r}function q(o,p,w,n,i,s,e,t){var a=[];return a[0]=(-o.pow(n,4)*o.pow(s,2)*o.pow(e,2)*p+o.pow(i,4)*o.pow(s,2)*o.pow(e,2)*p+o.pow(n,2)*o.pow(s,4)*o.pow(e,2)*p-o.pow(i,2)*o.pow(s,4)*o.pow(e,2)*p+o.pow(n,2)*o.pow(s,2)*o.pow(e,4)*p-o.pow(i,2)*o.pow(s,2)*o.pow(e,4)*p+4*o.pow(n,3)*o.pow(s,2)*o.pow(e,2)*o.pow(p,2)-2*n*o.pow(s,4)*o.pow(e,2)*o.pow(p,2)-2*n*o.pow(s,2)*o.pow(e,4)*o.pow(p,2)-6*o.pow(n,2)*o.pow(s,2)*o.pow(e,2)*o.pow(p,3)+o.pow(s,4)*o.pow(e,2)*o.pow(p,3)+o.pow(s,2)*o.pow(e,4)*o.pow(p,3)+4*n*o.pow(s,2)*o.pow(e,2)*o.pow(p,4)-o.pow(s,2)*o.pow(e,2)*o.pow(p,5)-2*o.pow(n,3)*i*o.pow(s,2)*o.pow(e,2)*w-2*n*o.pow(i,3)*o.pow(s,2)*o.pow(e,2)*w+2*n*i*o.pow(s,4)*o.pow(e,2)*w+2*n*i*o.pow(s,2)*o.pow(e,4)*w+6*o.pow(n,2)*i*o.pow(s,2)*o.pow(e,2)*p*w-2*o.pow(i,3)*o.pow(s,2)*o.pow(e,2)*p*w-6*n*i*o.pow(s,2)*o.pow(e,2)*o.pow(p,2)*w+2*i*o.pow(s,2)*o.pow(e,2)*o.pow(p,3)*w+2*o.pow(n,3)*o.pow(s,2)*o.pow(e,2)*o.pow(w,2)+6*n*o.pow(i,2)*o.pow(s,2)*o.pow(e,2)*o.pow(w,2)-2*n*o.pow(s,4)*o.pow(e,2)*o.pow(w,2)-2*n*o.pow(s,2)*o.pow(e,4)*o.pow(w,2)-6*o.pow(n,2)*o.pow(s,2)*o.pow(e,2)*p*o.pow(w,2)+o.pow(s,4)*o.pow(e,2)*p*o.pow(w,2)+o.pow(s,2)*o.pow(e,4)*p*o.pow(w,2)+6*n*o.pow(s,2)*o.pow(e,2)*o.pow(p,2)*o.pow(w,2)-2*o.pow(s,2)*o.pow(e,2)*o.pow(p,3)*o.pow(w,2)-6*n*i*o.pow(s,2)*o.pow(e,2)*o.pow(w,3)+2*i*o.pow(s,2)*o.pow(e,2)*p*o.pow(w,3)+2*n*o.pow(s,2)*o.pow(e,2)*o.pow(w,4)-o.pow(s,2)*o.pow(e,2)*p*o.pow(w,4)-4*n*i*p*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))+4*i*o.pow(p,2)*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))+2*o.pow(n,2)*w*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))-2*o.pow(i,2)*w*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))-2*o.pow(p,2)*w*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))+4*i*o.pow(w,2)*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))-2*o.pow(w,3)*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))+(o.pow(s,2)-o.pow(e,2))*o.sin(2*t)*(o.pow(n,2)*o.pow(s,2)*o.pow(e,2)*w+o.pow(i,2)*o.pow(s,2)*o.pow(e,2)*w-o.pow(s,4)*o.pow(e,2)*w-o.pow(s,2)*o.pow(e,4)*w-2*n*o.pow(s,2)*o.pow(e,2)*p*w+o.pow(s,2)*o.pow(e,2)*o.pow(p,2)*w-2*i*o.pow(s,2)*o.pow(e,2)*o.pow(w,2)+o.pow(s,2)*o.pow(e,2)*o.pow(w,3)+2*p*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t))))+(o.pow(s,2)-o.pow(e,2))*o.cos(2*t)*(o.pow(n,2)*o.pow(s,2)*o.pow(e,2)*p+o.pow(i,2)*o.pow(s,2)*o.pow(e,2)*p-o.pow(s,4)*o.pow(e,2)*p-o.pow(s,2)*o.pow(e,4)*p-2*n*o.pow(s,2)*o.pow(e,2)*o.pow(p,2)+o.pow(s,2)*o.pow(e,2)*o.pow(p,3)-2*i*o.pow(s,2)*o.pow(e,2)*p*w+o.pow(s,2)*o.pow(e,2)*p*o.pow(w,2)-2*w*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))))/(o.pow(s,2)*o.pow(e,2)*(o.pow(n,4)+2*o.pow(n,2)*o.pow(i,2)+o.pow(i,4)+o.pow(s,4)-2*o.pow(s,2)*o.pow(e,2)+o.pow(e,4)-4*o.pow(n,3)*p-4*n*o.pow(i,2)*p+6*o.pow(n,2)*o.pow(p,2)+2*o.pow(i,2)*o.pow(p,2)-4*n*o.pow(p,3)+o.pow(p,4)-4*o.pow(n,2)*i*w-4*o.pow(i,3)*w+8*n*i*p*w-4*i*o.pow(p,2)*w+2*o.pow(n,2)*o.pow(w,2)+6*o.pow(i,2)*o.pow(w,2)-4*n*p*o.pow(w,2)+2*o.pow(p,2)*o.pow(w,2)-4*i*o.pow(w,3)+o.pow(w,4)-2*(o.pow(s,2)-o.pow(e,2))*(o.pow(n,2)-o.pow(i,2)-2*n*p+o.pow(p,2)+2*i*w-o.pow(w,2))*o.cos(2*t)-4*(o.pow(s,2)-o.pow(e,2))*(n-p)*(i-w)*o.sin(2*t))),a[1]=(-2*o.pow(n,3)*i*o.pow(s,2)*o.pow(e,2)*p-2*n*o.pow(i,3)*o.pow(s,2)*o.pow(e,2)*p+2*n*i*o.pow(s,4)*o.pow(e,2)*p+2*n*i*o.pow(s,2)*o.pow(e,4)*p+6*o.pow(n,2)*i*o.pow(s,2)*o.pow(e,2)*o.pow(p,2)+2*o.pow(i,3)*o.pow(s,2)*o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,4)*o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*o.pow(e,4)*o.pow(p,2)-6*n*i*o.pow(s,2)*o.pow(e,2)*o.pow(p,3)+2*i*o.pow(s,2)*o.pow(e,2)*o.pow(p,4)+o.pow(n,4)*o.pow(s,2)*o.pow(e,2)*w-o.pow(i,4)*o.pow(s,2)*o.pow(e,2)*w-o.pow(n,2)*o.pow(s,4)*o.pow(e,2)*w+o.pow(i,2)*o.pow(s,4)*o.pow(e,2)*w-o.pow(n,2)*o.pow(s,2)*o.pow(e,4)*w+o.pow(i,2)*o.pow(s,2)*o.pow(e,4)*w-2*o.pow(n,3)*o.pow(s,2)*o.pow(e,2)*p*w+6*n*o.pow(i,2)*o.pow(s,2)*o.pow(e,2)*p*w-6*o.pow(i,2)*o.pow(s,2)*o.pow(e,2)*o.pow(p,2)*w+o.pow(s,4)*o.pow(e,2)*o.pow(p,2)*w+o.pow(s,2)*o.pow(e,4)*o.pow(p,2)*w+2*n*o.pow(s,2)*o.pow(e,2)*o.pow(p,3)*w-o.pow(s,2)*o.pow(e,2)*o.pow(p,4)*w+4*o.pow(i,3)*o.pow(s,2)*o.pow(e,2)*o.pow(w,2)-2*i*o.pow(s,4)*o.pow(e,2)*o.pow(w,2)-2*i*o.pow(s,2)*o.pow(e,4)*o.pow(w,2)-6*n*i*o.pow(s,2)*o.pow(e,2)*p*o.pow(w,2)+6*i*o.pow(s,2)*o.pow(e,2)*o.pow(p,2)*o.pow(w,2)-6*o.pow(i,2)*o.pow(s,2)*o.pow(e,2)*o.pow(w,3)+o.pow(s,4)*o.pow(e,2)*o.pow(w,3)+o.pow(s,2)*o.pow(e,4)*o.pow(w,3)+2*n*o.pow(s,2)*o.pow(e,2)*p*o.pow(w,3)-2*o.pow(s,2)*o.pow(e,2)*o.pow(p,2)*o.pow(w,3)+4*i*o.pow(s,2)*o.pow(e,2)*o.pow(w,4)-o.pow(s,2)*o.pow(e,2)*o.pow(w,5)+2*o.pow(n,2)*p*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))-2*o.pow(i,2)*p*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))-4*n*o.pow(p,2)*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))+2*o.pow(p,3)*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))+4*n*i*w*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))-4*n*o.pow(w,2)*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))+2*p*o.pow(w,2)*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))-(o.pow(s,2)-o.pow(e,2))*o.cos(2*t)*(o.pow(n,2)*o.pow(s,2)*o.pow(e,2)*w+o.pow(i,2)*o.pow(s,2)*o.pow(e,2)*w-o.pow(s,4)*o.pow(e,2)*w-o.pow(s,2)*o.pow(e,4)*w-2*n*o.pow(s,2)*o.pow(e,2)*p*w+o.pow(s,2)*o.pow(e,2)*o.pow(p,2)*w-2*i*o.pow(s,2)*o.pow(e,2)*o.pow(w,2)+o.pow(s,2)*o.pow(e,2)*o.pow(w,3)+2*p*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t))))+(o.pow(s,2)-o.pow(e,2))*o.sin(2*t)*(o.pow(n,2)*o.pow(s,2)*o.pow(e,2)*p+o.pow(i,2)*o.pow(s,2)*o.pow(e,2)*p-o.pow(s,4)*o.pow(e,2)*p-o.pow(s,2)*o.pow(e,4)*p-2*n*o.pow(s,2)*o.pow(e,2)*o.pow(p,2)+o.pow(s,2)*o.pow(e,2)*o.pow(p,3)-2*i*o.pow(s,2)*o.pow(e,2)*p*w+o.pow(s,2)*o.pow(e,2)*p*o.pow(w,2)-2*w*o.sqrt(-o.pow(s,4)*o.pow(e,4)*(o.pow(s,2)*o.pow(e,2)-(o.pow(i,2)*o.pow(s,2)+o.pow(n,2)*o.pow(e,2)-2*n*o.pow(e,2)*p+o.pow(e,2)*o.pow(p,2)-2*i*o.pow(s,2)*w+o.pow(s,2)*o.pow(w,2))*o.pow(o.cos(t),2)-(o.pow(n,2)*o.pow(s,2)+o.pow(i,2)*o.pow(e,2)-2*n*o.pow(s,2)*p+o.pow(s,2)*o.pow(p,2)-2*i*o.pow(e,2)*w+o.pow(e,2)*o.pow(w,2))*o.pow(o.sin(t),2)+n*i*o.pow(s,2)*o.sin(2*t)-n*i*o.pow(e,2)*o.sin(2*t)-i*o.pow(s,2)*p*o.sin(2*t)+i*o.pow(e,2)*p*o.sin(2*t)-n*o.pow(s,2)*w*o.sin(2*t)+n*o.pow(e,2)*w*o.sin(2*t)+o.pow(s,2)*p*w*o.sin(2*t)-o.pow(e,2)*p*w*o.sin(2*t)))))/(o.pow(s,2)*o.pow(e,2)*(o.pow(n,4)+2*o.pow(n,2)*o.pow(i,2)+o.pow(i,4)+o.pow(s,4)-2*o.pow(s,2)*o.pow(e,2)+o.pow(e,4)-4*o.pow(n,3)*p-4*n*o.pow(i,2)*p+6*o.pow(n,2)*o.pow(p,2)+2*o.pow(i,2)*o.pow(p,2)-4*n*o.pow(p,3)+o.pow(p,4)-4*o.pow(n,2)*i*w-4*o.pow(i,3)*w+8*n*i*p*w-4*i*o.pow(p,2)*w+2*o.pow(n,2)*o.pow(w,2)+6*o.pow(i,2)*o.pow(w,2)-4*n*p*o.pow(w,2)+2*o.pow(p,2)*o.pow(w,2)-4*i*o.pow(w,3)+o.pow(w,4)-2*(o.pow(s,2)-o.pow(e,2))*(o.pow(n,2)-o.pow(i,2)-2*n*p+o.pow(p,2)+2*i*w-o.pow(w,2))*o.cos(2*t)-4*(o.pow(s,2)-o.pow(e,2))*(n-p)*(i-w)*o.sin(2*t))),a}function y(){var o=Object(n.useState)(),p=Object(r.a)(o,2),w=p[0],s=p[1],e=Object(n.useState)({scaleX:200,scaleY:200,sW1:.01,sW2:.0025,pVal:.4,qVal:-.2,wVal:.5,hVal:.25,tVal:Math.PI/5,xInitial:0,yInitial:1,nVal:17}),t=Object(r.a)(e,2),l=t[0],g=t[1],V=function(o){return g((function(p){return Object(a.a)(Object(a.a)({},p),o)}))};return i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",null,i.a.createElement(c.a,{setup:function(o,p){return function(o,p,w){var n=w.params,i=void 0===n?u:n,s=w.exportData,e=i.pVal,t=i.qVal,a=i.wVal,r=i.hVal,l=i.tVal,c=i.xInitial,g=i.yInitial,V=i.nVal;o.createCanvas(500,500).parent(p),d=b(o,c,g,e,t,a,r,l,V),m=v(o,d),h=f(o,d),s&&s({ponceletOrbit:d,angularDurations:m,euclideanDurations:h})}(o,p,{params:l,exportData:function(o){return s(o)}})},draw:function(o){return function(o,p){var w,n,i,s,e,t=p.params,a=void 0===t?u:t,r=p.exportData,l=a.sW1,c=void 0===l?2/a.scaleX:l,g=a.sW2,V=void 0===g?2/a.scaleX:g,q=a.pVal,y=a.qVal,O=a.wVal,x=a.hVal,E=a.tVal,k=a.xInitial,W=a.yInitial,j=a.nVal;o.background(230),o.scale(200,-200),o.translate(o.width/2/200,-o.height/2/200),o.push(),o.stroke(0,0,255),o.noFill(),o.strokeWeight(c),o.circle(0,0,2),o.pop(),w=q,n=y,i=O,s=x,e=E,o.push(),o.stroke(255,0,0),o.noFill(),o.translate(w,n),o.rotate(e),o.strokeWeight(c),o.ellipse(0,0,2*i,2*s),o.pop(),o.push(),o.fill(0,0,0),o.strokeWeight(c),o.pop(),d=b(o,k,W,q,y,O,x,E,j),m=v(o,d),h=f(o,d),function(p){var w=p.length;o.push();for(var n=0;n<w;n++)o.stroke(0,0,0),o.fill(0,0,0),o.strokeWeight(V),n<w-1&&o.line(p[n][0],p[n][1],p[n+1][0],p[n+1][1]),o.strokeWeight(c),o.circle(p[n][0],p[n][1],.02);o.pop()}(d),r&&r({ponceletOrbit:d,angularDurations:m,euclideanDurations:h})}(o,{params:l,exportData:function(o){return s(o)}})}}),Object.entries(l).filter((function(o){var p=Object(r.a)(o,1)[0];return["pVal","qVal","wVal","hVal","tVal"].includes(p)})).map((function(o){var p=Object(r.a)(o,2),w=p[0],n=p[1];return i.a.createElement(O,{name:w,value:n,onChange:V})})),i.a.createElement(O,{name:"nVal",min:1,step:1,max:100,value:l.nVal,onChange:V})),w&&i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("pre",{style:{margin:0,width:250,padding:24,border:"1px solid #ddd"}},"ponceletOrbit: ",JSON.stringify(w.ponceletOrbit,null,2)),i.a.createElement("pre",{style:{margin:0,width:250,padding:24,border:"1px solid #ddd"}},"angularDurations:"," ",JSON.stringify(w.angularDurations,null,2)),i.a.createElement("pre",{style:{margin:0,width:250,padding:24,border:"1px solid #ddd"}},"euclideanDurations:"," ",JSON.stringify(w.euclideanDurations,null,2))))}function O(o){var p=o.name,w=o.min,s=void 0===w?-1:w,e=o.max,a=void 0===e?1:e,l=o.step,c=void 0===l?.001:l,u=o.value,d=o.onChange,m=Object(n.useState)(u),h=Object(r.a)(m,2),v=h[0],f=void 0===v?"":v,g=h[1],V=function(o){var w=Number(o.target.value);g(w),d(Object(t.a)({},p,w))};return i.a.createElement("div",null,i.a.createElement("label",{style:{width:500}},i.a.createElement("span",{style:{display:"inline-block",width:60}},p),i.a.createElement("input",{style:{width:160},type:"number",min:s,max:a,step:c,value:f,onChange:V}),i.a.createElement("input",{style:{width:160},type:"range",min:s,max:a,step:c,value:f,onChange:V})))}function x(){return i.a.createElement(y,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));e.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(o){o.unregister()})).catch((function(o){console.error(o.message)}))},7:function(o,p,w){o.exports=w(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.9c39937d.chunk.js.map