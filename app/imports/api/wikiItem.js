import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

export const WikiItem = new Mongo.Collection("WikiItem");

if (Meteor.isServer) {
  Meteor.publish("myWikiItem", function() {
    return WikiItem.find({ authorId: Meteor.userId() });
  });
}

Meteor.methods({
  "WikiItem.insert"(wikiItem) {
    // Make sure the user is logged in before inserting
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    WikiItem.insert({
      wikiItem: wikiItem,
      author: Meteor.user().username,
      authorId: Meteor.userId(),
      createdDate: new Date(),
      lastModified: undefined,
    });
  },

  "WikiItem.update"(id, wikiItem) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    check(wikiItem, Object);
    WikiItem.update(
      { _id: id },
      { $set: { wikiItem: wikiItem, lastModified: new Date() } }
    );
  },

  "WikiItem.delete"(id) {
    if (Meteor.isServer) {
      check(id, String);
      if (!Meteor.userId()) {
        throw new Meteor.Error("not-authorized");
      }
      WikiItem.remove({ _id: id });
    }
  },
});
