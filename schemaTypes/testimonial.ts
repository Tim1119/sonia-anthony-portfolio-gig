import { Rule } from "@sanity/types";
import { defineField, defineType } from "sanity";
import { CiMicrophoneOn } from "react-icons/ci";

export default defineType({
	name: "testimonial",
	title: "Testimonial",
	icon:CiMicrophoneOn,
	type: "document",
	fields: [
		defineField({
			name: "clientName",
			title: "Name of Client",
			type: "string",
            validation: (Rule) => Rule.required()
		}),
        defineField({
			name: "profilePictureofClient",
			title: "Profile Picture of Client",
			type: "image",
			options: {
				hotspot: true,
			},
        validation: (Rule) => Rule.required().assetRequired(),
		}),
    		
    defineField({
        name: 'clientPosition',
        title: 'Position of Client',
		type: "string",
        validation: (Rule) => Rule.required(),
		}),
    defineField({
        name: 'testimony',
        title: 'Testimony',
		type: "text",
        validation: (Rule) => Rule.required(),
		}),
		
		
	],

	preview: {
		select: {
			title: "clientName"		
		},
	},
});
  