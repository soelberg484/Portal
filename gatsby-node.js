// const pathy = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions

//     const test = path.resolve(`./src/pages/index.tsx`)
//     return graphql(
//         `
//             {
//                 allContentfulArticle{
//                   edges {
//                     node {
//                       title
//                         description {
//                         childContentfulRichText {html}
//                         } 
//                       createdDate
//                     }
//                   }
//                 }
//               }
//         `
//     ).then(result => {
//         if (result.errors) {
//             throw result.errors
//         }

//         const articles = result.data.allContentfulArticle.edges

//         articles.forEach((article, index) => {
//             const prev = index === articles.length - 1 ? null : articles[index + 1].node
//             const next = index === 0 ? null : articles[index - 1].node

//             createPage({
//                 path: post.node.title,
//                 component: index,
//                 context: {
//                     title: post.node.title,
//                     prev,
//                     next,
//                 },
//             })
//         })
        
//     })
// }