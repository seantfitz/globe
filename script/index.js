Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxY2JiMDhjMS1jODcyLTQxYWQtYmJiOC1hNTUyNDE0Zjg2N2YiLCJpZCI6NjQ3MDIsImlhdCI6MTYyOTQyMjY0OX0.XrBfYMVmvrlNeNuAdbcCyVHJ44KMq_yCGptHtZ1F9VY';

const viewer = new Cesium.Viewer('cesiumContainer', {
	imageryProvider: new Cesium.IonImageryProvider({ assetId: 3954 }),//asset added to account
	terrainProvider: Cesium.createWorldTerrain(),
	timeline: false,
	animation: false,
	geocoder: false,
	baseLayerPicker: false,
	sceneModePicker: false,
	navigationHelpButton: false,
	homeButton: false,
	fullscreenButton: false,
});

const arr = {
	AP21225803392372:{
		country:{
			lat:14.4762729,
			lon:-15.6381093,
			name:"Senegal",
		},
		locality:{
			lat:14.692778,
			lon:-17.446667,
			name:`Dakar`,
			imageId:"AP21225803392372",
			caption:`Mobile Emergency Care Service (SAMU) doctor Yahya Niane puts on protective gear before helping a woman who is eight months pregnant and has COVID-19, transferring her to a hospital in Dakar, Senegal, Thursday, Aug. 5, 2021. Ambulance services in the West African nation of Senegal say about 90% of their calls right now are responding to COVID-19 patients with trouble breathing. The avalanche of cases comes as Senegal confronts a devastating third wave with the arrival of the delta variant. (AP Photo/Leo Correa)`,
			hyperlink:`https://www.google.com`,
		}
	},
	AP21225803315664:{
		country:{
			lat:38.1245098,
			lon:22.2389456,
			name:"Greece",
		},
		locality:{
			lat:38.766667,
			lon:23.316667,
			name:`Evia`,
			imageId:"AP21225803315664",
			caption:`A man watches the flames as wildfire approaches Kochyli beach near the village of Limni, Greece, on the island of Evia, about 160 kilometers (100 miles) north of Athens, late Friday, Aug. 6, 2021, as wildfires raged uncontrolled through Greece and Turkey. (AP Photo/Thodoris Nikolaou)`,
			hyperlink:`https://www.google.com`,
		}
	},
	// AUSTRALIA:{
	// 	country:{
	// 		lat:-25.346276,
	// 		lon:131.036916,
	// 		name:"Australia",
	// 	},
	// 	locality:{
	// 		lat:-33.865,
	// 		lon:151.209444,
	// 		name:`Sydney`,
	// 		imageId:"AP21225803506878",
	// 		caption:`test slide for large orientaion change`,
	// 		hyperlink:`https://www.google.com`,
	// 	}
	// },
	AP21225803506878:{
		country:{
			lat:34.4198505,
			lon:86.0852843,
			name:"China",
		},
		locality:{
			lat:39.906667,
			lon:116.3975,
			name:`Beijing`,
			imageId:"AP21225803506878",
			caption:`Residents past through a flooded section of a road during a thunderstorm in Beijing, China, Monday, Aug. 9, 2021. (AP Photo/Ng Han Guan)`,
			hyperlink:`https://www.google.com`,
		}
	},
	AP21225803562971:{
		country:{
			lat:51.0899717,
			lon:5.9696243,
			name:"Germany",
		},
		locality:{
			lat:50.039359,
			lon:8.561927,
			name:`Frankfurt`,
			imageId:"AP21225803562971",
			caption:`A long camera exposure photo shows an aircraft approaching for landing at the international airport in Frankfurt, Germany, on Monday, Aug. 9, 2021. (AP Photo/Michael Probst)`,
			hyperlink:`https://www.google.com`,
		}
	},
	AP21225803662393:{
		country:{
			lat:20.7505401,
			lon:73.7295628,
			name:"India",
		},
		locality:{
			lat:28.655833,
			lon:77.240833,
			name:`New Delhi`,
			imageId:"AP21225803662393",
			caption:`Navy sailors warm up before the start of full dress rehearsals for Independence Day celebrations at the historic 17th century Red Fort in New Delhi, India, on Friday, Aug. 13, 2021. India commemorates its 1947 independence from British colonial rule on Aug. 15. (AP Photo/Manish Swarup)`,
			hyperlink:`https://www.google.com`,
		}
	},
	AP21225803604054:{
		country:{
			lat:33.852502,
			lon:63.2129779,
			name:"Afghanistan",
		},
		locality:{
			lat:31.616667,
			lon:65.716667,
			name:`Kandahar`,
			imageId:"AP21225803604054",
			caption:`Plumes of smoke rise into the sky after fighting between the Taliban and Afghan security personnel in Kandahar, Afghanistan, southwest of Kabul, on Thursday, Aug. 12, 2021. (AP Photo/Sidiqullah Khan)`,
			hyperlink:`https://www.google.com`,
		}
	},
	AP21225803696131:{
		country:{
			lat:33.852502,
			lon:63.2129779,
			name:"Afghanistan",
		},
		locality:{
			lat:36.728611,
			lon:68.868056,
			name:`Kunduz`,
			imageId:"AP21225803696131",
			caption:`Taliban fighters stand guard in Kunduz city, northern Afghanistan, Monday, Aug. 9, 2021. The militants have ramped up their push across much of Afghanistan in recent weeks, turning their guns on provincial capitals after taking district after district and large swaths of land in the mostly rural countryside. (AP Photo/Abdullah Sahil)`,
			hyperlink:`https://www.google.com`,
		}
	},
	AP21225803829108:{
		country:{
			lat:-23.4186795,
			lon:-60.6924008,
			name:"Paraguay",
		},
		locality:{
			lat:-23.4186795,
			lon:-60.6924008,
			name:`Paraguari`,
			imageId:"AP21225803829108",
			caption:`Pink liquid waste from the Durli Leathers S.A. tannery sits in a deposit dug into an open field in Paraguari, Paraguay, Friday, Aug. 13, 2021, on the day the Environment Ministry stopped its operations. Nearby landowners fear that once it rains, the liquid will contaminate the streams that drain into Lake Ypoa, and suspect the deaths of eight cattle with bloody diarrhea were caused by drinking water near this deposit. (AP Photo/Jorge Saenz)`,
			hyperlink:`https://www.google.com`,
		}
	},
	AP21225803793302:{
		country:{
			lat:37.2581644,
			lon:-104.6554038,
			name:"United States of America",
		},
		locality:{
			lat:43.315,
			lon:-71.620833,
			name:`Boscawen, N.H.`,
			imageId:"AP21225803793302",
			caption:`David Lidstone, 81, sits near the Merrimack River, Tuesday, Aug. 10, 2021, in Boscawen, N.H. Lidstone, an off-the-grid New Hampshire hermit known to locals as "River Dave," had been living in a cabin in the woods along the Merrimack River, in Canterbury, N.H., for nearly three decades. He was jailed July 15, 2021 on a civil contempt sanction and was told he'd be released if he agreed to leave the cabin, that has since burnt down. (AP Photo/Steven Senne)`,
			hyperlink:`https://www.google.com`,
		}
	},
	AP21225804097324:{
		country:{
			lat:32.6764687,
			lon:129.4287509,
			name:"Japan",
		},
		locality:{
			lat:35.689722,
			lon:139.692222,
			name:`Tokyo`,
			imageId:"AP21225804097324",
			caption:`A woman wearing a face mask to help protect against the spread of the coronavirus walks under the scorching sun Wednesday, Aug. 11, 2021, in Tokyo, Japan. (AP Photo/Eugene Hoshiko)`,
			hyperlink:`https://www.google.com`,
		}
	},
	AP21225803962772:{
		country:{
			lat:37.2581644,
			lon:-104.6554038,
			name:"United States of America",
		},
		locality:{
			lat:49.002083,
			lon:-122.756667,
			name:`Peace Arch border crossing`,
			imageId:"AP21225803962772",
			caption:`Rupinder Kaur, of Ferndale, Wash., holds her son, Gourev Singh, 7 months old, as she stretches her legs while other family members wait in the line of cars to cross into Canada at the Peach Arch border crossing Monday, Aug. 9, 2021, in Blaine, Wash. Canada lifted its prohibition on Americans crossing the border to shop, vacation or visit but America kept similar restrictions in place, part of a bumpy return to normalcy from coronavirus travel bans. (AP Photo/Elaine Thompson)`,
			hyperlink:`https://www.google.com`,
		}
	},
	AP21225804058940:{
		country:{
			lat:34.4198505,
			lon:86.0852843,
			name:"China",
		},
		locality:{
			lat:31.228611,
			lon:121.474722,
			name:`Shanghai`,
			imageId:"AP21225804058940",
			caption:`Seen through a door peephole, a medical worker wearing a protective clothing disinfects the corridor of a hotel used for foreigners to stay during a period of health quarantine in Shanghai, China, Thursday, Aug. 12, 2021. More than 30 Chinese officials have been fired or received other punishments over accusations they failed to respond properly to the latest surge of the coronavirus in the country. (AP Photo/Andy Wong)`,
			hyperlink:`https://www.google.com`,
		}
	},
}

let current = 0;
let keys = Object.keys(arr);

let countryLabels = {};
let localityLabels = {};
let timers = [];

let picBox = document.getElementById('picBox');
let captionBox = document.getElementById('captionBox');

const clearTimers = ()=>{
	// console.log(`clearTimers; ${timers}`)
	for(let i in timers){
		clearTimeout(timers[i])
	}
	timers = [];
	// console.log(`clearTimers; ${timers}`)
};

const flyToCountry = ()=>{
	let lat = arr[keys[current]]['country']['lat']
	let lon = arr[keys[current]]['country']['lon']
	let hgt = 20e6
	// console.log(`flyToCountry: ${arr[keys[current]]['country']['name']}`)
	viewer.camera.flyTo({
		destination: Cesium.Cartesian3.fromDegrees(lon,lat,hgt),
		// easingFunction: Cesium.EasingFunction.QUADRATIC_IN_OUT,
		// easingFunction: Cesium.EasingFunction.QUADRATIC_IN,
		// easingFunction: Cesium.EasingFunction.QUADRATIC_OUT,
		easingFunction: Cesium.EasingFunction.QUADRATIC_OUT_IN,
		// duration: 5,
		// duration: 3,
		duration: 2,
		orientation: {
			heading: Cesium.Math.toRadians(0.0),
			pitch: Cesium.Math.toRadians(-90.0),
			roll: 0.0,
		},
		complete: flyToLoc,
	})
};

const flyToLoc = ()=>{
	let lat = arr[keys[current]]['locality']['lat']
	let lon = arr[keys[current]]['locality']['lon']
	let hgt = 15000
	// console.log(`flyToLoc: ${arr[keys[current]]['locality']['name']}`)
	viewer.entities.getById(arr[keys[current]]['country']['guid']).show = true;
	viewer.entities.getById(arr[keys[current]]['locality']['guid']).show = true;

	viewer.camera.flyTo({
		destination: Cesium.Cartesian3.fromDegrees(lon,lat,hgt),
		// easingFunction: Cesium.EasingFunction.QUADRATIC_OUT_IN,
		// easingFunction: Cesium.EasingFunction.QUADRATIC_OUT,
		easingFunction: Cesium.EasingFunction.QUADRATIC_IN_OUT,
		// easingFunction: Cesium.EasingFunction.QUADRATIC_IN,
		// duration: 10,
		duration: 7,
		// duration: 5,
		complete:pitchShift,
	})

	picBox.style.backgroundImage = `url(images/${arr[keys[current]]['locality']['imageId']}.jpg)`;
	captionBox.innerHTML = `${arr[keys[current]]['locality']['caption']}&#32<span><a target="_blank" href="${arr[keys[current]]['locality']['hyperlink']}">...read more</a></span>`;
};

const pitchShift = ()=>{
	let lat = arr[keys[current]]['locality']['newLat']
	let lon = arr[keys[current]]['locality']['lon']
	// let hgt = 30000;
	let hgt = 15000;

	viewer.entities.getById(arr[keys[current]]['country']['guid']).show = false;
	viewer.entities.getById(arr[keys[current]]['locality']['guid']).show = false;

	viewer.camera.flyTo({
		destination: Cesium.Cartesian3.fromDegrees(lon,lat,hgt),
		// easingFunction: Cesium.EasingFunction.QUADRATIC_OUT,
		easingFunction: Cesium.EasingFunction.QUADRATIC_IN_OUT,
		// duration: 3,
		duration: 2,
		orientation: {
			heading: Cesium.Math.toRadians(0.0),
			// pitch: Cesium.Math.toRadians(-45.0),
			pitch: Cesium.Math.toRadians(-30.0),
			roll: 0.0,
		},
		complete:showPic,
	})
};

const showPic = ()=>{
	picBox.classList.add('active');
	timers.push(setTimeout(hidePic,3000));
};
const hidePic = ()=>{
	picBox.classList.remove('active');
	timers.push(setTimeout(next,500));
};

const next = ()=>{
	clearTimers();
	// console.log('next',`current == ${current}`)
	picBox.classList.remove('active');
	
	switch(current){
		case keys.length - 1: current = 0;
		break;
		default: current++;
		flyToCountry();//play sequence once - for demo
	}
	// flyToCountry();//loop sequence
};

const appendLabels = ()=>{
	// console.log(viewer.entities['_entities']['_array'])
	let entitiesArray = viewer.entities['_entities']['_array'];

	for(let i in keys){
		
		let thisCountry = arr[keys[i]]['country']['name']

		if(!countryLabels[thisCountry]){
			let lat = arr[keys[i]]['country']['lat']
			let lon = arr[keys[i]]['country']['lon']
			let hgt = 20e6
			viewer.entities.add({
				position: Cesium.Cartesian3.fromDegrees(lon,lat,60000),
				label:{
					text: arr[keys[i]]['country']['name'],
					scaleByDistance: new Cesium.NearFarScalar(0, 4, (hgt-60000), 0),
					translucencyByDistance: new Cesium.NearFarScalar(6000, 0, (hgt-60000), 1),
				},
				show: false,
			})
			let guid = viewer.entities['_entities']['_array'][entitiesArray.length - 1]['_id']
			arr[keys[i]]['country']['guid'] = guid;
			countryLabels[thisCountry] = guid;
		}else{
			arr[keys[i]]['country']['guid'] = countryLabels[thisCountry];
		}

		let thisLocality = arr[keys[i]]['locality']['name']

		if(!localityLabels[thisLocality]){
			let lat = arr[keys[i]]['locality']['lat']
			let lon = arr[keys[i]]['locality']['lon']
			let hgt = 15000

			let deg = Math.floor(Math.abs(lat))
			let min = Math.floor((Math.abs(lat) - deg) * 60)
			let sec = Math.floor(((Math.abs(lat) - deg) * 60 - min) * 60)
			let met = (1 / 111.132) / 1000;
			let newDeg = Math.floor(met * hgt);
			let newMin = Math.floor((met * hgt) * 100)
			let newSec = Math.floor((((met * hgt) * 100) - newMin) * 100);
			/*Decimal Degrees = degrees + (minutes/60) + (seconds/3600)*/
			let newDec = newDeg + (newMin / 60) + (newSec / 3600);//0.230278
			let newLat = lat - newDec;

			arr[keys[i]]['locality']['newLat'] = newLat;;

			viewer.entities.add({
				position: Cesium.Cartesian3.fromDegrees(lon,lat,hgt),
				label:{
					text: arr[keys[i]]['locality']['name'],
					scaleByDistance: new Cesium.NearFarScalar(0,2,1000000,0),
					translucencyByDistance: new Cesium.NearFarScalar(3000,0,18000,1),
				},
				show: false,
			})
			let guid = viewer.entities['_entities']['_array'][entitiesArray.length - 1]['_id']
			arr[keys[i]]['locality']['guid'] = guid;
			localityLabels[thisLocality] = guid;
		}else{
			arr[keys[i]]['locality']['guid'] = localityLabels[thisLocality];
		}
	}
	setTimeout(flyToCountry,2500);
};

picBox.addEventListener('mouseover',clearTimers);
picBox.addEventListener('mouseout',()=>{
	timers.push(setTimeout(next,2500));
});

appendLabels();

document.oncontextmenu = ()=>{
	return false;
};