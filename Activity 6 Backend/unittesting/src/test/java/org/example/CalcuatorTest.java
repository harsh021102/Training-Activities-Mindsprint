package org.example;

import org.junit.jupiter.api.*;

public class CalcuatorTest {
    Calculator c;
    @BeforeEach
    public void setUp() {
        System.out.println("Obj created");
        c = new Calculator();
    }
    @AfterEach
    public void tearDown(){
        System.out.println("Obj destroyed");
        c=null;
    }
    @Test
    public void addTest(){
        Assertions.assertEquals(10,c.add(6,4));
    }
    @Disabled
    @Test
    public void subTest(){
        Assertions.assertEquals(10,c.sub(14,4));
    }
}
