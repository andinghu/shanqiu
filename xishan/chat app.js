1. Models:
User {
  int userId;
  String name;
  String email;
  String profilePicture;
  long lastLoginTime;
  boolean isActive;
  boolean isMobileUser;
  boolean isWebUser;
  String realtimeChannelGroupName;
  UserType userType
}

Message Models:
Message {
  long messageId;
  long channelId;
  String clientMessageId;
  int senderUserId;
  MessageType messageType;
  Map messageContent;
  long createdTime;
  UserAvatar user;
}

ParticipantModal {
  UserModel user,
  long channelId,
  Date joinedDate,
  long lastSeenTime,
  Cause cause
}

NotificationMessage
ChatMessage
InteractionMessage
extends Message

Channel {
  long channelId;
  String realtimeChannelName;
  ChannelType channelType;
}

2. Resource:
GET /howareyou
GET /channels (get all the chatting channels info)
GET /channels/{id}
GET /channels/{channelid}/messages?max=#
GET /channels/{channelid}/messages/before/{messageid}
GET /user (current user)
!!!!!!!
POST /channels/{channelid}/messages?channelid=#&
  headerParam {
    user-agent: ios/android/web
  }
  body {
    @FormDataParam("clientmessageid") String clientMessageId,
    @FormDataParam("message") String messageString,
    @FormDataParam("image") InputStream imageStream,
    @FormDataParam("width") int width,
    @FormDataParam("height") int height,
  }
!!!!!!!!!
POST /channels/{channelid}/botmessages?channelid=#
  body {
    @FormDataParam("clientmessageid") String clientMessageId,
    @FormDataParam("message") String messageString,
    @FormDataParam("botType") String botType,
  }
POST /channels/{channelid}/messages/{messageid} (edit messages)
DELETE /channels/{channelid}/messages/{messageid}
POST /channels (create channels)
!!!
POST /channels/{channelid}/join (join channel)
!!!
POST /channels/{channelid}/leave?channelid=# (leave channel)
POST /channels/{channelid}/mentions?channelid=# (mention someone)
GET /opportunitysearch?term={}&start={}&end={}&filterBy={}&sortBy={}


Backend logic:
postInChannel(
  UserModel user,
  long channelId,
  MessageModel message,
  boolean shouldBeep,
  String viewTypeString,
  String userAgent
)
writeMessage into database,
sendRealtimeMessageToChannelInGB => pubsubManager.publish(message, channelId) =>
CheckPreConditions -> pubnub.publish(channelId, message, callback).reject(errorHandling)
other functionality:
postLastSeenInChannel()
pushManager.sendPushNotificationForNewMessage(get device token from table)
emailManager.sendNewMessageEmail(get email address from table)

joinChannel(
  orgId, userId, channelId, userId, isBot
)
channelModel = pgManager.readChannel(orgId, channelId)
if (error or no permission etc.) false
if not joined
message(action message) = joinChannel => write new ParticipantModal into postgres

Cassandra Manager:
writeMessage => build query insertMessage => session.execute(insertMessage)
edit message => write (insert and update are the same in cassandra)
readMessage => query and construct to MessageModel
readMessagesBefore/After/Between



database:
Cassandra:
  1.database infrastructure that could easily scale to any size across multiple data centers
  2.messaging system guaranteeing 100% uptime.

  Messaging apps are faced with high volumes of data. The massive increase in mobile storing, managing, and performing analyses on messaging systems that include: email, chat, commenting, and user notifications require massive scalability and availability, without sacrificing performance.
  High Availability, Linear Scale, Predictable Performance

  schema:
  MessageTable
    {
        CLARI_ORGID("co"),
        CHANNEL_ID("cid"),
        MESSAGE_ID("mid"),
        CLIENT_MESSAGE_ID("cli"),
        CLARI_USERID("cu"),
        MESSAGE_CONTENT("mc"),
        MESSAGE_TYPE("mt"),
        CREATED_TIMESTAMP("cts");
      }

  SQL:
  User {
    ORGID("org_id"),
    USERID("user_id"),
    PROFILE_PIC("pic_url"),
    LAST_LOGIN_TIME("last_login_time"),
    NOTIFICATION_SETTING("notification_setting"),
    CREATED_TIME("created_time"),
    IS_LOGGED_IN("is_logged_in"),
    LAST_TIME_ON_MOBILE("last_time_on_mobile"),
    LAST_TIME_ON_WEB("last_time_on_web"),
    GOD_MODE("god_mode");
  }

  ChannelTable{
    ORGID("org_id"),
    CHANNEL_ID("channel_id"),
    SF_ORGID("sf_org_id"),
    SF_OPPID("sf_opp_id"),
    SF_ACCOUNTID("sf_account_id"),
    ACCOUNT_NAME("sf_account_name"),
    CHANNEL_NAME("channel_name"),
    LAST_MESSAGE_TIME("last_message_time"),
    LAST_MESSAGE_ID("last_message_id"),
    CREATED_TIME("created_time"),
    CHANNEL_TYPE("channel_type");
  }

  ParticipantTable {
    ORGID("org_id"),
    CHANNEL_ID("channel_id"),
    CLARI_USERID("user_id"),
    JOINED_TIME("joined_time"),
    LAST_SEEN_TIME("last_seen_time"),
    CHANNEL_NOTIFICATION_SETTING("channel_notification_setting"),
    IS_ACTIVE("is_active"),
    ACTION_CAUSE("action_cause");
  }

  MentionTable {
    ID("id"),
    CLARI_ORGID("org_id"),
    CLARI_USERID("user_id"),
    CHANNEL_ID("channel_id"),
    MESSAGE_ID("message_id"),
    SF_ORGID("sf_org_id"),
    SF_OWNERID("sf_owner_id"),
    INVITED_TIME("invited_time"),
    ACCEPTED_TIME("accepted_time"),
    IS_ACTIVE("is_active");
  }

  OwnerTable {
    ORGID("org_id"),
    CHANNEL_ID("channel_id"),
    CLARI_USERID("user_id"),
    SF_ORGID("sf_org_id"),
    SF_USERID("sf_user_id"),
    IS_INVITED("is_invited"),
    CREATED_TIME("created_timestamp");
  }
