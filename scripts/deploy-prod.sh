#!/bin/bash
docker build ./deploy/Dockerfile -t mathhacksco/blog
docker run mathhacksco/blog
