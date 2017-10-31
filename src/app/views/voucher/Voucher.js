// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import { Link }       from 'react-router-dom';

class Voucher extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // views:
    currentView:  PropTypes.string.isRequired,
    enterVoucher:   PropTypes.func.isRequired,
    leaveVoucher:   PropTypes.func.isRequired
  };

  componentDidMount() {
    const { enterVoucher } = this.props;
    enterVoucher();
  }

  componentWillUnmount() {
    const { leaveVoucher } = this.props;
    leaveVoucher();
  }

  render() {
    return(
      <AnimatedView>
        <h1>
          Recuperar n&uacute;mero de voucher
        </h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">CPF</label>
            <input type="text" className="form-control" id="cpf" aria-describedby="cpfHelp" placeholder="Digite seu CPF para recuperar o nro. do voucher..." />
            <small id="cpfHelp" className="form-text text-muted">Não utilize pontos ou outros caracteres especiais.</small>
          </div>

          <button type="submit" className="btn btn-primary">Recuperar</button>&nbsp;&nbsp;
          <Link className="btn btn-danger" to={'/'}>Voltar</Link>
        </form>
      </AnimatedView>
    );
  }
}

export default Voucher;
