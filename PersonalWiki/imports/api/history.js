import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const searchedHistroy = new Mongo.Collection("searchedHistroy");

if (Meteor.isServer) {
  Meteor.publish("mySearchedHistroy", function() {
    return searchedHistroy.find({ searchedBy: Meteor.userId() });
  });
}

Meteor.methods({
  "searchedHistroy.insert"(searchedItem) {
    check(searchedItem, String);

    var fancyPostsExist =
      searchedHistroy
        .find({ searchedItem: searchedItem }, { limit: 1 })
        .count() > 0;

    if (!fancyPostsExist) {
      searchedHistroy.insert({
        searchedItem: searchedItem,
        searchedBy: Meteor.userId(),
      });
    }
  },
});
