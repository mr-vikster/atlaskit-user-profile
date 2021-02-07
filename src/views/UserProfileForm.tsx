import React, { ChangeEvent, Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Form, {  
  CheckboxField,
  ErrorMessage,
  Field,
  FormFooter,
  HelperMessage,
} from '@atlaskit/form';
import Button, { ButtonGroup, LoadingButton } from '@atlaskit/button';
import { Checkbox } from '@atlaskit/checkbox';
import TextField from '@atlaskit/textfield';

const FormWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 24px auto;
  height: calc(100vh - 56px);
  & form {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 90%;
    margin: 16px auto;
  }
`;

const FormFieldRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > * {
    flex-basis: 49%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const getBase64 = (file: File) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}

const UserProfileForm = () => {

  const history = useHistory();
  const [avatarFileSizeError, setAvatarFileSizeError] = useState(false);

  const handleAvatarUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setAvatarFileSizeError(false);
    if (!e.currentTarget.files) return;
    const image = e.currentTarget.files[0];
    if(image.size > 2097152){
      setAvatarFileSizeError(true);
      e.currentTarget.value = ''
      return;
   };
    getBase64(image).then(base64 => {
      localStorage['atlaskit-user-profile-avatar'] = base64;
      console.debug("file stored",base64);
    });
  };

  const handleSubmit = (data: any) => {
    return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      Object.entries(data).filter((field: any) => field[0] !== 'avatar').map((field: any) => {
        return localStorage.setItem(`${field[0]}_atlaskit_test`, field[1]);
      });
      return history.push('/user-profile')
    });
  };

  return (
    <FormWrapper>
      <h2>Edit your profile</h2>
      <Form<{ username: string; newsletter: boolean; name: string; surname: string; email: string; avatar: any }>
        onSubmit={handleSubmit}
      >
        {({ formProps, submitting }) => (
          <form {...formProps}>
            <FormFieldRow>
              <Field
                name="name"
                label="Name"
                defaultValue={localStorage.getItem('name_atlaskit_test') || undefined}
                isRequired
                validate={value =>
                  value && value.match(/^[a-zA-Z]+$/gi) ? undefined : 'Invalid'
                }
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                  <TextField {...fieldProps} />
                  {error && !valid && (
                    <HelperMessage>
                      Only letters allowed in the Surname.
                    </HelperMessage>
                  )}
                </Fragment>
                )}
              </Field>
              <Field
                name="surname"
                label="Surname"
                defaultValue={localStorage.getItem('surname_atlaskit_test') || undefined}
                isRequired
                validate={value =>
                  value && value.match(/^[a-zA-Z]+$/gi) ? undefined : 'Invalid'
                }
              >
                {({ fieldProps, error, valid }) => {
                  return (
                    <Fragment>
                      <TextField {...fieldProps} />
                      {error && !valid && (
                        <HelperMessage>
                          Only letters allowed in the Surname.
                        </HelperMessage>
                      )}
                    </Fragment>
                  );
                }}
              </Field>
            </FormFieldRow>
            <FormFieldRow>
              <Field
                name="username"
                label="User name"
                defaultValue={localStorage.getItem('username_atlaskit_test') || undefined}
              >
                {({ fieldProps, error }) => (
                  <Fragment>
                    <TextField autoComplete="off" {...fieldProps} />
                    {!error && (
                      <HelperMessage>
                        You can use letters, numbers & periods.
                      </HelperMessage>
                    )}
                    {error && (
                      <ErrorMessage>
                        This user name is already in use, try another one.
                      </ErrorMessage>
                    )}
                  </Fragment>
                )}
              </Field>
              <Field
                name="email"
                label="Email"
                defaultValue={localStorage.getItem('email_atlaskit_test') || undefined}
                validate={value =>
                  value && value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi) ? undefined : 'Invalid'
                }
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <TextField autoComplete="off" {...fieldProps} />
                    {error && !valid && (
                        <HelperMessage>
                          Please enter a valid email.
                        </HelperMessage>
                      )}
                  </Fragment>
                )}
              </Field>
            </FormFieldRow>
            <FormFieldRow>
              <Field
                name="avatar"
                label="Avatar"
              >
                {({ fieldProps, error }) => (
                  <Fragment>
                    <TextField autoComplete="off" type="file" {...fieldProps} onChange={handleAvatarUpload} accept=".jpg,.jpeg,.png"/>
                    {!error && (
                      <HelperMessage>
                        You can upload a JPG/JPEG/PNG file of up to 2MB.
                      </HelperMessage>
                    )}
                    {avatarFileSizeError && (
                      <ErrorMessage>
                        Image file didn't meet validation criteria.
                      </ErrorMessage>
                    )}
                  </Fragment>
                )}
              </Field>
              <CheckboxField name="newsletter" label="Newsletter subscription" defaultIsChecked={!!localStorage.getItem('newsletter_atlaskit_test') || undefined}>
              {({ fieldProps }) => (
                <Checkbox {...fieldProps} label="Receive weekly updates in your email box" />
              )}
            </CheckboxField>
            </FormFieldRow>
            <FormFooter>
              <ButtonGroup>
                <Button appearance="subtle" onClick={() => history.push('/user-profile')}>Cancel</Button>
                <LoadingButton
                  type="submit"
                  appearance="primary"
                  isLoading={submitting}
                >
                  Update
                </LoadingButton>
              </ButtonGroup>
            </FormFooter>
          </form>
        )}
      </Form>
    </FormWrapper>
  )
};

export default UserProfileForm
