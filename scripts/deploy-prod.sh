#!/bin/bash
docker build \
  -t mathhacksco/blog \
  -v ./deploy_key:/root/.ssh/id_rsa \
  ./deploy
docker run mathhacksco/blog
