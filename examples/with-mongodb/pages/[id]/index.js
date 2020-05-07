import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';

/* Allows you to view pet card info and delete pet card*/

const Pet = ({ pet }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deletePet();
        }
    }, [isDeleting])
    
    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deletePet = async () => {
        const petID = router.query.id;
        try {
            const deleted = await fetch
            (`/api/pets/${petID}`, {
                method: "Delete"
            });
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
        <div className="pet-container">
            {isDeleting
                ? <Loader active />
                : 
                <>
                    <h1>{pet.name}</h1>
                    <p>{pet.owner_name}</p>
                    <p>{pet.species}</p>
                    <p>{pet.age}</p>
                    <p>{pet.poddy_trained}</p>
                    <p>{pet.diet}</p>
                    <p>{pet.image_url}</p>
                    <p>{pet.likes}</p>
                    <p>{pet.dislikes}</p>
                    <Button color='red' onClick={open}>Delete</Button>
                </>
            }
            <Confirm
                open={confirm}
                onCancel={close}
                onConfirm={handleDelete}
            />
        </div>
    )
}

Pet.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/pets/${id}`);
    const { data } = await res.json();

    return { pet: data }
}

export default Pet;