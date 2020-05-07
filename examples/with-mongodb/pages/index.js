import Link from 'next/link';
import fetch from 'isomorphic-unfetch' //alternative dbconnect into getStaticProps??
import { Button, Card, Image } from 'semantic-ui-react';

/* Displays the homepage, which consists of pet cards*/
const Index = ({ pets }) => {
  return (
    <div className="notes-container">
      <h1>Pets</h1>
      <div className="grid wrapper">
        {pets.map( pet => { return (
          <div key={pet._id}>
            {/* Instances of pet card */}
            <Card>
              <Image src={pet.image_url} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{pet.name}</Card.Header>
                <Card.Meta>
                  <span className='owner'>Owner: {pet.owner_name}</span>
                </Card.Meta>
                <Card.Description>
                  {/* May be a good idea to display all info on pets*/}
                  {pet.likes.map(s => <span key={s}>{s} </span>)}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div>
                  <Link href={`/${pet._id}/edit`}>
                    <Button basic color='green'>Edit</Button>
                  </Link>
                  <Link href={`/${pet._id}`}>
                    <Button basic color='red'>Delete</Button>
                  </Link>
                </div>

              </Card.Content>
            </Card>
          </div>
        )})}
      </div>
    </div>
  )
}

/* Retrieves pet(s) data from mongodb database */
Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/pets');
  const { data } = await res.json();

  return { pets: data }
}

export default Index;