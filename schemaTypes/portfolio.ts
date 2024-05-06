import { Rule } from "@sanity/types";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "portfolio",
	title: "Portfolio",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Project Title",
			type: "string",
      validation: (Rule) => Rule.required()
		}),
    defineField({
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
      validation: (Rule) => Rule.required().assetRequired(),
		}),
		defineField({
			name: "about",
			description: "Give a description about the project",
			title: "about",
			type: "blockContent",
      validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		
	],

	preview: {
		select: {
			title: "title",
			media: "mainImage",
			about: "about",
		},
		
	},
});