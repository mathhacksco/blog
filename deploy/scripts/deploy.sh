if [ -z "$ANSIBLE_VAULT_PASSWORD" ]; then
  echo "You must set the environment variable ANSIBLE_VAULT_PASSWORD."
  exit 1
fi

export GIT_SHA=$(git rev-parse HEAD)
export GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

ansible-playbook \
    -M command \
    -i ./inventory/digitalocean \
    ./plays/deploy.yml
