/*
SDK - Software Development Kit - A grouping of tools that allow you to create software locally. Also some times referred to as devkits.
JDK - Java SE Development Kit - A set of tools specifically for developing Java SE Applications
Java SE - Standard Edition
JRE - Java Runtime Environment - A minimum set of tools that allow local Java programs to execute
Java SE API - Application Programming Interface - A set of libraries provided to build applications.
JCL - Java Class Library - A synonym for the Java SE API. More info here.
JVM - Java Virtual Machine - an abstract computing machine.


Umbrella (what contains what):
JDK -> JRE -> JAVA SE API

Download latest version of Java: https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html

in Terminal:
java --version

Download IntelliJ IDE: https://www.jetbrains.com/idea/download/#section=mac

*/

// sys
// ./com/tree/Main.java
package com.team;

import java.util.Set;
import java.util.TreeSet;

public class Main {

    public static void main(String[] args) {

        // sout + tab will create the syntax below

        System.out.printf("This is the classpath:  %s %n",
                System.getProperty("java.class.path"));
        Set<String> propNames = new TreeSet<String>(System.getProperties().stringPropertyNames());
        for (String propertyName : propNames) {
            System.out.printf("%s is %s %n",
                    propertyName,
                    System.getProperty(propertyName));
        }
    }
}
