#!/bin/bash
docker build \
  -t mathhacksco/blog \
  $(pwd)/deploy/deploy

docker run \
  -v $(pwd)/deploy/deploy_key:/root/.ssh/id_rsa \
  mathhacksco/blog
