import React from "react";

interface QuoteProps {
  quote: string;
  author: string;
}

const Quote = (props: QuoteProps) => {
  return (
    <figure className="border-l-6 border-slate-400 bg-zinc-600 px-3 py-2.5">
      <blockquote>
        <p className="italic">{props.quote}</p>
      </blockquote>
      <figcaption className="text-right">
        <cite>- {props.author}</cite>
      </figcaption>
    </figure>
  );
};

export default Quote;
