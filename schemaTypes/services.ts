import { Rule } from "@sanity/types";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "services",
	title: "Services",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name of Skill",
			type: "string",
      validation: (Rule) => Rule.required()
		}),
    defineField({
        name: 'skills',
        title: 'Skills Included',
		type: "array",
        of: [{ type: 'string' }],
        validation: (Rule) => Rule.required(),
		}),
		
		
	],

	preview: {
		select: {
		  title: "name", // Select the "name" field for the title
		  skills: "Skills Included",
		},
	  },
});
  