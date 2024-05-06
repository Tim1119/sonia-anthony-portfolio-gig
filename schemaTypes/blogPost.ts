import { defineField, defineType } from "sanity";
import category from './blogPostCategory'

export default defineType({
	name: "blogPost",
	title: "Blog Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "description",
			description: "Enter a short snippet for the blog...",
			title: "Description",
			type: "string",
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
		
		defineField({
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "blogPostCategory" } }],
		}),
		defineField({
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent",
		}),
	],

	preview: {
		select: {
			title: "title",
			media: "mainImage",
		},
		
	},
});
