(this["webpackJsonpbike-app"]=this["webpackJsonpbike-app"]||[]).push([[0],{20:function(t,e,a){t.exports=a(45)},43:function(t,e,a){},44:function(t,e,a){},45:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(18),o=a.n(s),i=a(2),l=a(3),c=a(5),u=a(4),m=a(7),p=a.n(m);var h=function(){return r.a.createElement("header",{className:"wrapper"},r.a.createElement("h1",null,"Rider ",r.a.createElement("i",{className:"fas fa-search-location","aria-hidden":"true"})," Radar"),r.a.createElement("p",null,"Enter your location below to fetch information about the closest Bike Share stations near you. Enter both a starting point and ending point to best plan your trip. New to Bike Share Toronto or need some help? ",r.a.createElement("a",{href:"https://bikesharetoronto.com/"},"Learn more here.")))},f=a(6),d=a.n(f),b=a(8),v=a(19),g=function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={startLocation:"",endLocation:""},t.onChange=function(e){return t.setState(Object(v.a)({},e.target.name,e.target.value))},t.getLocationInfo=function(){var t=Object(b.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.trim()){t.next=4;break}return t.abrupt("return",{lat:0,lng:0});case 4:-1===e.toLowerCase().indexOf("toronto")&&(e+=" toronto");case 5:return"http://open.mapquestapi.com/geocoding/v1/address","oG2GROEUtNBuOk8SP7rT4qE7fPSTy8mo",t.next=9,p()({method:"GET",url:"http://open.mapquestapi.com/geocoding/v1/address",params:{key:"oG2GROEUtNBuOk8SP7rT4qE7fPSTy8mo",format:"json",location:e}});case 9:return a=t.sent,t.abrupt("return",a.data.results[0].locations[0].latLng);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.getDistance=function(t,e,a,n){var r=.017453292519943295,s=Math.cos,o=.5-s((a-t)*r)/2+s(t*r)*s(a*r)*(1-s((n-e)*r))/2;return 12742*Math.asin(Math.sqrt(o))},t.getClosestStations=function(e){for(var a=[],n=0;n<t.props.stations.length;n++){var r=t.props.stations[n];t.getDistance(e.lat,e.lng,r.lat,r.lon)<.3&&a.push(r)}return a},t.getStationStatus=Object(b.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://toronto-us.publicbikesystem.net/ube/gbfs/v1/en/station_status",t.next=3,p()({method:"GET",url:"https://toronto-us.publicbikesystem.net/ube/gbfs/v1/en/station_status",params:{format:"json"}});case 3:return e=t.sent,t.abrupt("return",e.data.data.stations);case 5:case"end":return t.stop()}}),t)}))),t.getCompleteStationData=function(t,e){var a=[];return t.forEach((function(t){e.forEach((function(e){if(t.station_id===e.station_id&&"IN_SERVICE"===t.status){var n={station_id:t.station_id,num_bikes_available:t.num_bikes_available,num_docks_available:t.num_docks_available,address:e.address,lat:e.lat,lng:e.lon};a.push(n)}}))})),a},t.search=function(){var e=Object(b.a)(d.a.mark((function e(a){var n,r,s,o,i,l,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t.getLocationInfo(t.state.startLocation);case 3:return n=e.sent,e.next=6,t.getLocationInfo(t.state.endLocation);case 6:return r=e.sent,s=t.getClosestStations(n),o=t.getClosestStations(r),e.next=11,t.getStationStatus();case 11:i=e.sent,l=t.getCompleteStationData(i,s),c=t.getCompleteStationData(i,o),t.props.handleResults(l,c);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"search"},r.a.createElement("form",{onSubmit:this.search},r.a.createElement("input",{type:"text",name:"startLocation",value:this.state.startPoint,onChange:this.onChange,placeholder:"Starting point","aria-label":"Enter start location",required:!0}),r.a.createElement("button",{type:"submit",value:"Submit"},"Submit"),r.a.createElement("input",{type:"text",name:"endLocation",value:this.state.endPoint,onChange:this.onChange,placeholder:"Ending point","aria-label":"Enter end location"})))}}]),a}(n.Component),E=function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props.result,e=t.address,a=t.num_bikes_available,n=t.num_docks_available,s=t.lat,o=t.lng,i="https://www.google.ca/maps/@".concat(s,",").concat(o,",20z");return r.a.createElement("div",{className:"result"},r.a.createElement("h3",null,e),r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-bicycle","aria-label":"Bicycles available"})," ",a," "),r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-charging-station","aria-label":"Docks available"})," ",n," "),r.a.createElement("h3",null,r.a.createElement("a",{href:i},"Google Maps")))}}]),a}(n.Component),k=function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.props.results.length>0?this.props.results.map((function(t){return r.a.createElement(E,{result:t})})):r.a.createElement("span",null,"No results found, please search again")}}]),a}(n.Component),y=(a(43),a(44),function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).handleResults=function(e,a){t.setState({startResults:e,endResults:a,hasResults:!0})},t.getStationInfo=function(){p()({method:"GET",url:"https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information",params:{format:"json"}}).then((function(e){t.setState({stations:e.data.data.stations})}))},t.state={hasResults:!1,stations:[],startResults:[],endResults:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getStationInfo()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("main",{className:"wrapper"},r.a.createElement(g,{stations:this.state.stations,handleResults:this.handleResults}),r.a.createElement("section",{className:"results",style:{visibility:this.state.hasResults?"visible":"hidden"}},r.a.createElement("div",null,r.a.createElement("h2",null,"Start"),r.a.createElement(k,{results:this.state.startResults})),r.a.createElement("div",null,r.a.createElement("h2",null,"End"),r.a.createElement(k,{results:this.state.endResults})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.f23d57f6.chunk.js.map