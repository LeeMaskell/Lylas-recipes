import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import setUpTags from '../utils/setupTags'
import SEO from "../components/SEO"

const Tags = ({data}) => {
    const newTags = setUpTags(data.allContentfulRecipe.nodes)
    return (
        <Layout>
          <SEO title="Tags" />
           <main className="page">
               <section className="tags-page">
                   {newTags.map((tag, index) => {
                     const [text, value] = tag
                        return <Link to={`/${text}`} key={index} className="tags">
                            <h5>{text}</h5>
                            <p>{value} recipe</p>
                        </Link>  
                   })}
               </section>
           </main>
        </Layout>
    )
}

export default Tags

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`