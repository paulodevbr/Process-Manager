/**
 *
 * ToggleOption
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { FormControl} from "react-bootstrap";


const FormControlIntl = ({ details, intl, ...rest }) => (
  <FormControl {...rest} placeholder={intl.formatMessage({...details})}/>
  );

FormControlIntl.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(FormControlIntl);
