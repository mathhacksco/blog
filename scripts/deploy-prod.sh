#!/bin/bash
docker build -t mathhacksco/blog ./deploy/Dockerfile
docker run mathhacksco/blog
