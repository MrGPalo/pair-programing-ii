/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { saveOnServer } from '../lib/redux/actions';
import { LoadingSpiner } from './LoadingSpinner';

const FormFlex = styled.div`
display:flex
`;
const FormElement = styled.div`
display:flex;
flex-direction: colum;
margin:5px;
`;

const ErrorMessageText = styled.p`
margin:0;
color:red
`;

// eslint-disable-next-line no-promise-executor-return
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Error = ({ field, errors }) => {
  if (errors[field]) {
    return <ErrorMessageText>{errors[field].message}</ErrorMessageText>;
  }
  return <></>;
};

export const Form_Recipe = connect()(({ dispatch }) => {
  // console.log(onAddItem);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm(
    {
      defaultValues: { name: '', quantity: 1 },
    },
  );

  const submit = handleSubmit(async (data) => {
    // console.log(data);
    await timeout(2000);
    await dispatch(saveOnServer(data));
    reset();
  });
  const internalState = watch();

  return (
    <div>
      <pre>{JSON.stringify(internalState.name)}</pre>
      <pre>{JSON.stringify(internalState.quantity)}</pre>
      <LoadingSpiner isLoading={isSubmitting}>
        <div style={{ padding: '20px' }}>
          <FormFlex>
            <FormElement>
              <input placeholder="Ingredient" {...register('name', { required: 'Add an ingrendient' })} />
              <Error field="name" errors={errors} />
            </FormElement>
            <FormElement>
              <input placeholder="" {...register('quantity', { required: 'Add quantity' })} />
              <Error field="quantity" errors={errors} />
            </FormElement>
            {
          internalState.name === 'azucar' && (
            <FormElement>
              🤐 ES UN SECRETO
            </FormElement>
          )
        }
            <FormElement>
              <button onClick={submit} type="button">Add item</button>
            </FormElement>
          </FormFlex>
        </div>
      </LoadingSpiner>

    </div>
  );
});
