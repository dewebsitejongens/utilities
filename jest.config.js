/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  rootDir: '.',
  testRegex: '.(spec|test).ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/',
  ],
  collectCoverageFrom: [
    '**/*.(t|j)s',
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'jsdom',
};
