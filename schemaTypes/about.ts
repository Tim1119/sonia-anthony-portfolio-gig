import { Rule } from "@sanity/types";
import { defineField, defineType } from "sanity";
import { CiUser } from "react-icons/ci";


export default defineType({
	name: "about",
	title: "About",
	icon: CiUser,
	type: "document",
	fields: [
		defineField({
			name: "about",
			title: "Quick Information About Sonia Anthony.. It will appear in the about section of the website homepage",
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