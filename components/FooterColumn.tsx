"use client";
import React from 'react'
import Link from 'next/link';

interface FooterColumnProps {
    title: string;
    links: string[];
}

const FooterColumn = (props: FooterColumnProps) => {
  return (
      <div className="footer_column">
          <h4 className="font-semibold">{props.title}</h4>
          <ul className="flex flex-col gap-2 font-normal">
              {props.links.map((link) => (
                  <Link href="/" key={link}>
                      {link}
                </Link>
              ))}
          </ul>
    </div>
  )
}

export default FooterColumn
