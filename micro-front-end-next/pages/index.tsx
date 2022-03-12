import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Home: NextPage = () => {
  const [profile, setProfile] = useState<any>({
    name: null,
    age: null,
  })
  const submit = async (e: any) => {
    e.preventDefault()
    try {
      console.log(profile)
      await axios.put('http://localhost:3002/profile', profile)
    } catch (error) {

    } finally {
      window.location.href = 'http://localhost:8080/'
    }
  }

  const change = ({ currentTarget: { name, value }}: any) => {
    setProfile({
      ...profile,
      [name]: value,
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.display__flex}>
        <div>
          <h1>FORMULARIO NEXT</h1>
          <form onSubmit={submit}>
            <div className={styles.form__field}>
              <label htmlFor='name'>
                <input className={styles.input} type='text' name='name' placeholder='Seu nome' id='name' autoComplete='off' onChange={change} />
              </label>
            </div>

            <div className={styles.form__field}>
              <label htmlFor='age'>
                <input className={styles.input} type='text' name='age' placeholder='Sua idade' id='age' autoComplete='off' onChange={change} />
              </label>
            </div>

            <button className={styles.button} type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
