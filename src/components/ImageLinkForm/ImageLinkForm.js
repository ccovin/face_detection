import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
        <br/>
            <p className='purple f6'>
                {'Submit an image URL and the system will detect any human faces.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5 ba b--black-10 shadow-5 center'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-purple'
                        onClick={onButtonSubmit}
                    >Detect</button> 
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm;