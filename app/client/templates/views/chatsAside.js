/**
Template Controllers

@module Templates
*/

/**
The chats aside template

@class [template] views_chats_aside
@constructor
*/


Template['views_chats_aside'].helpers({
    /**
    Get all my chats

    @method (chats)
    */
    'chats': function(){

        return Chats.find({}, {sort: {lastActivity: -1}});
    },
    /**
    Get all my chats

    @method (chats)
    */
    'unreadCount': function(){
        return Entries.find({_id: {$in: this.entries}, unread: true}).count();
    }
});


Template['views_chats_aside'].events({
    /**
    Add a new chat by generating a new session key and route to the add user screen.

    @event click button.add-chat
    */
    'click button.add-chat': function(e){
        var sessionKey = Random.id();
        
        // CREATE new CHAT
        Chats.insert({
            _id: sessionKey,
            name: null,
            lastActivity: new Date(),
            entries: [],
            users: [User.findOne().identities[0].identity]
        });

        Router.go('createChat', {sessionKey: sessionKey});
    }
});