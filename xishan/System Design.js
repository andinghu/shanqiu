1. How we scale dropbox?
  Scale:
    10s of millions of users,
    100s of millions of file syncs per day.

  Challenges:
    1. Write volume
    2. ACIDity requirements

#1 High-level architecture
server run out of disk
cpu overloaded
=>
mysql server
storage amazon s3
+=>
notification service
all the metadata is on a server

memcache: when one server no reponse, we move to another
great for availablity， bad for consistency.
But one server might think cache is up, another server think it is down.

LoadBalancer: python diffculty, global thread.
(load balancer are paired, hot backup)

Database:
when in a shattered environment, transaction model changed

notification: high throughput, billions of connection are opening, add two layer of servers

storage: same file dedup, share folder is tough,
cut the file into 4M chunks, hash the chunk and mapping to s3.
How much deduplication? 10%~90%
dedup is across entire service.

How often client pull?
used to pull every minutes

Now just connect to notification server,
when server have, send it down.
< 1 million connection per server.

monitors(how we solve performance issue):
1.all the servers Load
2.how many request per channel
3.breakdown for important request!
4.bandwidth measured each users

secutiry:
n/a

Scaling instagram:
nginx &
redix &
memcached &
postgres &
gearman &
django

http://tech.meituan.com/avalanche-study.html
do the simple thing first
until you {scale, team, product} chagnes

async tasks, request < 3s,
fan-out delivery to all the followers
post to external services
v1: Gearman, async task broker, memcached-like in simplicity


dead simple to setup
code deployment
seach

http://yuanhsh.iteye.com/blog/2186457
https://github.com/FreemanZhang/leetcode/blob/23865917b965ff51f068c5fefdbb036e4186fd13/src/facebook/recent_fb_problems.md
