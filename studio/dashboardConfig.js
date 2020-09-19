export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f6589fdf17100c4113967ea',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uti3y3s9',
                  apiId: '685ac68b-e8b9-4a6d-8fa3-7acf0ce3722c'
                },
                {
                  buildHookId: '5f6589fd1e75b88ad2748cda',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ji88cu4w',
                  apiId: '52a26bdd-642e-441e-93ae-1c9bb78a76dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lerenos/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ji88cu4w.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
