/**
1. design google map
(1) calcalate fastest routes between A and B
(2) realtime update traffic info collected by users

2. design facebook feed
(1) how you store feed.
(2) machine learning
(3) search functionality
*/



/**
刚刚结束的Facebook Production Engineer system 面。
准备了 ls * 发生了什么没有考，看了很多OS的知识也没有考
问了两个题
1 在data center里 在同一个cluster 中 client  无法连接上 server 是什么问题
2 在database server中query的回复突然很慢，怎样check是不是disk I/O的问题。
第二题没有回答到点上，不知道怎么check I/O的情况

面下来觉得需要有system的知识，还要有实际的经验，对于OS Network Troubleshooting 知识的要求远高于SDE。
希望能拿到Onsite的面试
*/
Performance Troubleshooting:
1. use top - look for "wa" (I/O wait) and "id" (CPU idletime)
