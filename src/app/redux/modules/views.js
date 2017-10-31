import moment from 'moment';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
const ENTER_LOGIN_VIEW                = 'ENTER_LOGIN_VIEW';
const LEAVE_LOGIN_VIEW                = 'LEAVE_LOGIN_VIEW';
const ENTER_HOME_VIEW                 = 'ENTER_HOME_VIEW';
const LEAVE_HOME_VIEW                 = 'LEAVE_HOME_VIEW';
const ENTER_COMPONENTS_VIEW           = 'ENTER_COMPONENTS_VIEW';
const LEAVE_COMPONENTS_VIEW           = 'LEAVE_COMPONENTS_VIEW';
const ENTER_VOUCHER_VIEW              = 'ENTER_VOUCHER_VIEW';
const LEAVE_VOUCHER_VIEW              = 'LEAVE_VOUCHER_VIEW';
const ENTER_REGISTER_PATIENT_VIEW     = 'ENTER_REGISTER_PATIENT_VIEW';
const LEAVE_REGISTER_PATIENT_VIEW     = 'LEAVE_REGISTER_PATIENT_VIEW';
const ENTER_REGISTER_POS_VIEW         = 'ENTER_REGISTER_POS_VIEW';
const LEAVE_REGISTER_POS_VIEW         = 'LEAVE_REGISTER_POS_VIEW';
const ENTER_PROTECTED_VIEW            = 'ENTER_PROTECTED_VIEW';
const LEAVE_PROTECTED_VIEW            = 'LEAVE_PROTECTED_VIEW';


// /////////////////////
// reducer
// /////////////////////
const initialState = {
  currentView:  'not set',
  enterTime:    null,
  leaveTime:    null
};

export default function (state = initialState, action) {
  switch (action.type) {

  case ENTER_HOME_VIEW:
  case ENTER_COMPONENTS_VIEW:
  case ENTER_VOUCHER_VIEW:
  case ENTER_LOGIN_VIEW:
  case ENTER_PROTECTED_VIEW:
  case ENTER_REGISTER_PATIENT_VIEW:
  case ENTER_REGISTER_POS_VIEW:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case LEAVE_HOME_VIEW:
  case LEAVE_COMPONENTS_VIEW:
  case LEAVE_VOUCHER_VIEW:
  case LEAVE_LOGIN_VIEW:
  case LEAVE_PROTECTED_VIEW:
  case LEAVE_REGISTER_PATIENT_VIEW:
  case LEAVE_REGISTER_POS_VIEW:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  default:
    return state;
  }
}


// /////////////////////
// action creators
// /////////////////////
export function enterHome(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'home',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveHome(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'home',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterComponents(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_COMPONENTS_VIEW,
    currentView:  'components',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveComponents(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_COMPONENTS_VIEW,
    currentView:  'components',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterVoucher(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_VOUCHER_VIEW,
    currentView:  'voucher',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveVoucher(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_VOUCHER_VIEW,
    currentView:  'voucher',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterRegisterPatient(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_REGISTER_PATIENT_VIEW,
    currentView:  'register_patient',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveRegisterPatient(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_REGISTER_PATIENT_VIEW,
    currentView:  'register_patient',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterRegisterPos(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_REGISTER_POS_VIEW,
    currentView:  'register_pos',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveRegisterPos(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_REGISTER_POS_VIEW,
    currentView:  'register_pos',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterLogin(time = moment().format()) {
  return {
    type:         ENTER_LOGIN_VIEW,
    currentView:  'Login',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveLogin(time = moment().format()) {
  return {
    type:         LEAVE_LOGIN_VIEW,
    currentView:  'Login',
    enterTime:    null,
    leaveTime:    time
  };
}


export function enterProtected(time = moment().format()) {
  return {
    type:         ENTER_PROTECTED_VIEW,
    currentView:  'Protected',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveProtected(time = moment().format()) {
  return {
    type:         LEAVE_PROTECTED_VIEW,
    currentView:  'Protected',
    enterTime:    null,
    leaveTime:    time
  };
}
