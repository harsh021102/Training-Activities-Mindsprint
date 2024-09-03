package org.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("org.example")
public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(Main.class);
//        Hello hello = context.getBean(Hello.class);
//        hello.helloWorld();
        Student stu = context.getBean(Student.class);
        stu.setName("Harsh");
        System.out.println(stu);
    }
}
