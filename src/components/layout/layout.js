import React from "react"
import { Link } from "gatsby"
import {Helmet} from 'react-helmet'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

function Layout({title, lang, description, children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Web KDM on Progress</h3>
        </Link>
        <ul style={{ listStyle:`none`, float: `left` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Kampus Diakonia Modern'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Yayasan Kampus Diakonia Modern'} />
      </Helmet>
      {children}
    </div>
  )
}

export default Layout