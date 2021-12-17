import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import * as React from 'react';

import { getRequest } from '@Api/v1/account';

import { defaultProps, propTypes } from './TestComponent.shape.js';

const DEFAULT_SEARCH_STATE = { accountTypeFilter: 'ALL', accountTypeSearch: '' };
const DEFAULT_SUBSCRIPTIONS_STATE = [];

const TestComponent = () => {
  // Hooks

  // State: global

  // State: local
  const [subscriptions, setSubscriptions] = React.useState(DEFAULT_SUBSCRIPTIONS_STATE);
  const [search, setSearch] = React.useState(DEFAULT_SEARCH_STATE);

  // Effects
  React.useEffect(() => {
    const getSubscriptions = async () => {
      const response = await getRequest({ url: '/account/v1.0/subscriptions' });
      const { subscriptionDtos } = response;
      setSubscriptions(subscriptionDtos);
    };

    getSubscriptions();
  }, []);

  // Logic
  const handleChange = event => {
    const { name, value } = event.target;
    setSearch(prevState => ({ ...prevState, [name]: value }));
  };

  // Render
  return (
    <React.Fragment>
      <FormControl sx={{ m: 1, width: '50ch' }} fullWidth>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InputLabel id='accountType-filter-label'>Account Type</InputLabel>
          <Select
            labelId='accountType-filter-label'
            id='accountType-filter'
            name='accountTypeFilter'
            defaultValue='ALL'
            label='Account Type'
            onChange={handleChange}>
            <MenuItem value='ALL'>ALL</MenuItem>
            <MenuItem value='BORROWER'>BORROWER</MenuItem>
            <MenuItem value='THIRD_PARTY'>THIRD_PARTY</MenuItem>
          </Select>

          <TextField
            id='accountType-search'
            name='accountTypeSearch'
            label='Search'
            type='search'
            onChange={handleChange}
          />
        </Box>
        <Button variant='contained'>Contained</Button>
      </FormControl>
      <div>
        <ul>
          {subscriptions.length &&
            subscriptions.map(item => {
              const { id, userFirstName, userLastName } = item;
              return <li key={id}>{`${userFirstName} ${userLastName}`}</li>;
            })}
        </ul>
      </div>
    </React.Fragment>
  );
};

TestComponent.defaultProps = { ...defaultProps };
TestComponent.propTypes = { ...propTypes };

export default TestComponent;
