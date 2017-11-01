import React, {
  Component
}                     from 'react';
import FormGroup      from 'react-bootstrap/lib/FormGroup';
import ControlLabel   from 'react-bootstrap/lib/ControlLabel';
import FormControl    from 'react-bootstrap/lib/FormControl';
import HelpBlock      from 'react-bootstrap/lib/HelpBlock';
import PropTypes      from 'prop-types';

class Input extends Component {
  static propTypes = {
    feedbackIcon: PropTypes.string,
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    meta: PropTypes.object
  };

  static defaultProps = {
    feedbackIcon: null,
    input: null,
    label: "",
    type: "text",
    placeholder: "",
    meta: {}
  };

  render () {
    const {
      feedbackIcon,
      input,
      label,
      type,
      placeholder,
      meta: { error, warning, touched },
      ...props
    } = this.props;

    const validationState = touched && ( error && "error" ) || ( warning && "warning" ) || null;

    return (
      <FormGroup validationState={ validationState }>
        <ControlLabel>{ label }</ControlLabel>
        <FormControl { ...input }
                     type={ type }
                     placeholder={ placeholder }
                     { ...props } />
        { feedbackIcon ? <FormControl.Feedback>{ feedbackIcon }</FormControl.Feedback> : null }
        { ( touched && ( error || warning ) ) ? <HelpBlock>{ error || warning }</HelpBlock> : null }
      </FormGroup>
    );
  }
}

export default Input;
