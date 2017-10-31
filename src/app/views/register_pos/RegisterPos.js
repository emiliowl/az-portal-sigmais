// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import { Link }       from 'react-router-dom';

class RegisterPos extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // views:
    currentView:  PropTypes.string.isRequired,
    enterRegisterPos:   PropTypes.func.isRequired,
    leaveRegisterPos:   PropTypes.func.isRequired
  };

  componentDidMount() {
    const { enterRegisterPos } = this.props;
    enterRegisterPos();
  }

  componentWillUnmount() {
    const { leaveRegisterPos } = this.props;
    leaveRegisterPos();
  }

  render() {
    return(
      <AnimatedView>
        <h1>
          Cadastro do Ponto de Venda
        </h1>
        <form>
          <div className="form-group">
            <label htmlFor="socialName">Raz&atilde;o Social</label>
            <input type="text" className="form-control" id="socialName" aria-describedby="socialNameHelp" placeholder="Digite a raz&atilde;o social..." />
            <small id="nameHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="name">Nome Fantasia</label>
            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Digite o nome fantasia..." />
            <small id="nameHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="contactPerson">Pessoa de Contato</label>
            <input type="text" className="form-control" id="contactPerson" aria-describedby="contactPersonHelp" placeholder="Digite o nome completo..." />
            <small id="contactPersonHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-inline">
            <div className="form-group">
              <label htmlFor="name">CNPJ</label>
              <input type="text" className="form-control" id="cnpj" aria-describedby="cnpjHelp" placeholder="99.999.999/9999-99" />
              <small id="cnpjHelp" className="form-text text-muted">Não utilize pontos ou outros caracteres especiais.</small>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="form-group">
              <label htmlFor="name">Inscri&ccedil;&atilde;o Estadual</label>
              <input type="text" className="form-control" id="ie" aria-describedby="ieHelp" placeholder="Digite sua IE..." />
              <small id="ieHelp" className="form-text text-muted">Não utilize pontos ou outros caracteres especiais.</small>
            </div>
          </div> {/* form-inline */}
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
            <small id="emailHelp" className="form-text text-muted">N&atilde;o compartilharemos seu e-mail nem dados.</small>
          </div>
          <hr />
          <div className="form-inline">
            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label">
                  <input type="radio" className="form-check-input" id="sigvarisRepTrue" name="sigvarisRep"/>
                  Sou atendido por um representante da SIGVARIS
                </label>
              </div>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="form-group">
              <label htmlFor="representative">Nome do REP</label>
              <input type="text" className="form-control" id="representative" aria-describedby="representativeHelp" placeholder="Digite o nome completo..." />
              <small id="representativeHelp" className="form-text text-muted"></small>
            </div>
          </div> {/* form-inline */}
          <div className="form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" id="sigvarisRepFalse" name="sigvarisRep"/>
              N&Atilde;O sou atendido por um representante da SIGVARIS
            </label>
          </div>

          <button type="submit" className="btn btn-primary">Cadastrar</button>&nbsp;&nbsp;
          <Link className="btn btn-danger" to={'/'}>Voltar</Link>
        </form>
      </AnimatedView>
    );
  }
}

export default RegisterPos;
