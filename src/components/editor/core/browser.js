/*
 * @refer ueditor/_src/core/browser.js
 */

let agent = navigator.userAgent.toLowerCase();

let opera = window.opera;

let browser = {
    ie: /(msie\s|trident.*rv:)([\w.]+)/.test(agent),
    opera: ( !!opera && opera.version ),
    webkit: ( agent.indexOf(' applewebkit/') > -1 ),
    mac: ( agent.indexOf( 'macintosh' ) > -1 ),
    quirks: ( document.compatMode == 'BackCompat' )
}

browser.gecko = ( navigator.product == 'Gecko' && !browser.webkit && !browser.opera && !browser.ie);

let version = 0;

if (browser.ie) {
    let v1 =  agent.match(/(?:msie\s([\w.]+))/);
    let v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
    if (v1 && v2 && v1[1] && v2[1]) {
        version = Math.max(v1[1]*1,v2[1]*1);
    } else if (v1 && v1[1]) {
        version = v1[1]*1;
    } else if (v2 && v2[1]) {
        version = v2[1]*1;
    } else {
        version = 0;
    }

    browser.ie11Compat  = document.documentMode == 11;
    browser.ie9Compat   = document.documentMode == 9;
    browser.ie8         = !!document.documentMode;
    browser.ie8Compat   = document.documentMode == 8;
    browser.ie7Compat   = ( ( version == 7 && !document.documentMode ) || document.documentMode == 7 );
    browser.ie6Compat   = ( version < 7 || browser.quirks );
    browser.ie9above    = version > 8;
    browser.ie9below    = version < 9;
    browser.ie11above   = version > 10;
    browser.ie11below   = version < 11;
}

if ( browser.gecko ) {
    var geckoRelease = agent.match( /rv:([\d\.]+)/ );
    if ( geckoRelease )
    {
        geckoRelease = geckoRelease[1].split( '.' );
        version = geckoRelease[0] * 10000 + ( geckoRelease[1] || 0 ) * 100 + ( geckoRelease[2] || 0 ) * 1;
    }
}

if (/chrome\/(\d+\.\d)/i.test(agent)) {
    browser.chrome = + RegExp['\x241'];
}

if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
    browser.safari = + (RegExp['\x241'] || RegExp['\x242']);
}

// Opera 9.50+
if ( browser.opera ) {
    version = parseFloat( opera.version() );
}

// WebKit 522+ (Safari 3+)
if ( browser.webkit ) {
    version = parseFloat( agent.match( / applewebkit\/(\d+)/ )[1] );
}

/*
 * IE系列返回值为5,6,7,8,9,10等
 * gecko系列会返回10900，158900等
 * webkit系列会返回其build号 (如 522等)
 */
browser.version = version;

export default browser
