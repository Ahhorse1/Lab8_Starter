// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('tests 614-795-7370 is a phone number', () => {
    expect(functions.isPhoneNumber('614-795-7370')).toBe(true);
});

test('tests (614) 795-7370 is a phone number', () => {
    expect(functions.isPhoneNumber('(614) 795-7370')).toBe(true);
});

test('tests 1234 is not a phone number', () => {
    expect(functions.isPhoneNumber('1234')).toBe(false);
});

test('tests abc is not a phone number', () => {
    expect(functions.isPhoneNumber('abc')).toBe(false);
});

// isEmail
test('tests test@gmail.com is a email', () => {
    expect(functions.isEmail('test@gmail.com')).toBe(true);
});

test('tests test@ucsd.edu is a email', () => {
    expect(functions.isEmail('test@ucsd.edu')).toBe(true);
});

test('tests 1234 is not a email', () => {
    expect(functions.isEmail('1234')).toBe(false);
});

test('tests abc is not a email', () => {
    expect(functions.isEmail('abc')).toBe(false);
});

// isStrongPassword

test('tests lessthan15 is a strong password', () => {
    expect(functions.isStrongPassword('lessthan15')).toBe(true);
});

test('tests has_underscore is a strong password', () => {
    expect(functions.isStrongPassword('has_underscore')).toBe(true);
});

test('tests notvalidchar! is not a strong password', () => {
    expect(functions.isStrongPassword('notvalidchar!')).toBe(false);
});

test('tests 1numstart is not a strong password', () => {
    expect(functions.isStrongPassword('1numstart')).toBe(false);
});

// isDate

test('tests 1/17/2022 is a date', () => {
    expect(functions.isDate('1/17/2022')).toBe(true);
});

test('tests 01/01/2022 is a date', () => {
    expect(functions.isDate('01/01/2022')).toBe(true);
});

test('tests 01/01/1 is not a date', () => {
    expect(functions.isDate('01/01/1')).toBe(false);
});

test('tests 2022/01/01 is not a date', () => {
    expect(functions.isDate('2022/01/01')).toBe(false);
});

// isColor

test('tests #f0c is a color', () => {
    expect(functions.isHexColor('#f0c')).toBe(true);
});

test('tests #fe6347 is a color', () => {
    expect(functions.isHexColor('#fe6347')).toBe(true);
});

test('tests #fe67 is not a color', () => {
    expect(functions.isHexColor('#fe67')).toBe(false);
});

test('tests #aaaaa is not a color', () => {
    expect(functions.isHexColor('#aaaaa')).toBe(false);
});