if [ -z "$ANSIBLE_VAULT_PASSWORD" ]; then
  echo "You must set the environment variable ANSIBLE_VAULT_PASSWORD."
  exit 1
fi

export GIT_SHA=$(if [ -z "$TRAVIS_COMMIT" ]; then git rev-parse HEAD; else echo $TRAVIS_COMMIT; fi)
export GIT_BRANCH=$(if [ -z "$TRAVIS_BRANCH" ]; then git rev-parse --abbrev-ref HEAD; else echo $TRAVIS_BRANCH; fi)

ansible-playbook \
    -M command \
    -i ./inventory/digitalocean \
    ./plays/deploy.yml
