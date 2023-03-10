import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const CatNew = ({ createCat }) => {
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    createCat(newCat)
    alert("Cat submission complete!")
    navigate("/catindex")
  }
  return (
    <Form className="submitForm">
      <FormGroup>
      <Label for="name">Name</Label>
      <Input type="text" name="name" onChange={handleChange} value={newCat.name} />
      </FormGroup>
      <FormGroup>
      <Label for="age">Age</Label>
      <Input type="number" name="age" onChange={handleChange} value={newCat.age} />
      </FormGroup>
      <FormGroup>
      <Label for="enjoys">Enjoys</Label>
      <Input type="text" name="enjoys" onChange={handleChange} value={newCat.enjoys} />
      </FormGroup>
      <FormGroup>
      <Label for="image">Image URL</Label>
      <Input type="text" name="image" onChange={handleChange} value={newCat.image} />
      </FormGroup>
      <Button onClick={handleSubmit} name="submit">
      Submit Cat
      </Button>
    </Form>
  )
}

export default CatNew