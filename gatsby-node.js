const path = require('path');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;
  
  const pageTemplate = path.resolve('src/templates/page.js');

  return graphql(`{
    allResourcesJson {
      edges {
        node {
          page
          title
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allResourcesJson.edges.forEach(({node}) => {
      createPage({
        path: node.page,
        component: pageTemplate
      })
    })
  })
}