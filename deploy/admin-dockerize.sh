#!/bin/bash

# Set the name of the application
APP_NAME="admin"

# Declare color
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

CONTAINER_NAME=$APP_NAME

# Check if the container exists
CONTAINER_EXISTS=$(docker ps -a -q -f name=$CONTAINER_NAME)

# If the container exists, stop and remove it
if [ ! -z "$CONTAINER_EXISTS" ]; then
  echo "Found container $CONTAINER_NAME. Stopping and deleting..."

  docker stop $CONTAINER_NAME

  docker rm $CONTAINER_NAME

  if [ $? -eq 0 ]; then
    echo -e "${GREEN}✔${NC} Container $CONTAINER_NAME ${GREEN}Successfully deleted.${NC}"
  else
    echo -e "${RED}✘${NC} Container $CONTAINER_NAME ${RED}Failed to delete.${NC}"
  fi
else
  echo "Container $CONTAINER_NAME not found. Nothing to delete."
fi

# Set the name of the image to be deleted
IMAGE_NAME=$APP_NAME

# Check if the image exists
IMAGE_EXISTS=$(docker images -q $IMAGE_NAME)

# If the image exists, delete it
if [ ! -z "$IMAGE_EXISTS" ]; then
  echo "Found image $IMAGE_NAME. Deleting..."

  docker rmi $IMAGE_NAME

  if [ $? -eq 0 ]; then
    echo -e "${GREEN}✔${NC} Image $IMAGE_NAME ${GREEN}Successfully deleted.${NC}"
  else
    echo -e "${RED}✘${NC} Image $IMAGE_NAME ${RED}Failed to delete.${NC}"
  fi
else
  echo "Image $IMAGE_NAME not found. Nothing to delete."
fi
echo "------------------------------------------------Clear docker container/image completed------------------------------------------------"

docker compose -f "apps/$APP_NAME/deploy/docker-compose.yml" build
echo "------------------------------------------------Build docker image completed------------------------------------------------"

docker compose -f "apps/$APP_NAME/deploy/docker-compose.yml" up -d
echo "------------------------------------------------Run docker container completed------------------------------------------------"