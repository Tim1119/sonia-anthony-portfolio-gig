import { Rule } from "@sanity/types";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "about",
	title: "About",
	type: "document",
	fields: [
		defineField({
			name: "about",
			title: "About Sonia Anthony in details",
			type: "blockContent",
      validation: (Rule) => Rule.required()
		}),
	],

	preview: {
		select: {
			title: "about",
		},
		
	},
});