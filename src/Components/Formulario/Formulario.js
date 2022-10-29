
import './Formulario.css'
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup'

const Formulario = ({ order }) => {

        const initialValues = {

                nombre: '',
                apellido: '',
                celular: '',
                email: ''
        }

        const validationSchema = Yup.object ({

                nombre: Yup.string().required('Required'),
                apellido: Yup.string().required('Required'),
                celular: Yup.number().required('Required'),
                email: Yup.string().required('Required'),
})

        const onSubmit =  (values) => {

                const Usuario = {

                        nombre: values?.nombre,
                        apellido: values?.apellido,
                        celular: values?.celular ,
                        email: values?.email

                }
        order(Usuario)
              
                }    
        
                return (

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

                        {formik => {

                                return <Form className="formCheck">

                                      <label className='nombresCheck'> Nombre </label> <Field
                                      className='inputCheck'
                                                control='input'
                                                type='text'
                                                label='text'
                                                name='nombre'/> 
                                       <label className='nombresCheck'> Apellido </label>  <Field
                                       className='inputCheck'
                                                control='input'
                                                type='text'
                                                label='text'
                                                name='apellido'/>
                                       <label className='nombresCheck'> Celular </label>  <Field className='inputCheck'
                                                control='input'
                                                type='text'
                                                label='text'
                                                name='celular'/>
                                        
                                        <label className='nombresCheck'> Email </label>  <Field
                                        className='inputCheck'
                                                control='input'
                                                type='email'
                                                label='email'
                                                name='email'/>

    <button type='submit' className='btnCheck'>Confirmar</button>

                          </Form>
                        }}

                </Formik>
        )
}

export default Formulario

