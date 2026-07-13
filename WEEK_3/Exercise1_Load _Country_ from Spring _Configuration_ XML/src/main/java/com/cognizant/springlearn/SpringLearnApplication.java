package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    public static void main(String[] args) {

        SpringApplication.run(SpringLearnApplication.class, args);

        displayCountry();
    }

    public static void displayCountry() {

        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country india = context.getBean("india", Country.class);
        Country australia = context.getBean("australia", Country.class);
        Country japan = context.getBean("japan", Country.class);
        Country usa = context.getBean("usa", Country.class);

        System.out.println(india);
        System.out.println(australia);
        System.out.println(japan);
        System.out.println(usa);

        context.close();
    }
}
