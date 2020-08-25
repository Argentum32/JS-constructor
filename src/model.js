import react from './img/react.svg'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks'
import {css} from './utils'

export const model = [
    new TitleBlock('React', {
        tag: 'h2',
        styles: css({
            background: '#001a50b4',
            color: '#fff',
            'text-align': 'center'
        })
    }),
    new ImageBlock(react, {
        styles: css({
            padding: '1rem 0',
            margin: '0 auto',
            display: 'flex',
            'justify-content': 'center'
        }),
        alt: 'react logo',
        imageStyles: 'width: 100px; height: auto;'
    }),
    new TextBlock('It is an open-source JavaScript library for building user interfaces or UI components.',{
            styles: css({
                background: '#cfdae6e1',
                 color: '#011f3bbe',
                  padding: '.5rem'
            })
        }),
    new TextColumnsBlock([
        'React code is made of entities called components. Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass in values that are known as "props".',
        'The two primary ways of declaring components in React is via functional components and class-based components.',
        'Parallel native technology for creating reusable building blocks of the web — Web Components.',
        'Advantage over React components — ability to create components not only for React but also for Angular, other libraries/frameworks, and for projects without any external dependency'
    ], {
        styles: css({ 
            background:' #f1ffffef', 
            padding: '1rem'
        })
    })
]