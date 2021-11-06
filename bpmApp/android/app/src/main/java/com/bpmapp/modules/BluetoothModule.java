package com.bpmapp.modules;

import android.content.Intent;
import android.os.Environment;

import com.bpmapp.services.ServiceBluetooth;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;
import android.util.Log;

public class BluetoothModule extends ReactContextBaseJavaModule  {
    public static final String REACT_CLASS = "Heartbeat";
    private static ReactApplicationContext reactContext;

    public BluetoothModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Nonnull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void startService() throws Exception {
        this.reactContext.startService(new Intent(this.reactContext, ServiceBluetooth.class));
    }

    @ReactMethod
    public void stopService() {
        this.reactContext.stopService(new Intent(this.reactContext, ServiceBluetooth.class));
    }

   

}