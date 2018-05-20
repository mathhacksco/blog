#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

docker build \
  -t mathhacksco/blog \
  $(pwd)/deploy

openssl aes-256-cbc -K $encrypted_deae71ea1931_key -iv $encrypted_deae71ea1931_iv -in ./deploy/ssh-keys/deploy_key.enc -out ./deploy/ssh-keys/deploy_key -d
chmod 400 ./deploy/ssh-keys/deploy_key

docker run \
  -e "ANSIBLE_VAULT_PASSWORD=$ANSIBLE_VAULT_PASSWORD" \
  -v $(pwd)/deploy/ssh-keys:/root/.ssh \
  mathhacksco/blog

# clean up deploy key
git reset --hard HEAD
