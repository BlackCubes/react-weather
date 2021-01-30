(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{34:function(e,t,a){},36:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(2),i=a.n(r),c=a(26),s=a.n(c),o=(a(34),a(10)),l=a(5),d=a.n(l),u=a(6),h=a(8),m=a(9),p=a(4),j=a(12),b=a(11),v=(a(36),function(e){var t=e.message,a=e.type,r=t?"block":"none";return Object(n.jsx)("div",{className:"alert alert--".concat(a),style:{display:r},children:t})}),x=a(13),g=a(27),w=a(28),f=/^[a-zA-Z\u0080-\u024F]+(?:([ \-']|(\. ))[a-zA-Z\u0080-\u024F]+)*$/,O=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={location:"",errors:{location:""},errorClass:""},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.validateForm=n.validateForm.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.location,n=t.errors,r=this.props.onSubmit;this.validateForm(n)?r(a):this.setState({errors:{location:"Invalid search!"},errorClass:"error"}),this.setState({location:""})}},{key:"handleChange",value:function(e){var t;e.preventDefault();var a=e.target,n=a.name,r=a.value,i=this.state.errors,c=this.state.errorClass;r.length<3?i.location="Must be a minimum of 3 characters.":r.length>91?i.location="Must be 90 characters or less.":f.test(r)?i.location="":i.location="Must be a valid city.",c=i.location.length>0?"error":"",this.setState((t={},Object(x.a)(t,n,r),Object(x.a)(t,"errors",i),Object(x.a)(t,"errorClass",c),t))}},{key:"validateForm",value:function(e){var t=!0;return Object.values(e).forEach((function(e){e.length>0&&(t=!1)})),t}},{key:"render",value:function(){var e=this.state,t=e.location,a=e.errors,r=e.errorClass;return Object(n.jsx)("div",{className:"search-bar",children:Object(n.jsx)("form",{className:"form",onSubmit:this.handleSubmit,noValidate:!0,children:Object(n.jsxs)("div",{className:"form__group-wrapper",children:[Object(n.jsx)("div",{className:"form__group",children:Object(n.jsxs)("label",{htmlFor:"searchInput",children:[Object(n.jsx)("input",{type:"text",name:"location",className:"form__input input-text ".concat(r),id:"searchInput",value:t,placeholder:"City Name",onChange:this.handleChange,noValidate:!0}),Object(n.jsx)("span",{className:"form__label label-text",children:a.location.length>0?a.location:"Winter is coming..."})]})}),Object(n.jsx)("div",{className:"form__group",children:Object(n.jsx)("button",{className:"btn",type:"submit",disabled:a.location.length>0,style:{cursor:a.location.length>0&&"not-allowed"},children:Object(n.jsx)(g.a,{icon:w.a,className:"btn-icon"})})})]})})})}}]),a}(i.a.Component),y=function(e){var t=e.weatherIcon;return Object(n.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t,"@2x.png"),alt:"Weather icon"})},_=a(1),C=a.n(_),N=function(e){var t=e.temp;return"metric"===e.units?Math.round((t-32)/1.8):t};N.propTypes={temp:C.a.number.isRequired,units:C.a.oneOf(["imperial","metric"]).isRequired};var k=N,S=function(e){var t=e.windSpeed;return"metric"===e.units?"".concat(Math.round(t/2.237*3.6)," km/h"):"".concat(t," mph")};S.propTypes={windSpeed:C.a.number.isRequired,units:C.a.oneOf(["imperial","metric"]).isRequired};var T=S,F=function(e){var t=e.location,a=e.dayOfWeek,r=e.weatherCondition,i=e.icon,c=e.units,s=e.currentTemp,o=e.highTemp,l=e.lowTemp,d=e.precipitation,u=e.humidity,h=e.windSpeed,m=e.convertTempUnits;return Object(n.jsx)("div",{className:"weather-details-wrapper",children:Object(n.jsxs)("div",{className:"weather-details",children:[Object(n.jsxs)("div",{className:"weather-details__header",children:[Object(n.jsx)("div",{className:"weather-details__header-location heading-primary",children:t}),Object(n.jsx)("div",{className:"weather-details__header-day paragraph",children:a}),Object(n.jsx)("div",{className:"weather-details__header-weather paragraph",children:r})]}),Object(n.jsxs)("div",{className:"weather-details__condition",children:[Object(n.jsxs)("div",{className:"weather-details__condition--primary",children:[Object(n.jsx)("div",{className:"weather-details__condition-icon",children:Object(n.jsx)(y,{weatherIcon:i})}),Object(n.jsxs)("div",{className:"weather-details__condition-temp",children:[Object(n.jsx)("span",{className:"weather-details__condition-temp-value heading-secondary",children:Object(n.jsx)(k,{temp:s,units:c})}),Object(n.jsxs)("div",{className:"weather-details__condition-temp-unit book-size",children:[Object(n.jsx)("span",{className:"active",onClick:m,onKeyDown:m,role:"presentation",children:"F"}),"\xa0 | \xa0",Object(n.jsx)("span",{onClick:m,onKeyDown:m,role:"presentation",children:"C"})]})]})]}),Object(n.jsxs)("div",{className:"weather-details__condition--secondary paragraph",children:[Object(n.jsxs)("div",{className:"weather-details__condition-hightemp",children:["High:\xa0",Object(n.jsx)(k,{temp:o,units:c}),"\xb0"]}),Object(n.jsxs)("div",{className:"weather-details__condition-lowtemp",children:["Low:\xa0",Object(n.jsx)(k,{temp:l,units:c}),"\xb0"]}),Object(n.jsx)("div",{className:"weather-details__condition-precipitation",children:"Precipitation: ".concat(d+String.fromCharCode(37))}),Object(n.jsx)("div",{className:"weather-details__condition-humidity",children:"Humidity: ".concat(u+String.fromCharCode(37))}),Object(n.jsxs)("div",{className:"weather-details__condition-windspeed",children:["Wind:\xa0",Object(n.jsx)(T,{windSpeed:h,units:c})]})]})]})]})})};F.defaultProps={units:"imperial",currentTemp:55};var M=F,D=function(e){var t=e.dayOfWeek,a=e.icon,r=e.highTemp,i=e.lowTemp,c=e.onClick,s=e.activeClass,o=e.units;return Object(n.jsxs)("div",{className:"weather-summary ".concat(s),onClick:c,onKeyDown:c,role:"presentation",children:[Object(n.jsx)("div",{className:"weather-summary__day paragraph",children:t}),Object(n.jsx)("div",{className:"weather-summary__icon",children:Object(n.jsx)(y,{weatherIcon:a})}),Object(n.jsxs)("div",{className:"weather-summary__temp paragraph",children:[Object(n.jsx)("div",{className:"weather-summary__temp-high",children:Object(n.jsx)(k,{temp:r,units:o})}),Object(n.jsx)("div",{className:"weather-summary__temp-low",children:Object(n.jsx)(k,{temp:i,units:o})})]})]})};D.defaultProps={activeClass:"",units:"imperial"};var I=D,U=a(14),L=a.n(U),W=function(){var e=Object(u.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://www.mapquestapi.com/geocoding/v1/address?key=".concat("F7DqBcye6jZym3T2Xglo1AMXPbjPVMxz","&location=").concat(t),e.next=4,L.a.get(a);case 4:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.data.results[0].locations[0].latLng);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://www.mapquestapi.com/geocoding/v1/reverse?key=".concat("F7DqBcye6jZym3T2Xglo1AMXPbjPVMxz","&location=").concat(t,",").concat(a),e.next=4,L.a.get(n);case 4:if(200!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",r.data.results[0].locations[0].adminArea5);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(a,"&appid=").concat("d28fe2af55d6feb042d59a5e1aaa4f3c","&units=imperial"),e.next=4,L.a.get(n);case 4:if(200!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",r.data);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),z=function(e){return new Date(1e3*e)},A=function(e,t,a){return new Intl.DateTimeFormat(e,t).format(a)},B=function(e){var t=e.forecast,a=e.getIndexFromComp,r=e.activeClass,i=e.units,c=function(e){var t=Object(o.a)(e.currentTarget.parentNode.children).indexOf(e.currentTarget);a(t)};return Object(n.jsx)("div",{className:"weather-forecast-wrapper",children:t.slice(0,5).map((function(e,t){return Object(n.jsx)(I,{dayOfWeek:A("en-US",{weekday:"short"},z(e.dt)),icon:e.weather[0].icon,highTemp:Math.round(e.temp.max),lowTemp:Math.round(e.temp.min),onClick:c,activeClass:r(t),units:i},e.dt)}))})},R=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,error:null,errorType:"",weather:null,location:null,index:0,tempUnit:"imperial"},n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.getNewWeatherData=n.getNewWeatherData.bind(Object(p.a)(n)),n.getIndexFromComp=n.getIndexFromComp.bind(Object(p.a)(n)),n.convertTempUnits=n.convertTempUnits.bind(Object(p.a)(n)),n.activeClass=n.activeClass.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=function(){var t=Object(u.a)(d.a.mark((function t(a){var n,r,i,c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=a.coords,r=n.latitude,i=n.longitude,t.next=4,q(r,i);case 4:return c=t.sent,t.next=7,P(r,i);case 7:s=t.sent,e.setState({weather:c,location:s,isLoading:!1}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),e.setState({error:"There was an error getting the weather. Try again or contact the system admin.",errorType:"error",isLoading:!1}),setTimeout((function(){return e.setState({error:null})}),8e3);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();navigator.geolocation.getCurrentPosition(t,(function(t){console.log(t.message),e.setState({error:"Unable to retrieve your location.",errorType:"warning",isLoading:!1}),setTimeout((function(){return e.setState({error:null})}),8e3)}))}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.location;t.location!==a&&this.getNewWeatherData(a)}},{key:"onSubmit",value:function(e){this.setState({location:e})}},{key:"getNewWeatherData",value:function(){var e=Object(u.a)(d.a.mark((function e(t){var a,n,r,i,c=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(t);case 3:return a=e.sent,n=a.lat,r=a.lng,e.next=8,q(n,r);case 8:i=e.sent,this.setState({weather:i}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),this.setState({error:"There was an error getting the weather or location. Try again or contact the system admin.",errorType:"error"}),setTimeout((function(){return c.setState({error:null})}),8e3);case 16:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getIndexFromComp",value:function(e){this.setState({index:e})}},{key:"convertTempUnits",value:function(e){var t=e.target.textContent;this.setState({tempUnit:"C"===t?"metric":"imperial"});var a=Object(o.a)(e.target.parentNode.children),n=a.indexOf(e.target);a.forEach((function(e,t){t!==n&&e.classList.remove("active")})),e.target.className="active"}},{key:"activeClass",value:function(e){return this.state.index===e?"active":""}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.error,r=e.errorType,i=e.weather,c=e.location,s=e.index,o=e.tempUnit,l=i?Object(n.jsxs)(n.Fragment,{children:[a&&Object(n.jsx)(v,{message:a,type:r}),Object(n.jsx)(O,{onSubmit:this.onSubmit}),Object(n.jsx)(M,{location:c,dayOfWeek:A("en-US",{weekday:"long"},z(0===s?i.current.dt:i.daily[s].dt)),weatherCondition:0===s?i.current.weather[0].description:i.daily[s].weather[0].description,icon:0===s?i.current.weather[0].icon:i.daily[s].weather[0].icon,currentTemp:Math.round(0===s?i.current.temp:i.daily[s].temp.day),highTemp:Math.round(0===s?i.daily[0].temp.max:i.daily[s].temp.max),lowTemp:Math.round(0===s?i.daily[0].temp.min:i.daily[s].temp.min),precipitation:0===s?Math.round(100*i.daily[0].pop):Math.round(100*i.daily[s].pop),humidity:0===s?i.current.humidity:i.daily[s].humidity,windSpeed:Math.round(0===s?i.current.wind_speed:i.daily[s].wind_speed),convertTempUnits:this.convertTempUnits,units:o}),Object(n.jsx)(B,{forecast:i.daily,getIndexFromComp:this.getIndexFromComp,activeClass:this.activeClass,units:o})]}):Object(n.jsxs)(n.Fragment,{children:[a&&Object(n.jsx)(v,{message:a,type:r}),Object(n.jsx)(O,{onSubmit:this.onSubmit})]});return Object(n.jsx)("main",{children:Object(n.jsx)("div",{className:"weather-wrapper",children:t?Object(n.jsx)("div",{className:"heading-secondary",children:"Loading..."}):l})})}}]),a}(i.a.Component),V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root")),V()}},[[58,1,2]]]);
//# sourceMappingURL=main.35fec211.chunk.js.map