import { 
    Box, 
    FormControl, 
    FormLabel, 
    FormHelperText, 
    Input, 
    Textarea, 
    Button, 
    Checkbox 
  } from '@chakra-ui/react'
  import { Form, redirect } from 'react-router-dom'
  
  export default function Create() {
  
    return (
      <Box maxW="480px">
        <Form method="post" action="/create">
          <FormControl isRequired mb="40px">
            <FormLabel color={'GrayText'}>Task name:</FormLabel>
            <Input type="text" name="title" borderColor={'GrayText'}/>
            <FormHelperText>Enter a descriptive task name.</FormHelperText>
          </FormControl>
  
          <FormControl mb="40px">
            <FormLabel color={'GrayText'}>Task description:</FormLabel>
            <Textarea 
              placeholder="Enter a detailed description for your task..." 
              name="description"
              borderColor={'GrayText'}
            />
          </FormControl>
  
          <FormControl display="flex" alignItems="center" mb="40px">
            <Checkbox 
              name="isPriority" 
              colorScheme="purple"
              size="lg"
              borderColor={'GrayText'}
            />
            <FormLabel color={'GrayText'} mb="0" ml="10px">Make a priority task</FormLabel>
          </FormControl>
  
          <Button type="submit">submit</Button>
        </Form>
      </Box>
    )
  }
  
  export const createAction = async ({ request }) => {
    const data = await request.formData()
  
    const task = {
      title: data.get('title'),
      description: data.get('description'),
      isPriority: data.get('isPriority') === ''
    }
  
    console.log(task)
  
    return redirect('/')
  }
  