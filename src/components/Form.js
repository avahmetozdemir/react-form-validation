import * as React from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { FormLabel} from '@mui/material';
import { useFormik } from 'formik';
import { formSchema } from '../schemas';


const onSubmit  =async(values,actions)=> {
  console.log(values)
  await new Promise((resolve)=>setTimeout(resolve,1000))
  actions.resetForm()
}


export default function SubmitForm() {

  const {values,errors,touched, handleBlur,isSubmitting, handleChange,handleSubmit} = useFormik({
    initialValues :  {
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema : formSchema,
    onSubmit
  })
  
  console.log(errors);

  return (
   <form onSubmit={handleSubmit} >
     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        size="md"
        placeholder="example@gmail.com"
        type='email'
        id='email'
        sx={errors.email && touched.email ?{
          '--Input-radius': '10px',
          '--Input-decorator-childHeight': `32px`,
          borderColor: 'red'
        }:{'--Input-radius': '10px',
          '--Input-decorator-childHeight': `32px`,}}
        
      />
      {errors.email && touched.email && <p style={{margin:'0', color:'red'}}>{errors.email}</p>}
      <Input
        startDecorator={<KeyRoundedIcon />}
        placeholder="Password"
        type="password"
        id ='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        sx = {errors.password && touched.password ? {borderColor: 'red'} : {}}
      />
      {errors.password && touched.password && <p style={{margin:'0', color:'red'}}>{errors.password}</p>}


      
      <Input
        startDecorator={<KeyRoundedIcon />}
        placeholder="Password Confirm"
        type="password"
        id='confirmPassword'
        value={values.confirmPassword}
        onChange ={handleChange}
        onBlur={handleBlur}
        sx = {errors.confirmPassword && touched.confirmPassword ? {borderColor: 'red'} : {}}
      />
      {errors.confirmPassword && touched.confirmPassword && <p style={{margin:'0', color:'red'}}>{errors.confirmPassword}</p>}

     <Button  type='submit' disabled={isSubmitting} variant="soft" endIcon={<KeyboardArrowRight />} color="success">
        Submit
      </Button>
    </Box>
   </form>
  );
}
