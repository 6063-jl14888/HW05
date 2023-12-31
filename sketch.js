let dataObject;
let data;

let LATITUDEMin;
let LATITUDEMax;
let LONGITUDEMin;
let LONGITUDEMax;
let ZIPCODEMin;
let ZIPCODEMax;


function preload() {
  dataObject = loadJSON("https://dm-gy-6063-2023f-d.github.io/assets/homework/05/Motor-Vehicle-Crashes/Motor-Vehicle-Crashes.json")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  data = Object.values(dataObject);


  for (let i = 0; i < data.length; i++) {
    let LATITUDE = data[i].LATITUDE;
    let LONGITUDE = data[i].LONGITUDE;
    let ZIPCODE = data[i]["ZIP CODE"];

    LATITUDEMin = min(LATITUDEMin, LATITUDE);
    LATITUDEMax = max(LATITUDEMax, LATITUDE);
    LONGITUDEMin = min(LONGITUDEMin, LONGITUDE);
    LONGITUDEMax = max(LONGITUDEMax, LONGITUDE);
    ZIPCODEMin = min(ZIPCODEMin, ZIPCODE);
    ZIPCODEMax = max(ZIPCODEMax, ZIPCODE);
}
}

function draw() {
  background(0);
  noFill();
 
  translate(100,0)
  for (let i = 0; i < data.length; i++) {
    let x = map(data[i].LONGITUDE,  LONGITUDEMin,  LONGITUDEMax, 0, width);
    let y = map(data[i].LATITUDE, LATITUDEMin, LATITUDEMax, 0, height);
    let d = map(data[i]["ZIP CODE"], ZIPCODEMin, ZIPCODEMax, 0, height);
    
    if (x*100+100 > 0 && x*100+100 <= 300) {
      stroke(190, 20, 10)
    } 
    if (x*100+100 > 300 && x*100+100 <= 500) {
      stroke(190, 20, 255)
    } 
    if (x*100+100 > 500 && x*100+100 <= 700) {
      stroke(80, 20, 200)
    } 
    if (x*100+100 > 700 && x*100+100 <= 800) {
      stroke(176, 252, 216)
    } 
  
    ellipse(x*100+100, y-500, d/4, d/4);
    }
  noLoop();

}

