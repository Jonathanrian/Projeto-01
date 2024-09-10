import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post () {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/95014039?v=4" /> 
          
            <div className={styles.authorInfo}>
              <strong>Jonathan Ryan</strong>
              <span>Web Developer</span>
            </div>
        </div>

        <time title='09 de setembro às 14:30h' dateTime="2024-09-09">
          Publicado há 1h
        </time>

      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu GitHub. É um projeto que fiz nos estudos diarios. O nome do projeto é PrimeFlix 🚀</p>
        <p><a href="https://prime-five-sable.vercel.app/">PrimeFlix</a></p>
        <p> 
          <a href="">#NovoProjeto</a> {' '}
          <a>#Nlw </a> {' '}
          <a>#Rocketseat</a> {' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe seu comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}