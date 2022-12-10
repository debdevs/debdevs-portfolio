export default {
name: 'projects',
title: 'Projects',
type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type:'string',

        },
        {
            name: 'description',
            title: 'description',
            type:'string',

        },
        {
            name: 'extra_info',
            title: 'extra_info',
            type:'string',

        },
        {
            name: 'id',
            title: 'id',
            type:'string',

        },
        {
            name: 'tagline',
            title: 'tagline',
            type:'string',

        },
        {
            name: 'story',
            title: 'story',
            type:'string',

        },
        {
            name: 'second_heading',
            title: 'second_heading',
            type:'string',

        },
        {
            name: 'second_description',
            title: 'second_description',
            type:'string',

        },
        {
            name: 'link',
            title: 'link',
            type:'slug',

        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type:'image',
            options: {
                hotspot:true,
            }
        },
        {
            name: 'challenges',
            title: 'challenges',
            type:'string',

        },
        {
            name: 'category',
            title: 'category',
            type:'string',

        },
        {
            name: 'tech_stack',
            title: 'tech_stack',
            type:'string',

        },
        {
            name: 'landing_paragraph_info',
            title: 'landing_paragraph_info',
            type:'string',

        },

        {
            name: 'github_link',
            title: 'github_link',
            type:'string',

        },
        {
            name: 'live_project_link',
            title: 'live_project_link',
            type:'string',

        },
    ],

    orderings: [
        {
          title: 'id, descending',
          name: 'idDesc',
          by: [
            {field: 'id', direction: 'desc'}
          ]
        },
        {
            title: 'id, ascending',
            name: 'idAsc',
            by: [
              {field: 'id', direction: 'asc'}
            ]
          },

      ],

      preview: {
        select: {
          title: 'idDesc',
          name: 'rating'
        },
        prepare(movie, viewOptions = {}) {
          const title = viewOptions.ordering === 'id'
          ? `${movie.id} (${movie.name})`
          : movie.title
    
          return {title: title}
        }
      }





}