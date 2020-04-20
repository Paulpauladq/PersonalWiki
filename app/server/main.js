import { Meteor } from "meteor/meteor";
import "../imports/api/users.js";
import "../imports/api/wikiItem.js";
import "../imports/api/wikidata.js";
import "../imports/api/history.js";
import "../imports/startup/simpl-schema-config.js";
import { WikiItem } from "../imports/api/wikiItem.js";

Meteor.startup(() => {
  WikiItem._ensureIndex({
    "wikiItem.title": "text",
    "wikiItem.contents.content": "text",
  });
});
