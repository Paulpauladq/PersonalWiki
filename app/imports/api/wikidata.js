import { Meteor } from "meteor/meteor";
import wikipedia from "node-wikipedia";
import { check } from "meteor/check";
import { WikiItem } from "./wikiItem";

// wiki api
if (Meteor.isServer) {
  Meteor.methods({
    getData(param) {
      check(param, String);

      return new Promise((resolve, reject) => {
        wikipedia.page.data(param, { content: true }, resolve);
      });
    },
  });
}

// wiki item search
if (Meteor.isServer) {
  Meteor.methods({
    searchItem(searchText) {
      check(searchText, String);

      return WikiItem.find({ $text: { $search: searchText } }).fetch();
    },
  });
}
