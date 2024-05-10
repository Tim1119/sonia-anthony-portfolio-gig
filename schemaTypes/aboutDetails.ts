import { Rule } from "@sanity/types";
import { defineField, defineType } from "sanity";
import { PiNotebookLight } from "react-icons/pi";


export default defineType({
	name: "aboutDetails",
	title: "AboutDetails",
	icon: PiNotebookLight,
	type: "document",
	fields: [
		defineField({
			name: "aboutDetails",
			title: "About Sonia Anthony in details. This will appear in the about page of the website",
			type: "blockContent",
      validation: (Rule) => Rule.required()
		}),
	],

	preview: {
		select: {
			title: "aboutDetail",
		},
		
	},
});