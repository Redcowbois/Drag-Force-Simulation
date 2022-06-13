// Choose values here
var initialHeight=1;             // in m
var initialVelocity=10;          // in m/s
var initialAngle=50;             // in degrees
var mass=0.2;                      // in kg
var dragForce=true;

// Other variables
var t = 0 
var dt = 0.01
var xPos=0 
var yPos= initialHeight
var xVelocity=initialVelocity*Math.cos(initialAngle*Math.PI/180)
var yVelocity=initialVelocity*Math.sin(initialAngle*Math.PI/180)
var aboveGround = true

var dragCoefficient= 0.47        // for a sphere
var airDensity= 1.225            // at 1 atm and 15 C, measured in kg/m^3
var area= 0.3**2*Math.PI          // radius of 0.3 m, area measured in m^2


//Calculations
if (yPos<0) {
    aboveGround=false
}
if (!dragForce) {
    dragCoefficient=0
}
once=true
while (yPos>=0 && aboveGround) {

    yAcceleration= -(0.5*dragCoefficient*area*yVelocity**2)/mass - 9.81
    vyMid = yVelocity + yAcceleration*0.5*dt
    yAccelerationMid= -(0.5*dragCoefficient*area*vyMid**2)/mass - 9.81
    yLast=yPos
    yPos += vyMid *dt
    yVelocity += yAccelerationMid*dt

    xAcceleration= (-0.5*dragCoefficient*area*xVelocity**2)/mass
    vxMid = xVelocity + xAcceleration*0.5*dt
    xAccelerationMid= (-0.5*dragCoefficient*area*vxMid**2)/mass
    xPos += vxMid *dt
    xVelocity += xAccelerationMid*dt

    // if (t>1 && once && t<2) {
    //     console.log(xPos, yPos, xVelocity,yVelocity,yAcceleration)
    //     once=false
    // }
    
    // if (t>7 && !once && t<7.5) {
    //     console.log(xPos, yPos,xVelocity,yVelocity)
    //     once=true
    // }

    // if (t>13 && once && t<15) {
    //     console.log(xPos, yPos,xVelocity,yVelocity)
    //     once=false
    // }

    // if (t>500 && !once && t<510) {
    //     console.log(xPos, yPos,xVelocity,yVelocity)
    //     once=true
    // }

    t += dt
} 

//Output 
if (aboveGround) {
    console.log("The projectile takes " + t.toFixed(3) + " seconds to hit the ground.")
    console.log("The projectile travels " + xPos.toFixed(3) + " meters before hitting the ground.")
}

else {
    console.log("The projectile is underground you egg.")
}


