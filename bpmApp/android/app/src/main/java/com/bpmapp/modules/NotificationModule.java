package com.bpmapp.modules;


import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Intent;
import android.content.res.AssetFileDescriptor;
import android.os.Build;

import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

import com.bpmapp.MainActivity;
import com.bpmapp.R;
import com.bpmapp.services.ServiceNotification;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.tensorflow.lite.Interpreter;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;

import javax.annotation.Nonnull;


public class NotificationModule extends ReactContextBaseJavaModule{
    public static final String REACT_CLASS = "Notification";
    private static ReactApplicationContext reactContext;
    private static final String CHANNEL_ID = "NOTIFICATION";
    private static final int SERVICE_NOTIFICATION_ID = 12346;
    private Interpreter interpreter;

    public NotificationModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Nonnull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    public void startService() {
       //this.reactContext.startService(new Intent(this.reactContext, ServiceNotification.class));
       /* createNotificationChannel();
        NotificationCompat.Builder builder = new NotificationCompat.Builder(this.reactContext, CHANNEL_ID)
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentTitle("a")
                .setContentText("a")
                .setPriority(NotificationCompat.PRIORITY_DEFAULT);*/
    }
    @ReactMethod(isBlockingSynchronousMethod = true)
    public void loadPredictionFile() throws IOException{
        interpreter = new Interpreter(this.loadModelFile());
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public float predict(float Ox, float Oy, float Oz) throws IOException {
        float[] input = {Ox, Oy, Oz};

       float f =  doInference(input);
       System.out.println("Resultado da inferencia: " + f);
       return f;

    }
    private MappedByteBuffer loadModelFile() throws IOException
    {
        AssetFileDescriptor assetFileDescriptor = this.reactContext.getAssets().openFd("linear.tflite");
        FileInputStream fileInputStream = new FileInputStream(assetFileDescriptor.getFileDescriptor());
        FileChannel fileChannel = fileInputStream.getChannel();

        long startOffset = assetFileDescriptor.getStartOffset();
        long len = assetFileDescriptor.getLength();

        return fileChannel.map(FileChannel.MapMode.READ_ONLY,startOffset,len);
    }
    public float doInference(float[] input)
    {
        //float[] input =  {-0.86f,-0.527f,0.235f,-127866f,-0.366f,-21.28f};

        float[][] output = new float[1][1];

        interpreter.run(input,output);
        System.out.println("aaaa"+output);


        return  output[0][0];
    }


    @ReactMethod
    public void sendNotification(String title, String content) {
        //this.reactContext.startService(new Intent(this.reactContext, ServiceNotification.class));
        createNotificationChannel();
        Intent notificationIntent = new Intent(this.reactContext, MainActivity.class);
        PendingIntent contentIntent = PendingIntent.getActivity(this.reactContext, 0, notificationIntent, PendingIntent.FLAG_CANCEL_CURRENT);
        Notification notification = new NotificationCompat.Builder(this.reactContext, CHANNEL_ID)
                .setContentTitle(title)
                .setContentText(content)
                .setStyle(new NotificationCompat.BigTextStyle()
                        .bigText(content))
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentIntent(contentIntent)
                .build();

        NotificationManagerCompat notificationManager = NotificationManagerCompat.from(this.reactContext);

        // notificationId is a unique int for each notification that you must define
        notificationManager.notify(SERVICE_NOTIFICATION_ID, notification);
    }

    private void createNotificationChannel() {
        // Create the NotificationChannel, but only on API 26+ because
        // the NotificationChannel class is new and not in the support library
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            int importance = NotificationManager.IMPORTANCE_DEFAULT;
            NotificationChannel channel = new NotificationChannel(CHANNEL_ID, "NOTIFICATION", importance);
            channel.setDescription("CHANEL DESCRIPTION");
            NotificationManager notificationManager = this.reactContext.getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
        }
    }


    @ReactMethod
    public void stopService() {
        this.reactContext.stopService(new Intent(this.reactContext, ServiceNotification.class));
    }



}