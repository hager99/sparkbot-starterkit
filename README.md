# spark-bot-skeleton

Skeleton to hack a CiscoSpark bot, with minimal dependencies: NodeJS, Express

# how to run

Install localtunnel on your dev machine in order to make visible on the internet.

``` bash
// launch a tunnel to local port 8080
> lt -s sparkbot -p 8080
// your bot is now exposed publically at https://sparkbot.localtunnel.me/

// download the spark bot nodejs code  
> git clone <repo>
> cd <repo>
> npm install

// time to launch your bot on port 8008
> SPARK_TOKEN=XXXXXXXXXX node server.js
```

# troubleshooting

For debugging purpose, you may also want to run a WebAPI Traffic inspector.

We suggest Fiddler on Windows.

If you wanna try an experimental golang traffic capture, try smartproxy.
Simply pich a binary for your platform, and run it

``` bash
// download binary, rename it, set as executable, launch
> mv smartproxy.mac smartproxy
> chmod 755 smartproxy
> ./smartproxy --capture
// by default port 9090 gets forwarded to port 8080
// go to http://localhost:9090/traffic to see incomin traffic
// select an HTTP req/response
// look at your console to get the req and resp answers

// then launch a tunnel to local port 9090
> lt -s sparkbot -p 9090
// your bot is now exposed publically at https://sparkbot.localtunnel.me/

// time to launch your bot on port 8008
> SPARK_TOKEN=XXXXXXXXXX node server.js
```
