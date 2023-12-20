package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient

public class ExtraApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExtraApplication.class, args);
	}

}
