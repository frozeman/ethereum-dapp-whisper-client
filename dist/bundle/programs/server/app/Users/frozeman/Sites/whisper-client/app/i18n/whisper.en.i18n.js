(function(){var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"whisper":{"app":{"buttons":{"addUser":"Add People","newChat":"New chat","cancel":"Nevermind","inviteUsers":"Invite to chat","startPrivateChat":"Start private chat"}},"chat":{"placeholder":{"writeHere":"Write your message here","unnamedChat":"Unnamed chat"},"buttons":{"showMore":"Show more messages"},"notifications":{"invitation":"invited __users__ into the chat.","topicChanged":"is now talking about __topic__.","topicChangedEmpty":"is now talking about everything","chatNameChanged":"changed the chats name to \"__name__.\"","chatNameChangedEmpty":"removed the chats name"},"texts":{"home":"Click \"New chat\" to start a private or group chat.","addUserTitle":"Add users","publicChat":"Public","talksAbout":"is talking about","noChats":"Nothing here, yet...","leaveChat":"Do you really want to leave this chat?","edited":"edited","identityError":"Couldn't verify your identity, is your whisper node running?","invitePeople1":"To add people to this chat, click the","invitePeople2":"icon or send someone this link:","invitePeople3":"To add people to this chat click a person you follow, or send someone this link:"}},"users":{"buttons":{"follow":"Add to contacts","unfollow":"Remove from contacts","sendMessage":"Send private message","changeUsername":"Change name"},"texts":{"yourProfile":"That's you!","changeUsername":"You can change your name, but your identity will stay the same.","youreFollowing":"This user is in your contacts","anonymous":"This is an anonymous user. No guarantees can be made  about it’s identity, or any links between him and any other user with the same nickname here or any other platform."}}}};
TAPi18n._loadLangFileObject("en", translations);

})();
