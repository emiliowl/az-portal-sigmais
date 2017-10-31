// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {Jumbotron}    from '../../components';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import { Link }       from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import img from '../../images/900x500.jpg';

class Home extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,
    
    // views:
    currentView:  PropTypes.string.isRequired,
    enterHome:    PropTypes.func.isRequired,
    leaveHome:    PropTypes.func.isRequired
  };

  componentDidMount() {
    const { enterHome } = this.props;
    enterHome();
  }

  componentWillUnmount() {
    const { leaveHome } = this.props;
    leaveHome();
  }

  render() {
    return(
      <AnimatedView>
        <Jumbotron>
          <h1>
            Portal Sig+
          </h1>
          <br />

          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src={img} />
              <p className="em-padding-left">
                <Link className="btn btn-success btn-lg" to={'/register_patient'}>
                  <i className="fa fa-info" />&nbsp; Cadastre-se!
                </Link>
              </p>
              <Carousel.Caption>
                <h3>Cadastro de Pacientes</h3>
                <p>Desejo participar do programa.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src={img} />
              <p className="em-padding-left">
                <Link className="btn btn-success btn-lg" to={'/register_pos'}>
                  <i className="fa fa-info" />&nbsp; Cadastre seu PDV!
                </Link>
              </p>
              <Carousel.Caption>
                <h3>Cadastro de PDV</h3>
                <p>Quero me credenciar como Ponto de Venda.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </Jumbotron>
      </AnimatedView>
    );
  }
}

export default Home;
