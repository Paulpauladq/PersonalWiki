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
			authorProfile: {
				name: Meteor.user().username,
				avatar: Meteor.user().profile.avatar
			},
			createdAt: new Date()
		});
	}
});
