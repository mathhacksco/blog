#!/bin/bash
docker build -t mathhacksco/blog ./deploy
docker run mathhacksco/blog
