/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { saveOnServerRecipe } from '../lib/redux/actions';
import { validator } from '../lib/validator';
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

export const InputRecipe = connect()(({ dispatch }) => {
  // console.log(onAddItem);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm(
    {
      defaultValues: {
        name: '', instructions: '', price: '', ingredients: '',
      },
    },
  );

  const submit = handleSubmit(async (data) => {
    // console.log(data);
    // TODO validator function
    if (validator(data.name)) {
      await timeout(2000);
      await dispatch(saveOnServerRecipe(data));
      reset();
    } else console.log('You have to intruduce another recipe');
  });
  const internalState = watch();

  return (
    <div>
      <pre>{JSON.stringify(internalState.name)}</pre>
      <LoadingSpiner isLoading={isSubmitting}>
        <div style={{ padding: '20px' }}>
          <FormFlex>
            <FormElement>
              <input placeholder="Recipe" {...register('name', { required: 'Add a name' })} />
              <Error field="name" errors={errors} />
            </FormElement>
            <FormElement>
              <input placeholder="Instructions" {...register('instructions', { required: 'Add instructions' })} />
              <Error field="instructions" errors={errors} />
            </FormElement>
            <FormElement>
              <input placeholder="Price" {...register('price', { required: 'Add price' })} />
              <Error field="price" errors={errors} />
            </FormElement>
            <FormElement>
              <input placeholder="Ingredient name" {...register('ingredients', { required: 'Add ingredient name' })} />
              <Error field="ingredients" errors={errors} />
            </FormElement>
            {/* <FormElement>
              <input placeholder="Ingredient quantity" {...register('ingredients.quantity', { required: 'Add ingredient quantity' })} />
              <Error field="ingredients-quantity" errors={errors} />
            </FormElement> */}
            <FormElement>
              <button onClick={submit} type="button">Add item</button>
            </FormElement>
          </FormFlex>
        </div>
      </LoadingSpiner>

    </div>
  );
});
