#!/bin/bash

# Set the name of the application
APP_NAME="admin"

# Move target app and build image and run
cd "../apps/$APP_NAME/deploy" || exit

CONTAINER_NAME=$APP_NAME

# Check if the container exists
CONTAINER_EXISTS=$(docker ps -a -q -f name=$CONTAINER_NAME)

# If the container exists, stop and remove it
if [ ! -z "$CONTAINER_EXISTS" ]; then
  echo "Found container $CONTAINER_NAME. Stopping and deleting..."

  docker stop $CONTAINER_NAME

  docker rm $CONTAINER_NAME

  if [ $? -eq 0 ]; then
    echo "Container $CONTAINER_NAME successfully deleted."
  else
    echo "Failed to delete container $CONTAINER_NAME."
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
    echo "Image $IMAGE_NAME successfully deleted."
  else
    echo "Failed to delete image $IMAGE_NAME."
  fi
else
  echo "Image $IMAGE_NAME not found. Nothing to delete."
fi

docker compose build
echo "------------------------------------------------Build docker image completed------------------------------------------------"

docker compose up -d
echo "------------------------------------------------Run docker container completed------------------------------------------------"