export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec538bded9681cbc494ca8c',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-655ix7ui',
                  apiId: '303ea8a2-9fe3-4bcf-af95-5fc7a235c9c1'
                },
                {
                  buildHookId: '5ec538bded9681757994dea8',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-pm3dak91',
                  apiId: 'b9e19ad2-315a-4a2e-ac90-24ade4a77d2e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Roman-Zhukovskii/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-pm3dak91.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
