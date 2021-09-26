package com.bpmapp;

import android.content.Intent;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;
import android.util.Log;

public class HeartbeatModule extends ReactContextBaseJavaModule  {

    public HeartbeatModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Heartbeat";
    }
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String aobaService() {
        Log.d("CalendarModule", "aooooooooooooooooooba");
        return "AOOOOBa";
    }

}