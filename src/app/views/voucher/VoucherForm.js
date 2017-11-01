// @flow weak

import React, {
  PureComponent
}                     from 'react';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import { Link }       from 'react-router-dom';
import PageHeader     from 'react-bootstrap/lib/PageHeader';
import { Field, reduxForm }  from 'redux-form';
import Input          from '../../components/bootstrapDecorators/Input';

const required = (value) => value ? undefined : 'Required';
class VoucherForm extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return(
      <AnimatedView>
        <PageHeader>Recuperar n&uacute;mero de voucher&nbsp;<small>apenas para pacientes cadastrados</small></PageHeader>

        <form onSubmit={handleSubmit}>
          <Field name="cpf"
                 label="CPF"
                 type="number"
                 placeholder="Digite seu CPF para recuperar o nro. do voucher..."
                 component={Input}
                 validate={[ required ]}/>
          <button type="submit" className="btn btn-primary">Recuperar</button>&nbsp;&nbsp;
          <Link className="btn btn-danger" to={'/'}>Voltar</Link>
        </form>
      </AnimatedView>
    );
  }
}

VoucherForm = reduxForm({
  form: 'VoucherForm' // a unique name for this form
})(VoucherForm);

export default VoucherForm;
