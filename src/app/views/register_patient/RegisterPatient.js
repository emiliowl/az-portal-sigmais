// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import { Link }       from 'react-router-dom';

class RegisterPatient extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // views:
    currentView:  PropTypes.string.isRequired,
    enterRegisterPatient:   PropTypes.func.isRequired,
    leaveRegisterPatient:   PropTypes.func.isRequired
  };

  componentDidMount() {
    const { enterRegisterPatient } = this.props;
    enterRegisterPatient();
  }

  componentWillUnmount() {
    const { leaveRegisterPatient } = this.props;
    leaveRegisterPatient();
  }

  render() {
    return(
      <AnimatedView>
        <h1>
          Cadastro do consumidor
        </h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Digite seu nome completo..." />
              <small id="nameHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="name">CPF</label>
            <input type="text" className="form-control" id="cpf" aria-describedby="cpfHelp" placeholder="Digite seu CPF..." />
            <small id="cpfHelp" className="form-text text-muted">Não utilize pontos ou outros caracteres especiais.</small>
          </div>
          <div className="form-group">
            <label htmlFor="name">Data de Nascimento</label>
            <input type="date" className="form-control" id="birthDate" aria-describedby="birthDateHelp" placeholder="dd/mm/yyyy" />
            <small id="birthDateHelp" className="form-text text-muted">Não utilize barras ou outros caracteres especiais.</small>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Sexo</label>
            <select className="form-control" id="gender">
              <option value="0">Selecione</option>
              <option value="1">Feminino</option>
              <option value="2">Masculino</option>
            </select>
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="address">Endere&ccedil;o</label>
            <input type="text" className="form-control" id="address" aria-describedby="addressHelp" placeholder="rua, número..." />
            <small id="addressHelp" className="form-text text-muted">Digite o nome do logradouro e o n&uacute;mero</small>
          </div>
          <div className="form-inline">
            <div className="form-group">
              <label htmlFor="neighborhood">Bairro</label>
              <input type="text" className="form-control" id="neighborhood" aria-describedby="neighborhoodHelp" placeholder="Bairro" />
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="form-group">
              <label htmlFor="uf">UF</label>
              <select className="form-control" id="uf">
                <option value="0">Selecione</option>
              </select>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="form-group">
              <label htmlFor="city">Cidade</label>
              <select className="form-control" id="city">
                <option value="0">Selecione</option>
              </select>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
          </div> {/* form-inline */}
          <hr />
          <div className="form-inline">
            <div className="form-group">
              <label htmlFor="celphone">Celular</label>
              <input type="text" className="form-control" id="celphone" aria-describedby="celphoneHelp" placeholder="(DD)99999-9999" />
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input type="text" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="(DD)9999-9999" />
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
          </div> {/* form-inline */}
          <hr />
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="seuemail@provedor.com" />
              <small id="emailHelp" className="form-text text-muted">N&atilde;o compartilharemos seu e-mail nem dados pessoais.</small>
          </div>

          <button type="submit" className="btn btn-primary">Cadastrar</button>&nbsp;&nbsp;
          <Link className="btn btn-danger" to={'/'}>Cancelar</Link>
        </form>
      </AnimatedView>
    );
  }
}

export default RegisterPatient;
