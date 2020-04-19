import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

// the collection is named after "Topics"
// it stores all the topics users post
export const WikiItem = new Mongo.Collection("WikiItem");

if (Meteor.isServer) {
	Meteor.publish("wikiItem", function publishTopics() {
		return WikiItem.find(
			{
				
			}
		);
	});
}

Meteor.methods({
	"WikiItem.insert"(wikiItem) {

		// Make sure the user is logged in before inserting a task
		if (!this.userId) {
			throw new Meteor.Error("not-authorized");
		}

		WikiItem.insert({
			wikiItem: wikiItem,
			author: Meteor.user().username,
			date: new Date()
		});
	},

	"WikiItem.update"(id, wikiItem) {
		if (!this.userId) {
			throw new Meteor.Error("not-authorized");
		}
		check(wikiItem, Object);
		WikiItem.update({_id: id}, {$set: {wikiItem: wikiItem, date: new Date()}});
	},

	"WikiItem.delete"(id) {
		if (Meteor.isServer) {
			check(id, String);
			if(!Meteor.userId()) {
				throw new Meteor.Error("not-authorized");
			}
			WikiItem.remove({_id: id});
		}
	}
});
