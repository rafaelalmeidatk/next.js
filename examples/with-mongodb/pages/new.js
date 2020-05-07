import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader, Checkbox } from 'semantic-ui-react';
import { useRouter } from 'next/router';    

const NewPet = () => {
    /*form containing data for added pet*/
    const [form, setForm] = useState({
        name: '',
        owner_name: '',
        species: '',
        age: 0,
        poddy_trained: true,
        diet: [],
        image_url: '',
        likes: [],
        dislikes: []
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [value, setValue] = useState(null);
    const router = useRouter();

    /* Checks if there's errors when adding a pet*/
    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                addPet();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    /*The POST method adds a new entry in the mongodb database. 
    The addPet function posts pet card info to mongodb database. */
    const addPet = async () => {
        try {
            const res = await fetch('/api/pets',
            {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            // console.log(JSON.stringify(form));            
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
    const validate = () => {
        let err = {};

        if (!form.name) {
            err.name = 'Name is required';
        }
        if (!form.owner_name) {
            err.owner_name = 'Owner is required';
        }
        if (!form.species) {
            err.species = 'Species is required';
        }
        if (!form.image_url) {
            err.species = 'Species is required';
        }

        return err;
    }

    /* toggles poddy_trained checkbox */
    const toggle = () => {
        setForm({
            ...form,
            poddy_trained: !errors.poddy_trained
        })
        errors.poddy_trained = !errors.poddy_trained
    }

    return (
        <div className="form-container">
            <h1>Add Pet</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        // beginning of pet form
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                // fluid
                                error={errors.name ? { content:
                                'Please enter a name', pointing:
                                'below'} : null}
                                label='Name'
                                placeholder='Name'
                                name='name'
                                onChange={handleChange}
                            />
                            <Form.Input
                                // fluid
                                error={errors.owner_name ? { content:
                                'Please enter the owner\'s name', pointing:
                                'below'} : null}
                                label='Owner'
                                placeholder='Owner'
                                name='owner_name'
                                onChange={handleChange}
                            />
                            <Form.Input
                                // fluid
                                error={errors.species ? { content:
                                'Please enter the species', pointing:
                                'below'} : null}
                                label='Species'
                                placeholder='Species'
                                name='species'
                                onChange={handleChange}
                            />
                            <Form.Input
                                // fluid
                                error={errors.age ? { content:
                                'Please enter the age', pointing:
                                'below'} : null}
                                label='Age'
                                placeholder='Age'
                                name='age'
                                type='number'
                                onChange={handleChange}
                            />
                            <Form.Field>
                                <Checkbox
                                    // radio
                                    label='Poddy Trained'
                                    name='poddy_trained'
                                    checked={errors.poddy_trained}
                                    onChange={toggle}
                                />
                            </Form.Field>
                            <Form.TextArea
                                // fluid
                                error={errors.diet ? { content:
                                    'Please enter diet', pointing:
                                    'below'} : null}
                                label='Diet'
                                placeholder='Diet'
                                name='diet'
                                onChange={handleChange}
                            />
                            <Form.Input
                                // fluid
                                error={errors.image_url ? { content:
                                'Please enter an Image url', pointing:
                                'below'} : null}
                                label='Image'
                                placeholder='Image'
                                name='image_url'
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                // fluid
                                error={errors.likes ? { content:
                                    'Please enter likes', pointing:
                                    'below'} : null}
                                label='Likes'
                                placeholder='Likes'
                                name='likes'
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                // fluid
                                error={errors.dislikes ? { content:
                                    'Please enter dislikes', pointing:
                                    'below'} : null}
                                label='Dislikes'
                                placeholder='Dislikes'
                                name='dislikes'
                                onChange={handleChange}
                            />
                            <Button type='submit'>Add</Button>
                            <pre>
                                {JSON.stringify(form)}
                            </pre>
                        </Form>
                }
            </div>
        </div>
    )
}

export default NewPet;