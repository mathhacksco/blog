#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

flow
eslint './src/**/*.js' index.js
