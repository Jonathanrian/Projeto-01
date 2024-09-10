import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';


import './global.css';
import { Sidebar } from './components/Sidebar';


const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/95014039?v=4',
      name: 'Jonathan Ryan',
      role: 'Web develop'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu GitHub. É um projeto que fiz nos estudos diarios. O nome do projeto é PrimeFlix 🚀',},
      { type: 'link', content: 'https://prime-five-sable.vercel.app/',},
    ], 
    publishedAt: new Date('2024-09-10 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/95014039?v=4',
      name: 'Samyra Ellen',
      role: 'Farmaceutica'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu GitHub. É um projeto que fiz nos estudos diarios. O nome do projeto é PrimeFlix 🚀',},
      { type: 'link', content: 'https://prime-five-sable.vercel.app/',},
    ], 
    publishedAt: new Date('2024-09-15 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          {post.map(post => {
            return (
              <Post 
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


