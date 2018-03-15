FROM python:latest

RUN mkdir -p /usr/src/playbook
WORKDIR /usr/src/playbook
COPY . /usr/src/playbook

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "bash", "./scripts/deploy.sh" ]
