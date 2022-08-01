import * as yup from 'yup'

var mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/

//The string must contain at least 1 lowercase alphabetical character, The string must contain at least 1 uppercase alphabetical character, The string must contain at least 1 numeric characterThe string must be six characters or longer


export const formSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Required'),
    password: yup.string().min(6).matches(mediumRegex,{message: "Please create a stronger password"}).required('Required'),
    confirmPassword : yup.string().oneOf([yup.ref('password'),null],'Password must match').required('Required'),
})