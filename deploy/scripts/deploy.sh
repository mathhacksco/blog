ansible --version

ansible-playbook \
    -M command \
    -i ./inventory/digitalocean \
    ./plays/deploy.yml
