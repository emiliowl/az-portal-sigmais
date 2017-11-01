// @flow weak

import React, {
  PureComponent
}                     from 'react';
import { SubmissionError } from 'redux-form';
import PropTypes      from 'prop-types';
import VoucherForm    from './VoucherForm';

class Voucher extends PureComponent {
  static propTypes = {
    // react-router 4:
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    // views:
    currentView: PropTypes.string.isRequired,
    enterVoucher: PropTypes.func.isRequired,
    leaveVoucher: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {enterVoucher} = this.props;
    enterVoucher();
  }

  componentWillUnmount() {
    const {leaveVoucher} = this.props;
    leaveVoucher();
  }

  submit = (values) => {
    // Do something with the form values
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    return sleep(1000) // simulate server latency
      .then(() => {
        if (![ '37374688857' ].includes(values.username)) {
          throw new SubmissionError({ cpf: 'CPF não encontrado', _error: 'Busca inválida!' });
        }
      });
  };

  render() {
    return (
      <VoucherForm onSubmit={this.submit} />
    );
  }
}
export default Voucher;
