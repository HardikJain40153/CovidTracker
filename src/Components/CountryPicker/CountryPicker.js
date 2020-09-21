import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import './CountryPicker.css';
import { fetchCountries } from '../../Api';
const CountryPicker = ({handleCountryChange}) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);
	useEffect(() => {
		const fetchApi = async () => {
			setFetchedCountries(await fetchCountries());
		}
		fetchApi();
	}, [setFetchedCountries]);
	return(
		<div className='tc'>
		<FormControl className='formControl'>
			<label className='f3 mh3 tc fw5' htmlFor="countries">Select Country</label>
			<NativeSelect className= 'outline-0 mv5 pa2 tc br4' defaultValue='' onChange ={(e) =>handleCountryChange(e.target.value)}>
				<option value='global'>Global</option>
				{fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
			</NativeSelect>
		</FormControl>
	  </div>
		);
}
export default CountryPicker;