# docker-hub-slack

Docker container that listens for docker-hub hooks and sends them to slack

## Usage

```
docker run -d -e SLACK_HOOK=[yourhook] -p 8080 firstandthird/docker-hub-slack:latest
```

Go into docker hub and set your webhook to http://server-ip:port
