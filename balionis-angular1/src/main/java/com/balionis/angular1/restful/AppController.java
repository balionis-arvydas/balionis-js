package com.balionis.angular1.restful;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.core.io.Resource;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.util.Scanner;

@RestController
public class AppController {

    private static final Logger logger = LoggerFactory.getLogger(AppController.class);

    @Value("${application.config.filename}")
    private String filename = "";

    @RequestMapping(path = "/config/settings", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
    public String getConfig() throws IOException {

        logger.debug("getConfig: filename={}", filename);

        Resource resource = new ClassPathResource(filename);
        String res = new Scanner(resource.getInputStream()).useDelimiter("\\A").next();

        logger.debug("getConfig: res={}", res);

        return res;
    }
}