import { time } from "console";
import {
    accelerometer,
    gyroscope,
    setUpdateIntervalForType,
    SensorTypes
} from "react-native-sensors";

import { map, filter } from "rxjs/operators";

class Sensors {
    
    stopScan(timeout, accel, gyro){
        setTimeout(() => {
            // If it's the last subscription to accelerometer it will stop polling in the native API
            if(accel) this.subscriptionAccel.unsubscribe();
            if(gyro)  this.subscriptionGyro.unsubscribe();
        }, timeout);
    }

    updateInterval(firSensorType, secSensorType, time) {
        if(firSensorType == accelerometer)
            setUpdateIntervalForType(SensorTypes.accelerometer, time);
        if(secSensorType == gyroscope)
            setUpdateIntervalForType(SensorTypes.gyroscope, time);
    }

    accelerometer(speedVs) {
        accelerometer
            .pipe(map(({ x, y, z }) => x + y + z), filter(speed => speed > speedVs))
            .subscribe(
                speed => console.log(`You moved your phone with ${speed}`),
                error => {
                    console.log("The sensor is not available");
            });
    }

    gyroscope() {
        gyroscope.subscribe(({ x, y, z, timestamp }) =>
        console.log({ x, y, z, timestamp }));
    }


}