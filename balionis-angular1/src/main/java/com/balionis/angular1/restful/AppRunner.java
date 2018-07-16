package com.balionis.angular1.restful;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // same as @Configuration @EnableAutoConfiguration @ComponentScan
public class AppRunner {

    private static final Log logger = LogFactory.getLog(AppRunner.class);

    public static void main(String[] args) {
        SpringApplication.run(AppRunner.class, args);
    }
}

