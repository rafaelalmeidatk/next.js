import { useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

const EditPet = ({ pet }) => {
  const router = useRouter()

  useEffect(() => {
    document
      .querySelectorAll('#edit-pet-form input, #edit-pet-form textarea')
      .forEach(element => {
        if (element.name === 'poddy_trained')
          element.checked = pet[element.name]
        else element.value = pet[element.name]
      })
  })

  /* The PUTS method replaces/updates an exisiting entry in the 
    database. The editPet function replaces edited version
    of pet card info to mongodb database */
  const editPet = async form => {
    try {
      await fetch(`/api/pets/${router.query.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    // For each field in the pet form, add the value to the form object
    document
      .querySelectorAll('#edit-pet-form input, #edit-pet-form textarea')
      .forEach(element => {
        if (element.name === 'age') pet[element.name] = parseInt(element.value)
        else if (element.name === 'likes' || element.name === 'dislikes')
          pet[element.name] = [element.value]
        else if (element.name === 'poddy_trained') {
          pet[element.name] = element.checked
        } else pet[element.name] = element.value
      })

    editPet(pet)
  }

  return (
    <form action="POST" id="edit-pet-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" maxLength="20" name="name" required />

      <label htmlFor="owner_name">Owner</label>
      <input type="text" maxLength="20" name="owner_name" required />

      <label htmlFor="species">Species</label>
      <input type="text" maxLength="30" name="species" required />

      <label htmlFor="age">Age</label>
      <input type="number" name="age" />

      <label htmlFor="poddy_trained">Potty Trained</label>
      <input type="checkbox" name="poddy_trained" />

      <label htmlFor="diet">Diet</label>
      <textarea name="diet"></textarea>

      <label htmlFor="image_url">Image URL</label>
      <input type="url" name="image_url" required />

      <label htmlFor="likes">Likes</label>
      <textarea name="likes" maxLength="60"></textarea>

      <label htmlFor="dislikes">Dislikes</label>
      <textarea name="dislikes" maxLength="60"></textarea>

      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  )
}

EditPet.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/pets/${id}`)
  const { data } = await res.json()

  return { pet: data }
}

export default EditPet
