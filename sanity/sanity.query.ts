// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "../client";

export async function getAbout() {
  return client.fetch(
    groq`*[_type == "about"]{
      _id,
      about,
    }`
  );
}
export async function getAboutDetails() {
  return client.fetch(
    groq`*[_type == "aboutDetails"]`
  );
}