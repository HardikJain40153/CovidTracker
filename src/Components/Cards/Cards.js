import React from 'react';
import './Cards.css';
import CountUp from 'react-countup';
const Cards = ({data: { confirmed, recovered, deaths, lastupdate } }) => {
	if(!confirmed){
		return 'Loading...';
	}
	return (
		<div>
			<div className="center">
				<img src="https://image.freepik.com/free-vector/coronavirus-horizontal-background-with-cell-diseases-isolated-white-background_68196-3495.jpg" alt = "cover" />
			</div>
			<div>
				<h2 className='tc'>{new Date().toDateString()}</h2>
			</div>
			<container className='center' style={{width:'100%'}} >
				<div className='bg-red tc center dib br3 pa3 ma5 grow shadow-5'>
                <article className="mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-4">
                    <h1 className="f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Active</h1>
                    <div className="pa3 bt b--black-10 bg-white" style={{color: '#031961'}}>
                        <p className="f6 f2-ns lh-copy measure">
                          <CountUp className='color' start={0} end={confirmed.value-recovered.value-deaths.value} separator=',' duration={1.5} />
                        </p>
                        <h3>Number of Active cases of covid-19</h3>
                    </div>
                </article>
                </div>
                <div className='bg-red tc center dib br3 pa3 ma5 grow shadow-5'>
                <article className="mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-4">
                    <h1 className="f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Confirmed</h1>
                    <div className="pa3 bt b--black-10 bg-white" style={{color: '#031961'}}>
                        <p className="f6 f2-ns lh-copy measure">
                            <CountUp className='color'start={0} end={confirmed.value} separator=',' duration={1.5} />
                        </p>
                        <h3>Number of Confirmed cases of covid-19</h3>
                    </div>
                </article>
                </div>
                <div className='bg-red tc center dib br3 pa3 ma5 grow shadow-5'>
                <article className="mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-4">
                    <h1 className="f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Recovered</h1>
                    <div className="pa3 bt b--black-10 bg-white" style={{color: '#031961'}}>
                        <p className="f6 f2-ns lh-copy measure">
                           <CountUp className='color' start={0} end={recovered.value} separator=',' duration={1.5} />
                        </p>
                        <h3>Number of Recovered cases of covid-19</h3>
                    </div>
                </article>
                </div>
                <div className='bg-red tc center dib br3 pa3 ma5 grow shadow-5'>
                <article className="mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-4">
                    <h1 className="f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Deaths</h1>
                    <div className="pa3 bt b--black-10 bg-white" style={{color: '#031961'}}>
                        <p className="f6 f2-ns lh-copy measure">
                          <CountUp className='color' start={0} end={deaths.value} separator=',' duration={1.5} />
                        </p>
                        <h3>Number of Deaths due to covid-19</h3>
                    </div>
                </article>
                </div>
			</container>
				
		</div>
		);
}
export default Cards;