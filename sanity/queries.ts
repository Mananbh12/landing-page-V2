// landing-page-v2/sanity/queries.ts
import { client } from "./client";


export async function getGridItems() {
  return client.fetch(
    `*[_type == "gridItem"]{
      description,
      className,
      img{asset->{url}}
    }`
  );
}

export async function getProjects() {
  return client.fetch(
    `*[_type == "project"]{
      id,
      title,
      des,
      link,
      img{asset->{url}},
      iconLists[]{asset->{url}}
    }`
  );
}

export async function getTestimonials() {
  return client.fetch(
    `*[_type == "testimonial"]{quote, name, title}`
  );
}

export async function getCompanies() {
  return client.fetch(
    `*[_type == "company"]{id, name, img{asset->{url}}}`
  );
}

