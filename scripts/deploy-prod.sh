#!/bin/bash
docker build \
  -t mathhacksco/blog \
  $(pwd)/deploy

ls $(pwd)/deploy/ssh-keys

git status

docker run \
  -e "ANSIBLE_VAULT_PASSWORD=$ANSIBLE_VAULT_PASSWORD" \
  -v $(pwd)/deploy/ssh-keys:/root/.ssh \
  mathhacksco/blog
