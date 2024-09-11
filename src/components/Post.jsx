import { compareAsc, format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

import { toast } from 'react-toastify';
import { useState } from 'react';

export function Post ({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'  
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publisheDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault(); //não fazer o redirecionamento de pagina

    setComments([...comments, newCommentText]);
    setNewCommentText('');

    toast.success("Obrigado pelo comentário")
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);

  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comments => {
      return comments != commentToDelete;
    })
    setComments(commentsWithoutDeletedOne);
    toast.success("Comentário deletado!")
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} /> 
          
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publisheDateRelativeToNow}
        </time>

      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type ==='paragraph'){
            return <p key={line.content}>{line.content}</p>
          }else if(line.type === 'link'){
            return <p key={line.content}> <a href="#">{line.content}</a> </p>
          }
        })}
      </div>

      <form onSubmit={ handleCreateNewComment } className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name='comment'
          placeholder='Deixe seu comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type='submit'>Publicar</button>
          
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}