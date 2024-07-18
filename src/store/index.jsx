import {proxy} from 'valtio';

const state = proxy({
    intro: true,
    color: '#F2525D',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
    
});

export default state;