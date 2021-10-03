package com.bpmapp.knn;

import android.content.Context;
import android.content.res.AssetFileDescriptor;

import java.io.FileInputStream;
import org.tensorflow.lite.Interpreter;

import java.io.IOException;

import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.util.HashMap;
import java.util.Map;


public class Classifier {
    private Context context;
    Interpreter interpreter;

    public Classifier(Context context) throws Exception {
        this.context = context;
        //new MappedByteBuffer();
        try {
            interpreter = new Interpreter(loadModelFile(),null);
        } catch (IOException e) {
            e.printStackTrace();
        }
        Object[] input1 = {1530705857.7900, -1.24, -0.557, 0.227, -75854, 44024, 315915};
        float[] input = new float[7];
        input[0] = Float.parseFloat("1530705857.7900");
        input[1] = Float.parseFloat("-1.24");
        input[2] = Float.parseFloat("-0.557");
        input[3] = Float.parseFloat("0.227");
        input[4] = Float.parseFloat("-75854");
        input[5] = Float.parseFloat("44024");
        input[6] = Float.parseFloat("315915");

        float[][] output = new float[1][1];

        interpreter.run(input, output);

        System.out.println(output[0][0]);

    }
    private MappedByteBuffer loadModelFile() throws IOException
    {

        AssetFileDescriptor assetFileDescriptor = this.context.getAssets().openFd("files/linear3.tflite");
        FileInputStream fileInputStream = new FileInputStream(assetFileDescriptor.getFileDescriptor());
        FileChannel fileChannel = fileInputStream.getChannel();

        long startOffset = assetFileDescriptor.getStartOffset();
        long len = assetFileDescriptor.getLength();

        return fileChannel.map(FileChannel.MapMode.READ_ONLY,startOffset,len);
    }

    public float doInference(String val)
    {
        float[] input = new float[1];
        input[0] = Float.parseFloat(val);
        float[][] output = new float[1][1];

        interpreter.run(input,output);
        return  output[0][0];
    }


}


