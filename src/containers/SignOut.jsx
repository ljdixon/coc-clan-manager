import React from 'react';
import { Menu } from 'semantic-ui-react'

import { auth } from '../firebase';

const SignOutButton = () =>

  <Menu.Item onClick={auth.doSignOut}>Sign Out</Menu.Item>

export default SignOutButton;