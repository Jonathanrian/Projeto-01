import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';


import './global.css';
import { Sidebar } from './components/Sidebar';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          <Post 
            author="Jonathan Ryan"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio corporis molestias blanditiis harum, nobis dicta nemo esse ea eum fugit similique repudiandae aliquam iste, iusto modi, soluta adipisci praesentium?"
          />
        </main>
      </div>
    </div>
  )
}


