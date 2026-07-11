package com.cognizant;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    Calculator calculator = new Calculator();

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
        assertThrows(ArithmeticException.class, () -> calculator.divide(10, 0));
    }

    @Test
    void testIsEven() {
        assertTrue(calculator.isEven(8));
    }

    @Test
    void testIsOdd() {
        assertFalse(calculator.isEven(7));
    }

    @Test
    void testNotNull() {
        assertNotNull(calculator.getName());
    }

    @Test
    void testNull() {
        assertNull(calculator.getNullValue());
    }

    @Test
    void testNotEquals() {
        assertNotEquals(20, calculator.add(10, 5));
    }

    @Test
    void testArray() {
        int[] expected = {1, 2, 3, 4, 5};
        assertArrayEquals(expected, calculator.getNumbers());
    }
}