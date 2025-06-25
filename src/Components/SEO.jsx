import { useEffect } from "react";

/**
 * SEO component for setting document title and meta tags.
 * @param {Object} props
 * @param {string} props.title - The title of the page.
 * @param {string} [props.description] - The meta description of the page.
 * @param {Object[]} [props.meta] - Additional meta tags as objects: { name, content }.
 */
export default function SEO({ title, description, meta = [] }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let descTag = document.querySelector('meta[name="description"]');
      if (!descTag) {
        descTag = document.createElement("meta");
        descTag.name = "description";
        document.head.appendChild(descTag);
      }
      descTag.content = description;
    }
    meta.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
  }, [title, description, meta]);

  return null;
}
