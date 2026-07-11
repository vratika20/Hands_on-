package com.cognizant;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new Calculator();
        System.out.println("BeforeEach: Calculator object created");
    }

    @AfterEach
    void tearDown() {
        System.out.println("AfterEach: Test completed");
    }

    @Test
    void testAddition() {
        assertEquals(15, calculator.add(10, 5));
    }

    @Test
    void testSubtraction() {
        assertEquals(5, calculator.subtract(10, 5));
    }

    @Test
    void testMultiplication() {
        assertEquals(50, calculator.multiply(10, 5));
    }

    @Test
    void testDivision() {
        assertEquals(2.0, calculator.divide(10, 5));
    }

    @Test
    void testDivideByZero() {
        assertThrows(ArithmeticException.class,
                () -> calculator.divide(10, 0));
    }
}