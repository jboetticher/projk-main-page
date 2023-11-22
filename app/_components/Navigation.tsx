'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import style from "../_styles/navigation.module.css";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import { UrlObject } from "url";

export default function Navigation() {
  const currentPath = usePathname();

  function PathnameLink(props: { href: string; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) {
    const href = props.href;
    return (
      <Link
        href={href}
        className={`${style.headerLink} ${currentPath.includes(href) && href !== '/' ? style.currentLink : ''}`}
      >
        {props.children}
      </Link>
    )
  }

  return (
    <header className={style.headerContainer}>
      <PathnameLink href='/'>HOME</PathnameLink>
      <PathnameLink href='/portfolio'>PORTFOLIO</PathnameLink>
      <PathnameLink href='/writings'>WRITINGS</PathnameLink>
      <PathnameLink href='/skills'>SKILLS</PathnameLink>
    </header>
  )
}
