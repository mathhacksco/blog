# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Starts a local wordpress setup inside docker containers
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#                        _
#                       | |
# __      _____  _ __ __| |_ __  _ __ ___  ___ ___
# \ \ /\ / / _ \| '__/ _` | '_ \| '__/ _ \/ __/ __|
#  \ V  V / (_) | | | (_| | |_) | | |  __/\__ \__ \
#   \_/\_/ \___/|_|  \__,_| .__/|_|  \___||___/___/
#                         | |
#                         |_|
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

docker-machine create iheartmath-wordpress-machine --driver virtualbox
docker-machine start iheartmath-wordpress-machine
eval $(docker-machine env iheartmath-wordpress-machine)

MYSQL_ROOT_PASSWORD=password

docker pull mysql:5.7.8
docker stop iheartmath-wordpress-db
docker rm iheartmath-wordpress-db
docker run \
  -itd \
  --name=iheartmath-wordpress-db \
  -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
  -v /mnt/sda1/var/mysql_data:/var/lib/mysql \
  -p 3306:3306 \
  mysql:5.7.8

docker pull wordpress
docker stop iheartmath-wordpress
docker rm iheartmath-wordpress
docker run \
  -itd \
  --name=iheartmath-wordpress \
  --link iheartmath-wordpress-db:mysql \
  -p 80:80 \
  wordpress
