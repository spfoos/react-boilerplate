/**
*
* RepoForm
*
*/

import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';

import messages from './messages';
import Form from './Form';
import AtPrefix from './AtPrefix';


class RepoForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const  { handleSubmit } = this.props;
    return (
            <Form onSubmit={handleSubmit}>
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Field
                  id="username"
	          name="username"
	          component="input"
                  type="text"
                  placeholder="mxstbr"
                  label="User Name"
                  // value={this.props.username}
                  // onChange={this.props.onChangeUsername}
                />
            </Form>
    );
  }
}

RepoForm.propTypes = {
    submit: React.PropTypes.func,
};

RepoForm = reduxForm({
    form: 'home'
})(RepoForm);

export default RepoForm;
